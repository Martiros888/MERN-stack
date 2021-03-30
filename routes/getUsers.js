const express = require('express');
const app = express.Router();
const User = require('../model/mongoDB_model');

app.post('/',async (req, res)=>{
    try{
        let data = await User.find({})
        res.send(data)
    } catch(err){
        console.log(err)
    }
})

module.exports = app;