import React, { useState } from "react";
import { CiSaveDown1, CiSaveDown2 } from "react-icons/ci";
import { FaUpload } from "react-icons/fa6";
import { useDispatch,useSelector } from "react-redux";
import {ToastContainer,toast} from "react-toastify"
import axios from "axios";
import { errorAlert, succesAlert } from "./Notification";
import { projectPOST } from "../REDUX/Uploaddata/action";
import Loader from "./Loader";
function Display() {
const {isLoading}=useSelector((store)=>store.uplodedatareducer)
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    primaryColor: "#3498db",
    fontSize: "",
    fontColor: "",
    chatHeight: "",
    showSources: false,
    chatIconSize: "small",
    distanceFromBottom: "",
    positionOnScreen: "top-left",
    horizontalDistance: "",
    botIconImage: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      showSources: !prevData.showSources,
    }));
  };

  const handleBotIconImageChange = async (e) => {
    const image = e.target.files[0];
    const images = new FormData();
    images.append("file", image);
    images.append("upload_preset", "prashant_cloud");
    images.append("cloud_name", "djpuwf2xv");

    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/djpuwf2xv/image/upload`,
        images
      );
      formData.botIconImage=res.data.url
      setIcon(res?.data?.url);
      toast("Image uploaded successfully");
      setLoading(false);
    } catch (error) {
      console.error(error);
      errorAlert("Image upload failed");
      setLoading(false);
    }

    setFormData((prevData) => ({
      ...prevData,
    
    }));
  };

  const getFormData = () => {
    const requiredFields = ["fontSize", "fontColor", "chatHeight", "distanceFromBottom", "horizontalDistance"];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

dispatch(projectPOST(formData)).then((res)=>{

  toast.success("Form data saved successfully", {
    position: toast.POSITION.TOP_RIGHT,
  });
  setFormData({
    primaryColor: "#3498db",
    fontSize: "",
    fontColor: "",
    chatHeight: "",
    showSources: false,
    chatIconSize: "small",
    distanceFromBottom: "",
    positionOnScreen: "top-left",
    horizontalDistance: "",
    botIconImage: "",
  })
})
   
  };

  return (
    <div className="flex flex-col">
      <ToastContainer/>
      {/* First Div */}
      {!isLoading?<><div className="mb-4 w-full border-b-2 pb-5">
        <div className="flex w-full justify-between gap-10">
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Primary color
              </label>
              <div className="flex justify-between items-center">
                <div className="w-full mr-2">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-full"
                    value={formData.primaryColor}
                    onChange={(e) =>
                      handleInputChange("primaryColor", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="color"
                    className="rounded h-10"
                    value={formData.primaryColor}
                    onChange={(e) =>
                      handleInputChange("primaryColor", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Font Size (in px)
              </label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={formData.fontSize}
                onChange={(e) => handleInputChange("fontSize", e.target.value)}
              />
            </div>
          </div>

          <div className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Font color
              </label>
              <div className="flex justify-between items-center">
                <div className="w-full mr-2">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md w-full"
                    value={formData.fontColor}
                    onChange={(e) =>
                      handleInputChange("fontColor", e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center">
                  <input
                    type="color"
                    className="rounded h-10"
                    value={formData.fontColor}
                    onChange={(e) =>
                      handleInputChange("fontColor", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                Chat Height (in % of total screen)
              </label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                value={formData.chatHeight}
                onChange={(e) =>
                  handleInputChange("chatHeight", e.target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mx-1">
          <div className="mt-3">
            <h1 className="font-semibold">Show Sources</h1>
            <p className=" text-xs text-gray-600">
              Lorem fsasdfsadfasdf adfsadfsfsdf
            </p>
          </div>
          <div className=" flex items-end">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={formData.showSources}
                className="sr-only peer"
                onChange={handleCheckboxChange}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      
      <div className="w-full">
        <div className="p-3">
          <h4 className="font-semibold text-sm text-logo-color ">Chat Icon</h4>
        </div>
        <div className="flex w-full gap-9">
          <div className="w-full flex flex-col gap-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Chat Icon Size
            </label>
            <select
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.chatIconSize}
              onChange={(e) =>
                handleInputChange("chatIconSize", e.target.value)
              }
            >
              <option value="small">Small(48x48)</option>
              <option value="medium">Medium(64x64)</option>
              <option value="large">Large(120x120)</option>
            </select>

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Distance from Bottom (in px)
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.distanceFromBottom}
              onChange={(e) =>
                handleInputChange("distanceFromBottom", e.target.value)
              }
            />
          </div>

          <div className="w-full flex gap-4 flex-col">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Position on Screen
            </label>
            <select
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.positionOnScreen}
              onChange={(e) =>
                handleInputChange("positionOnScreen", e.target.value)
              }
            >
              <option value="top-left">Top Left</option>
              <option value="top-right">Top Right</option>
              <option value="bottom-left">Bottom Left</option>
              <option value="bottom-right">Bottom Right</option>
            </select>

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Horizontal Distance (in px)
            </label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              value={formData.horizontalDistance}
              onChange={(e) =>
                handleInputChange("horizontalDistance", e.target.value)
              }
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-5 flex justify-between ">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Bot Icon
          </label>

          <div className="flex gap-3 mt-2">
            <div className=" w-20 h-20 rounded-full  bg-gray-500">{icon?<img src={icon}/>:""}</div>
            <div className="flex flex-col justify-center items-center">
              <label className="flex gap-2 text-white font-medium bg-logo-color rounded p-2 justify-center items-center text-center">
                <span>{loading?"Loading...." :"Upload Image"}</span>
                <input
                disabled={loading} 
                  type="file"
                  className="hidden"
                  onChange={handleBotIconImageChange}
                />
                <FaUpload />
              </label>
              <p className="text-xs text-gray-500">Recommended Size: 48x48px</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={getFormData}
            className=" w-fit h-fit flex gap-2 text-white font-medium bg-logo-color rounded p-2 justify-center items-center text-center"
          >
            <spam>Save</spam>
            <CiSaveDown2 />
          </button>
        </div>
      </div></>:<Loader/>}
    </div>
  );
}

export default Display;
