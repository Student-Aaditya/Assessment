const mongoose=require("mongoose");
const passportlocalmongoose=require("passport-local-mongoose");

const AuthSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    
})
AuthSchema.plugin(passportlocalmongoose);
const Auth=mongoose.model("Auth",AuthSchema)
module.exports=Auth;