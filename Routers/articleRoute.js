
const express = require('express')
const user=require('../Models/article');
const route=express.Router();
const path = require("path");
route.use(express.static("Front"))
const multer = require("multer");
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
// app.use(fileUpload());
const cookieParser = require('cookie-parser')
const { verify }=require('crypto')
const jwt = require("jsonwebtoken");
const key="keystring";
route.use(cookieParser())
route.use(bodyParser.json())
const userdb = require('../Models/user');




// route.delete('/deleta',async function(req,res){
//     let deleteData= await user.deleteOne({_id:req.body._id})
//     if(deleteData)
//     {
//         res.send(deleteData);
//     }
//     else
//     {
//         res.send("Error");
//     }
// })



module.exports=route;





