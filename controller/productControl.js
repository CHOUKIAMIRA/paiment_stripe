const products=require("../model/productModel")
exports.addProduct=async(req,res)=>{
    console.log(req.body)
try {
   const product = new products(req.body)
   await product.save() 
   res.status(200).send({msg:"product added successfully",product})
} catch (error) {
    console.log(error)
    res.status(500).send({msg:"product not added",error})
}
}
exports.getProducts=async(req,res)=>{
try {
   const allproducts = await products.find()
   res.status(200).send({msg:"products get successfully",allproducts})
} catch (error) {
    res.status(500).send({msg:"product not geted",error})
}
}
exports.deleteProduct=async(req,res)=>{
    try {
       const deleted = await products.findByIdAndDelete(req.params.id)
       res.status(200).send({msg:"product delete successfully",deleted})
    } catch (error) {
        res.status(500).send({msg:"product not delete",error})
    }
    }
    exports.updateProduct=async(req,res)=>{
        try {
           const update = await products.findByIdAndUpdate(req.params.id,{$set:req.body})
           res.status(200).send({msg:"product updated successfully",update})
        } catch (error) {
            res.status(500).send({msg:"product not updated",error})
        }
        }