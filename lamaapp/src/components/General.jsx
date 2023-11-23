import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux"
import { generalPOST } from "../REDUX/Uploaddata/action";
import Loader from "./Loader";
function General() {
  const dispatch=useDispatch()
  const {isLoading}=useSelector((store)=>store.uplodedatareducer)
  const [formData, setFormData] = useState({
    chatbotName: "",
    welcomeMessage: "",
    inputPlaceholder: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
   
    dispatch(generalPOST(formData))
    setFormData({
      chatbotName: "",
      welcomeMessage: "",
      inputPlaceholder: "",
    })
  };

  return (
    <div>
     <div className="w-full mx-auto p-2">
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <label className="text-lg font-semibold" htmlFor="chatbotName">
            Chatbot Name:
          </label>
          <input
            type="text"
            id="chatbotName"
            name="chatbotName"
            value={formData.chatbotName}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md"
            required
          />
          <p className="text-xs text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <label className="text-lg font-semibold" htmlFor="welcomeMessage">
            Welcome Message:
          </label>
          <input
            type="text"
            id="welcomeMessage"
            name="welcomeMessage"
            value={formData.welcomeMessage}
            onChange={handleChange}
            placeholder="Enter Welcome Message"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <label className="text-lg font-semibold" htmlFor="inputPlaceholder">
            Input Placeholder:
          </label>
          <input
            type="text"
            id="inputPlaceholder"
            name="inputPlaceholder"
            value={formData.inputPlaceholder}
            onChange={handleChange}
            placeholder="Enter Input Placeholder"
            className="p-3 border border-gray-300 rounded-md"
            required
          />
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
          disabled={isLoading}
            type="submit"
            className="bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
          >
            {isLoading?"Loading...":"Save Configuration"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default General;
