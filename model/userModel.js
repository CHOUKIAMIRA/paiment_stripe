const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:String,
    mail:String,
    phone:Number,
    image:String,
    age:Number
}, {
    timestamps:true
})
module.exports=mongoose.model("users",userSchema)