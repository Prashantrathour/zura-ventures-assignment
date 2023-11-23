import axios from "axios"
import { PROJECT_CREATE_ERROR, PROJECT_CREATE_REQUEST, PROJECT_CREATE_SUCCESS, PROJECT_GET_SUCCESS } from "./actiontype"
 const  createproject=async(data)=>{
    const token = localStorage.getItem('token'); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
      return await axios.post(process.env.REACT_APP_BASEURL + "/project/create", data,config)
 }
 const  getproject=async()=>{
    const token = localStorage.getItem('token'); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
      return await axios.get(process.env.REACT_APP_BASEURL + "/project",config)
 }
export const projectCreate=(Projectdata)=>async(dispatch)=>{
    
       dispatch(Projectrequest())
       try {
       const res= await createproject({name:Projectdata,episode:4})
       dispatch(Projectsuccess(res?.data))
       } catch (error) {
        console.log(error)
        dispatch(Projecterror(error?.response?.data))
       }

}
export const getProject=async(dispatch)=>{
    dispatch(Projectrequest())
    try {
     
    const res= await getproject()
    dispatch(Projectsuccessget(res?.data?.data))
    } catch (error) {
        console.log(error)
     dispatch(Projecterror(error?.response?.data))
    }
}


export const Projectrequest=()=>{
    return{type:PROJECT_CREATE_REQUEST}
}
export const Projectsuccess=(payload)=>{
    return {type:PROJECT_CREATE_SUCCESS,payload}
}
export const Projectsuccessget=(payload)=>{
    
    return {type:PROJECT_GET_SUCCESS,payload}
}
export const Projecterror=(payload)=>{return{type:PROJECT_CREATE_ERROR,payload}}