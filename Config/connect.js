const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/BlogSite').then(function(data)
{
console.log("connected")
}).catch(err=>{
    console.log(err)
})

