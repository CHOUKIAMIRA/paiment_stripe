import axios from "axios"
import { ADDTOCART, DELETECART, GETPRODUCTS, REMOVEFROMCART } from "../actionType/actionTypeProducts"
export const getProducts =() => async(dispatch)=>{
   try {
   const res=await axios.get("http://localhost:8000/api/product/get")
      dispatch({
        type:GETPRODUCTS,
        payload:res.data
      })
   } catch (error) {
    console.log(error)
   }
}
export const addProduct =(data) => async(dispatch)=>{
    try {
    const res=await axios.post("http://localhost:8000/api/product/add",data)
       dispatch(getProducts())
    } catch (error) {
     console.log(error)
    }
 }
 export const deleteproduct =(id) => async(dispatch)=>{
   try {
   const res=await axios.delete("http://localhost:8000/api/product/delete/"+id)
      dispatch(getProducts())
   } catch (error) {
    console.log(error)
   }
}
export const addtocart = (product,quantity) =>{

   return {
      type:ADDTOCART,
      payload:{product,quantity}
   }
} 
export const removefromcart = (id) =>{

   return {
      type:REMOVEFROMCART,
      payload:id
   }
} 
export const deletecart = () =>{

   return {
      type:DELETECART
   
   }
} 