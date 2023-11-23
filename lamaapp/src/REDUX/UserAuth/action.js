import axios from "axios"
import { USERLOGIN_ERROR, USERLOGIN_REQUEST, USERLOGIN_SUCCESS } from "./actiontype"
 const  login=async(data)=>{
      return await axios.post(process.env.REACT_APP_BASEURL + "/user/signup", data)
 }
export const userlogin=(userdata)=>async(dispatch)=>{
    
       dispatch(userrequest())
       try {
       const res= await login(userdata)
       
       dispatch(usersuccess(res?.data))
       } catch (error) {
        console.log(error)
        dispatch(usererror(error?.response?.data))
        
       }

}


export const userrequest=()=>{
    return{type:USERLOGIN_REQUEST}
}
export const usersuccess=(payload)=>{
    return {type:USERLOGIN_SUCCESS,payload}
}
export const usererror=(payload)=>{return{type:USERLOGIN_ERROR,payload}}