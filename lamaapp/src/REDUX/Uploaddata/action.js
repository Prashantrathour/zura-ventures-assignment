import axios from "axios"
import { PROJECT_POST_ERROR, PROJECT_POST_REQUEST, PROJECT_POST_SUCCESS} from "./actiontype"
 const  POSTproject=async(data)=>{
    const token = localStorage.getItem('token'); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
      return await axios.post(process.env.REACT_APP_BASEURL + "/project/config", data,config)
 }
 const  generalpost=async(data)=>{
    const token = localStorage.getItem('token'); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
      return await axios.post(process.env.REACT_APP_BASEURL + "/project/general", data,config)
 }

export const projectPOST=(Projectdata)=>async(dispatch)=>{
    
       dispatch(Projectrequest())
       try {
       const res= await POSTproject({...Projectdata})
       dispatch(Projectsuccess(res?.data))
       } catch (error) {
        console.log(error)
        dispatch(Projecterror(error?.response?.data))
       }

}
export const generalPOST=(Projectdata)=>async(dispatch)=>{
    console.log(Projectdata)
       dispatch(Projectrequest())
       try {
       const res= await generalpost({...Projectdata})
       dispatch(Projectsuccess(res?.data))
       } catch (error) {
        console.log(error)
        dispatch(Projecterror(error?.response?.data))
       }

}



export const Projectrequest=()=>{
    return{type:PROJECT_POST_REQUEST}
}
export const Projectsuccess=(payload)=>{
    return {type:PROJECT_POST_SUCCESS,payload}
}

export const Projecterror=(payload)=>{return{type:PROJECT_POST_ERROR,payload}}