const express=require("express")
const { getusers, getOneUser, getByAge, addusers, deleteusers, updateuser } = require("../controller/userControl")
const userRouter=express.Router()
userRouter.get("/users/get",getusers)
userRouter.get("/users/getOne/:x",getOneUser)
userRouter.get("/users/getage",getByAge)
userRouter.post("/users/add",addusers)
userRouter.delete("/users/delete/:id",deleteusers)
userRouter.put("/users/update/:id",updateuser)
module.exports=userRouter

