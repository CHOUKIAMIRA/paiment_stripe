import axios from "axios"
import { GETUSERS } from "../actionType/usersactiontype"

export const getusers =() => async(dispatch)=>{
   try {
   const res=await axios.get("http://localhost:8000/users/get")
      dispatch({
        type:GETUSERS,
        payload:res.data
      })
   } catch (error) {
    console.log(error)
   }
}