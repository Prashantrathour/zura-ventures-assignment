import { USERLOGIN_ERROR, USERLOGIN_REQUEST, USERLOGIN_SUCCESS } from "./actiontype";

const intialState={
    isLogin: false,
    token: null,
    isLoading: false,
    message:""
}
export const reducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case USERLOGIN_REQUEST:
           return {...state,isLoading:true}
        case USERLOGIN_SUCCESS:
            localStorage.setItem("token",payload.token)
           return {...state,isLoading:false,message:payload.message,token:payload.token,isLogin:payload.success}
        case USERLOGIN_ERROR:
           return {...state,isLoading:false,isLogin:false}
           
    
        default:
            return {...state};
    }
}