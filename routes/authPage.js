const express = require("express");
const app = express.Router();
const User = require("../model/mongoDB_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("./nodemailer");
const axios = require("axios");

let code = "";

app.post("/registr", async (req, res) => {
    try {
        
        const { id, name, surname, email, password } = req.body;
        if (
            name.trim().length === 0 ||
            surname.trim().length === 0 ||
            email.trim().length <= 8 ||
            password.trim().length < 8
        ) {
            res.send({ message: "the inputs are not filled" });
        } else {
            let isThere = await User.findOne({ name });
            if (isThere) {
                res.send({ message: "already exists" });
            } else {
                await bcrypt.hash(password, 10, async (err, data) => {
                    if (err) throw err;
                    const newUsers = await new User({
                        id,
                        name,
                        surname,
                        email,
                        password: data,
                    });
                    code = "";
                    for (let i = 0; i < 6; i++) {
                        code += Math.floor(Math.random() * 10);
                    }
                    const message = {
                        from: "tahku_ohjluhe@mail.ru",
                        to: email,
                        subject: "Congratulations",
                        text: `  
                            dzer cody ${code}   
                        `,
                    };
                    mailer(message);
                    res.send({ message: "User saved" });
                });
            }
        }
        res.send("ok");
    } catch (err) {
        console.log(err);
    }
});

app.post("/login", async (req, res) => {
    try {
        const { loginEmail, loginPassword } = await req.body;
        let userEmail = await User.findOne({ email: loginEmail });
        if (userEmail) {
            const { id, name, surname, email, password } = await userEmail;
            await bcrypt.compare(loginPassword, password, (err, data) => {
                if (err) throw err;
                if (data) {
                    const objectOfData = {
                        id,
                        name,
                        surname,
                        email,
                        password,
                    };
                    const token = jwt.sign(objectOfData, "secret", {
                        expiresIn: 3600,
                    });
                    res.send({ token, userEmail });
                } else {
                    res.send({ message: `password is incorect try again` });
                }
            });
        } else {
            res.send({ message: "sorry your login or email are not right" });
        }
    } catch (err) {
        console.log(err);
    }
});

app.post("/save", async (req, res) => {
    try {
        const {
            verificationCode,
            id,
            email,
            name,
            surname,
            password,
        } = req.body;
        if (verificationCode === code) {
            await bcrypt.hash(password, 10, async (err, data) => {
                if (err) throw err;
                const newUsers = await new User({
                    id,
                    name,
                    surname,
                    email,
                    password: data,
                });
                await newUsers.save();
                res.send({ message: "User saved" });
            });
        } else {
            res.send({ message: "error" });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = app;
