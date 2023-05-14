require('./Config/connect');
const express = require('express');
const app = express();
const port = 8080;
const path = require("path");

const cors =require("cors");

const userRoute =require('./Routers/userRoute');
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/direct',userRoute);
app.use(express.static("Front"))

app.get('/',(req,res)=> res.render('./Front/form-register.html'))  ;

app.get("/creat-article", function(req,res){
    res.render("creat-article");
   })
   app.get("/login", function(req,res){
    res.render("login");
   })

app.get('/', (req, res) => res.send('My server is live'))
app.listen(port,function (){console.log("My server is live"+ port)});
