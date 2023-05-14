const mongoose = require('mongoose');
const blogSchema=mongoose.Schema({
    authorid: Object,
title:{
    type : String,
    required:true
},
body:{
    type:String,
    required:true

},
author:{
    type:String,
    required:true,
},
summary:{
    type:Object,
    required:true
},
photo:{
    type:String,
    required:true,
}

})
const Blog = mongoose.model('blogs',blogSchema)
module.exports=Blog;

  


    


