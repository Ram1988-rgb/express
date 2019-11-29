var mongoose = require('mongoose');
 
const adminSchema = new mongoose.Schema({   
    name: String,
    email: String,
    password : String,
    phone:String
});
 
var AdminModel = mongoose.model("Admin", adminSchema);
 
module.exports = AdminModel;
