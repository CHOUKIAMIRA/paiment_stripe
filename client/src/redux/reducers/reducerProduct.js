import { ADDTOCART, DELETECART, GETPRODUCTS, REMOVEFROMCART } from "../actionType/actionTypeProducts"

const initialState = {
    products:[],
    msg:"",
    panier:[]
}

export const productreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPRODUCTS:
    return { ...state, products:payload.allproducts,msg:payload.msg }

  case ADDTOCART:
  return {...state,panier:[...state.panier,payload]}
  
  case REMOVEFROMCART:
  return {...state,panier:state.panier.filter(e=>e.product._id !== payload)}

  case DELETECART:
  return {...state,panier:[]}
  default:
    return state
  }
}
