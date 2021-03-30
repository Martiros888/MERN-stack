const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/mongoDB_model');

app.post('/',async (req, res)=>{
    try{
        const token = req.body.token
        let parsedData = JSON.parse(token)
        let decodetToken = jwt.decode(parsedData.token)
        let x = await User.findOne({email:decodetToken.email})
        res.send(x)
    } catch(err){
        console.log(err)
    }
})



module.exports = app;