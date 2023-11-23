import axios from "axios"
import { PROJECT_UPLOAD_ERROR, PROJECT_UPLOAD_REQUEST, PROJECT_UPLOAD_SUCCESS, PROJECTUPLOAD_GET_SUCCESS,PROJECT_DEL_UPLOAD_SUCCESS, PROJECT_UPDATE_UPLOAD_SUCCESS } from "./actiontype"

const config=()=>{
    const token = localStorage.getItem('token'); 
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };
    return config
}
 const  projectupload=async(data)=>{
      return await axios.post(process.env.REACT_APP_BASEURL + "/project/upload", data,config())
 }
 const  projectdelete=async(id)=>{
    
      return await axios.delete(`${process.env.REACT_APP_BASEURL}/project/delete/${id}`,config())
 }
export const projectUPLOAD=(Projectdata)=>async(dispatch)=>{
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() ; 
const year = currentDate.getFullYear();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
       dispatch(Projectrequest())
       try {
       const res= await projectupload({...Projectdata,time: `${day} ${month < 10 ? '0' : ''}${months[month]} ${year} | ${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`})
       dispatch(Projectsuccess(res))
       } catch (error) {
        dispatch(Projecterror(error?.response?.data))
       }

}
export const getuploadProject=async(dispatch)=>{
    
    dispatch(Projectrequest())
    try {
      
    const res= await axios.get(process.env.REACT_APP_BASEURL + "/project/getupload",config())

    dispatch(Projectsuccessget(res.data.data))
    } catch (error) {
        console.log(error)
     dispatch(Projecterror(error?.response?.data))
    }
}
export const deleteuploadProject=(id)=>async(dispatch)=>{
    
    
    dispatch(Projectrequest())
    try {
      
    const res= await projectdelete(id)
    dispatch(Projectsuccessget(res.data))
    } catch (error) {
        console.log(error)
     dispatch(Projecterror(error?.response?.data))
    }
}
export const updateuploadProject=(id,data)=>async(dispatch)=>{
    
    
    dispatch(Projectrequest())
    try {
      
    const res=   await axios.put(`${process.env.REACT_APP_BASEURL}/project/update/${id}`,data,config())
    console.log(res)
    dispatch(Projectupdate(res?.data))
    } catch (error) {
        console.log(error)
     dispatch(Projecterror(error?.response?.data))
    }
}


export const Projectrequest=()=>{
    return{type:PROJECT_UPLOAD_REQUEST}
}
export const Projectdelete=(payload)=>{
    return{type:PROJECT_DEL_UPLOAD_SUCCESS}
}
export const Projectupdate=(payload)=>{
    return{type:PROJECT_UPDATE_UPLOAD_SUCCESS}
}
export const Projectsuccess=(payload)=>{
    return {type:PROJECT_UPLOAD_SUCCESS,payload}
}
export const Projectsuccessget=(payload)=>{
    console.log(payload)
    return {type:PROJECTUPLOAD_GET_SUCCESS,payload}
}
export const Projecterror=(payload)=>{return{type:PROJECT_UPLOAD_ERROR,payload}}