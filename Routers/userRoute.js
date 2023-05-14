const express=require('express')
const route=express.Router();
const path = require("path");
const userdb =require('../Models/user');
const user=require('../Models/article');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const multer = require("multer");
const key="keystring";
const jwt = require("jsonwebtoken");
route.use(express.static('Front'));
route.use(cookieParser())
route.use(bodyParser.json())
route.use(express.static("Front"));
const { verify }=require('crypto');
const Blog = require('../Models/article');
const { error } = require('console');
route.use(cookieParser())
route.use(bodyParser.json())
route.use(bodyParser.urlencoded({ extended: true }))

// routes start
// reg route

route.post('/reg',async function(req,res){

    try {
        const userForm = await userdb.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        const pathfile = path.join(__dirname, '../Front/Login.html');
        res.sendFile(pathfile);
      } catch (error) {
        
        console.error(error);
        res.status(500).send('Error creating user');
      }
});
// login route
route.post('/login', async function(req, res) {
  let useregister=await userdb.findOne({$and:[{name:req.body.name},{password:req.body.password}]})

  if (useregister) {
    
    let pay = {userid : useregister._id}
    const token = jwt.sign(pay, 'key')
    res.cookie('token',token,{maxAge:360000})
    const pathfile = path.join(__dirname, '../Front/home.html');
    res.sendFile(pathfile);
  } else {
    const pathfile2 = path.join(__dirname, '../Front/Login.html');
    res.sendFile(pathfile2);
  }
});

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './Front/uploads');
  },
  filename: (req, file, cb) => {
    const dateStr = new Date().toISOString().replace(/:/g, '-');
    cb(null, `${dateStr}-${file.originalname}`);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type.'));
  }
};

const upload = multer({ storage: fileStorage, fileFilter });

// create blog start
route.post('/art',upload.single('photo'),bodyParser.urlencoded({extended:false}), async function(req,res)
{
  let usertoken=jwt.verify(req.cookies.token,'key')
  let author=await userdb.findOne({_id:usertoken.userid})
    
    let articleform = await user.create (
        {
            title:req.body.title,
            summary:req.body.summary,
            body:req.body.body,
            author:req.body.author,
             photo: req.file.filename,
            authorid : author
            
        }   );
    
    if(articleform)
{
     res.sendFile(path.join(__dirname,'../Front/home.html'))
    console.log("good");
} 
else
{
    res.status(404).send('not found');
}
})
route.get('/show',async function(req,res){
    let blogs=await user.find()
    if(blogs){
        res.send(blogs)
    }else{
        res.send('erorr')
    }
})
route.get('/homeTest',async function(req,res){
  res.sendFile(path.join(__dirname,'../Front/home.html'))

})
route.get('/showauth',async function(req,res){

  let usertoken=jwt.verify(req.cookies.token,'key')
  let author=await userdb.findOne({_id:usertoken.userid})
  let blogs =await user.find({authorid:author});
  if(blogs){
    // console.log(blogs);
    res.send(blogs)
  }else{
    res.send('erorr')
  }

})
///////////////////////////////delete////////

route.delete('/del/:id',async function(req,res){
  let usertoken=jwt.verify(req.cookies.token,'key')
  let author=await userdb.findOne({_id:usertoken.userid})
  let blogs =await user.deleteOne({authorid:author});
  // let deleteData= await user.deleteOne({_id:utoken.userid})
  if(blogs == true){
    const pathf = path.join(__dirname, '../Front/home.html');
    res.sendFile(pathf);
}else{
    res.send('erorr')
}
console.log(blogs)
})
/////////////////search
route.post('/search', async (req, res) => {
  const searchTerm = req.body.search;
  const regex = new RegExp(searchTerm, 'i');
  const results = await Blog.find({ title: regex });
  if(results){
res.send(results)
  }
 else{
  res.send('erorr')
 }
        });

module.exports=route;