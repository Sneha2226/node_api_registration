const mongoose = require("mongoose")
const registerSchema = new mongoose.Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        unique: true,
        type: String
    },
    Repeatpaasward:{
        required: true,
        unique: true,
        type: String
    }
})
// we will create a mongoose.Collection
const Register=new mongoose.model("Register",registerSchema);
module.exports=Register;