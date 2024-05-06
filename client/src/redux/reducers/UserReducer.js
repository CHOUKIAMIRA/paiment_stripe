import { GETUSERS } from "../actionType/usersactiontype"


const initialState = {
    users:[],
    msg:""
}

export const usersreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSERS:
    return { ...state, users:payload.allusers,msg:payload.msg }

  default:
    return state
  }
}
