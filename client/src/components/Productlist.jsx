import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteproduct, getProducts } from '../redux/actions/actionProduct'


import { toast } from 'react-toastify';
import ProductCart from './ProductCart';
function Productlist() {
    const dispatch=useDispatch()
    const msg=useSelector(state=>state.productreducer.msg)
    useEffect(()=>{
        dispatch(getProducts())
      if(msg!==""){
       toast.success(msg,{
        className:"toast-dar"
       }) 
      }
    },[msg])
    const products=useSelector(state=>state.productreducer.products)
   
    console.log(products,msg)
    
    
  return (
    
    <div style={{display:"flex", justifyContent:"center",gap:"10px",flexWrap:"wrap"}}>
       
        {products.map(e=>
        <ProductCart e={e}/>
    )}
    </div>
  )
}

export default Productlist
