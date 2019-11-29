var mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({   
    name: String,
    email: String,
    password : String,
    phone:String
});
 
var UserModel = mongoose.model("User", userSchema);
 
module.exports = UserModel;
