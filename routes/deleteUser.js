const express = require('express');
const app = express.Router();
const User = require('../model/mongoDB_model');

app.post('/',async (req, res)=>{
    try{
        console.log(req.body._id)
        await User.findByIdAndDelete(req.body._id)
        res.send({message:'deleted'})
    } catch(err){
        console.log(err)
    }
})

module.exports = app;