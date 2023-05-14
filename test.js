


require('./Config/connect');
const express = require('express');
const app = express();
const port = 8080;
const articleRoute=require('./Routers/articleRoute');
const path = require("path");
const multer=require('multer')
const filestorge= multer.diskStorage({            
    destination:(req,file,callbackfun )=>{
        callbackfun(null,'./uploads/')
    },
    filename:(req, file, cd)=>
    {
        cd(nuul,file.originalname.replaceAll(" ",''))
    }
})
const upload=multer({storage:filestorge})
const cors =require("cors");
app.use(cors());
app.use(express.static("Front"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// const TodoRoute=require('./Routers/TodoRoute');
// app.use(express.urlencoded({extended: false}))
app.use('/tt', articleRoute);
// app.use('/user',TodoRoute);
// app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'index.html')))  
app.post('/img',upload.single('photo'),(req, res)=>    //back-end 
{
    console.log(req.file);
    res.send("done");
}
)
app.get("./articleform", function(req,res){
    res.render("articleform");
   })
app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./Front/index.html')))


app.get('/', (req, res) => res.send('My server is live'))
app.listen(port,function (){console.log("My server is live"+ port)});
// require('./Config/connect');
// const express = require('express');
// const app = express();
// const port = 8080;
// const articleRoute=require('./Routers/articleRoute');
// const path = require("path");
// const multer=require('multer')
// const filestorge= multer.diskStorage({            
//     destination:(req,file,callbackfun )=>{
//         callbackfun(null,'./uploads/')
//     },
//     filename:(req, file, cd)=>
//     {
//         cd(nuul,file.originalname.replaceAll(" ",''))
//     }
// })
// const upload=multer({storage:filestorge})
// const cors =require("cors");
// app.use(cors());
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// // const TodoRoute=require('./Routers/TodoRoute');
// // app.use(express.urlencoded({extended: false}))
// app.use('/tt', articleRoute);
// // app.use('/user',TodoRoute);
// app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'index.html')))  
// app.post('/img',upload.single('photo'),(req, res)=>    //back-end 
// {
//     console.log(req.file);
//     res.send("done");
// }
// )

// app.get('/', (req, res) => res.sendFile(path.join(__dirname,'./Front/index.html')))


// app.get('/', (req, res) => res.send('My server is live'))
// app.listen(port,function (){console.log("My server is live"+ port)});
// require('./Config/connect');
// const express = require('express');
// const app = express();
// const port = 8080;
// const articleRoute=require('./Routers/articleRoute');

// const multer=require('multer') //////////////////////
// const filestorge= multer.diskStorage({                ///////////////////
//     destination:(req,file,callbackfun )=>{
//         // console.log(req,file);
//         callbackfun(null,'./uploads/')
//     },
//     filename:(req, file, cd)=>
//     {
//         cd(nuul,file.originalname.replaceAll(" ",' '))
//     }
// })//////////////////////////
// const upload=multer({storage:filestorge})//////////
// const cors =require("cors");
// app.use(cors());
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// // const TodoRoute=require('./Routers/TodoRoute');
// // app.use(express.urlencoded({extended: false}))
// app.use('/tt', articleRoute);
// // app.use('/user',TodoRoute);
// app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'index.html')))  /////////////////////
// app.post('/img',upload.single('photo'),(req, res)=>    //back-end ////////////////////////
// {
//     console.log(req.file);
//     res.send("done");
// }
// )

// // app.get("/" , function(req, res){
// //     let pathfile=path.join(__dirname,'register.html')
// //   res.send(pathfile)
// //   } )


// app.get('/', (req, res) => res.send('My server is live'))
// app.listen(port,function (){console.log("My server is live"+ port)});
