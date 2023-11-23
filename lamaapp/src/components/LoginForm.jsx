// LoginForm.js
import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { userlogin } from "../REDUX/UserAuth/action";
import { succesAlert } from "./Notification";
import {ToastContainer} from "react-toastify"
const LoginForm = ({ onClose }) => {
  const dispatch=useDispatch()
  const {isLoading}=useSelector((store)=>store.userreducer)
  const [UserEmail, setUserEmail] = useState("");
  const [username, setusername] = useState("");
  const [error, setError] = useState(null);

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      
      if (UserEmail  && username ) {
      
    
          dispatch(userlogin({ email:UserEmail,username })).then((res)=>{
            succesAlert("user registred")
            onClose();
          });
          
    
      } else {
        // Simulating a failed login
        setError("Invalid UserEmail or username. Please try again.");
      }
    } catch (error) {
      // Handle any error from the server
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <ToastContainer/>
      <div className="bg-white w-1/3 p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-gray-600"
            >
              UserEmail
            </label>
            <input
              type="email"
              id="UserEmail"
              name="UserEmail"
              value={UserEmail}
              onChange={handleUserEmailChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              value={username}
              onChange={handleusernameChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-logo-color text-white rounded-md"
              desdisabled={isLoading} 
            >
              {!isLoading?"Login":"Loading..."}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
