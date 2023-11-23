import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { CiHome, CiSettings } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaHomeSolid } from "react-icons/lia";
import podcastimg from "../image/cuate.jpg";
import CreateProjectPopUp from "../components/CreateProjectPopUp";
import "animate.css/animate.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from "../components/LoginForm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userlogin } from "../REDUX/UserAuth/action";
import { getProject, projectCreate } from "../REDUX/Project/action";
import Projects from "../components/Projects";
import Loader from "../components/Projects";
import ProjectUpload from "./ProjectUpload";
import { getuploadProject } from "../REDUX/ProjectUpload/action";
import { succesAlert } from "../components/Notification";
function HomePage() {
  const dispatch = useDispatch();
  const userdata = useSelector((store) => store.userreducer);
  const { projectdata,isloading } = useSelector((store) => store.projectreducer);
  const [showLogin, setShowLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [update, setupdate] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleCreateProject = (projectName) => {
    dispatch(projectCreate(projectName)).then((res)=>{
      setupdate(!update)
succesAlert("Project saved")
    });
  };

  useEffect(() => {
dispatch(getuploadProject)
if(localStorage.getItem("token")){
  setShowLogin(false);
}

    // if(userdata.isLogin){
    //   toast(userdata.message)
    //   localStorage.setItem("token",userdata.token)
    //   setShowLogin(false);
    // }
    
    dispatch(getProject)
  }, [update]);
 




  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="w-full flex justify-end absolute top-6">
        <div className="flex gap-x-6 mx-6">
          <div className="cursor-pointer">
            <CiSettings fontSize={"30px"} />
          </div>
          <div className="cursor-pointer">
            <IoMdNotificationsOutline fontSize={"30px"} />
          </div>
        </div>
      </div>

   <ToastContainer pauseOnFocusLoss
draggable
pauseOnHover/>
      <div className="w-full flex justify-center ">
    <div className="w-full max-w-5xl  mx-6">
          <div className="  mt-2 flex-col mx-auto h-fit">
            <div className=" w-fit gap-5  flex  items-center px-3 py-2 shadow-lg rounded-lg cursor-pointer">
              <LiaHomeSolid fontSize="20px" />
              <p>Back to Home</p>
            </div>
            <div className=" flex justify-end m-4">

            {projectdata?.length > 0 ? (
              <button
              disabled={isloading}
                onClick={openPopup}
                className="p-3 px-2 flex items-center text-lg font-medium text-white bg-[#211935] rounded-[12.89px] gap-2"
              >
                <FaCirclePlus
                  className="text-white"
                  fontVariant={"cover-fill"}
                />
                <span>Create New Project</span>
              </button>
            ) : (
              ""
            )}
            </div>
            {!projectdata?.length > 0&&!isloading? (
              <div className="flex flex-col items-center gap-3  mt-0">
                <h1 className="font-bold sm:text-3xl md:text-4xl lg:text-5xl text-logo-color">
                  Create a New Project
                </h1>

                <div className="w-full md:w-[500px] lg:h-[300px] flex justify-center">
                  <img
                    className="object-cover w-full h-full"
                    src={podcastimg}
                    alt="podcastImage"
                  />
                </div>
                <div className="px-5">
                  <h4 className="font-medium text-[#838383]  text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in
                  </h4>
                </div>

                <button
                 disabled={isloading}
                  onClick={openPopup}
                  className="p-3 px-2 flex items-center text-lg font-medium text-white bg-[#211935] rounded-[12.89px] gap-2"
                >
                  <FaCirclePlus
                    className="text-white"
                    fontVariant={"cover-fill"}
                  />
                  <span>Create New Project</span>
                </button>
                {
                  <CreateProjectPopUp
                    isOpen={showPopup}
                    onClose={closePopup}
                    onCreateProject={handleCreateProject}
                  />
                }

                {showLogin && (
                  <LoginForm
                    onClose={() => setShowLogin(false)}
                  
                  />
                )}
              </div>
            ) : (
              <>
           <Projects isloading={isloading}/>
                <CreateProjectPopUp
                  isOpen={showPopup}
                  onClose={closePopup}
                  onCreateProject={handleCreateProject}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-screen h-screen absolute opacity-20 bg-black z-30"><Loader/></div> */}
    </div>
  );
}

export default HomePage;
