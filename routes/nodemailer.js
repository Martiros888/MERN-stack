const nodemailer = require("nodemailer");
const express = require("express");
const app = express.Router();

const transporter = nodemailer.createTransport(
    {
        host: "smtp.mail.ru",
        port: 465,
        secure: true, // if 465 true else false
        auth: {
            user: "tahku_ohjluhe@mail.ru",
            pass: "okmijnuhbygvtfcesz147896325",
        },
    },
    {
        from: "Martiros",
    },
);

const mailer = (message) => {
    transporter.sendMail(message, (err, data) => {
        if (err) throw err;
        console.log("Email sended");
    });
};

module.exports = mailer;
