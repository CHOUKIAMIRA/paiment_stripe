const express=require("express")
const { addProduct, getProducts, deleteProduct, updateProduct } = require("../controller/productControl")
const { paiment } = require("../controller/paimentController")
const productRouter=express.Router()

productRouter.post("/product/add",addProduct)
productRouter.get("/product/get",getProducts)
productRouter.delete("/product/delete/:id",deleteProduct)
productRouter.put("/product/update/:id",updateProduct)
productRouter.post("/create-checkout-session",paiment)
module.exports=productRouter
