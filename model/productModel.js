const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    title:{type:String,required:true},
    price:Number,
    description:String,
    image:String
}, {
    timestamps:true
})
module.exports=mongoose.model("products",productSchema)