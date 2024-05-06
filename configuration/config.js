const mongoose= require("mongoose")
exports.config=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/workshop")
        console.log("database is conncted")
    } catch (error) {
       console.log(error) 
    }
}
//module.exports=config