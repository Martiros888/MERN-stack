const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.port;
const mongoURL = process.env.mongodb;
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const fs = require('fs');


app.use(morgan(`dev`));
app.use(express.json())
app.use(express.urlencoded({
 extended: false
}))
// app.use(fileUpload({
//     createParentPath:true
// }))
// app.use(cors())




const mongoDB = () =>{
    mongoose.connect(mongoURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    },()=>console.log('mongoDB connected'))
}
mongoDB()


app.use('/api/auth',require('./routes/authPage'));
app.use('/getUsers',require('./routes/getUsers'))
app.use('/deleteUser',require('./routes/deleteUser'))
app.use('/autoLogin',require('./routes/autoLogin'))

app.post('/getFile',async (req, res)=>{
    try{
        res.sendFile(path.join(__dirname, './', 'getFileExample.tsx'))
    } catch(err){
        console.log(err)
    }
})



app.listen(port,()=> console.log(`server running on port ${port}`))