const users=require("../model/userModel")
exports.getusers =async (req,res) =>{
    try {
     const allusers=await users.find()   
     res.status(200).send({msg:"users getted",allusers})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"users not getted",error})
    }
}
exports.addusers=async(req,res)=>{
    try {
        const user= new users(req.body)
       await user.save()
       res.status(200).send({msg:"user is add",user})

        
    } catch (error) {
        res.status(500).send({msg:"user is not add",error})
    }
}
exports.deleteusers=async(req,res)=>{
    try {
         await users.findByIdAndDelete(req.params.id)
        res.status(200).send({msg:"delete successuful"})
    } catch (error) {
        console.log(error)
        res.status(500).send(({msg:"user is not delete",error}))
        
    }
}
exports.updateuser=async(req,res)=>{
    try {
       const upuser=await users.findByIdAndUpdate(req.params.id,{$set:req.body}) 
res.status(200).send({msg:"user is updated"},upuser)
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"user is updated",error})
        
    }
}
exports.getOneUser=async(req,res)=>{
    try {
        //const oneuser=await users.findById(req.params.id)
        const oneuser=await users.findOne({_id:req.params.x})
        res.status(200).send({msg:"user is getted",oneuser})
        
    } catch (error) {
        res.status(500).send({msg:"user is not getted",error})
    }
}
exports.getByAge=async(req,res)=>{
    try {
        const ages= await users.find({age:{$gt:req.body.age}})
        res.status(200).send({msg:"user is getted",ages})

    } catch (error) {
        res.status(500).send({msg:"user is not getted",error})
    }
}