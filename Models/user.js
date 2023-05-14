const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
  name: { type: String, required: true ,unique:true},
  email: { type: String, required: true },
  password: { type: String, required: true }
  // blogs: []
  } 
);
const userdb =mongoose.model('users',userSchema);

module.exports = userdb;