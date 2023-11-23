// Upload project popup
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LiaCrossSolid } from "react-icons/lia";
import youtube from "../image/yt.jpg";
import spotify from "../image/spotify.png";
import feed from "../image/feed.png";
import {useSelector} from "react-redux"
const Upload = ({ isOpen, onClose, onCreateProject,showPopupname }) => {
  const {isLoading}=useSelector((store)=>store.projectuploadreducer)
  console.log(isLoading)
    const uploadcategory = [
        { platform: "Youtube", img: youtube },
        { platform: "Spotify", img: spotify },
        { platform: "Feed RSS", img: feed },
        { platform: "Youtube", img: youtube },
        { platform: "Spotify", img: spotify },
        { platform: "Feed RSS", img: feed },
      ]
      const projectpic=uploadcategory.filter((category)=>category.platform==showPopupname)
  const [projectName, setProjectName] = useState("");
  const [projectdesc, setProjectdesc] = useState("");
  const [isname, setisname] = useState(false);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };
  const handleProjectdescChange = (e) => {
    setProjectdesc(e.target.value);
  };

  const handleCreateProject = () => {
    if(!projectName || !projectdesc){
        setisname(true)
    }else{
        onCreateProject({name:projectName,description:projectdesc});
      

          onClose();
       

    }
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-20">
        <div className="bg-white w-1/2 p-5 rounded-lg">
                <div className="flex justify-between mx-4">
                    <div className="flex gap-2 items-center justify-center ">
                <img   width={"45px"} src={projectpic[0].img} />
          <h2 className="text-2xl font-bold mb-4  mt-3">Upload From {showPopupname}</h2>

                    </div>

              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-black  rounded-md"
              >
                <IoMdClose/>
              </button>
                </div>
          <form>
            <div className="mb-4">

              <label htmlFor="projectName" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
              spellCheck ="true"
              lang="en"
                type="text"
                id="projectName"
                name="projectName"
                value={projectName}
                onChange={handleProjectNameChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-600">
                Description
              </label>
              <input
              spellCheck ="true"
              lang="en"
              type="text"
              id="projectdesc"
              name="projectdesc"
              value={projectdesc}
              onChange={handleProjectdescChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {isname?<p class="text-red-500 text-xs italic">Project Name or Description Can't be Empty</p>:""}
              
            </div>

            <div className="flex justify-end">
             
              <button
              disabled={isLoading}
                type="button"
                onClick={handleCreateProject}
                className="px-4 py-2 bg-logo-color text-white rounded-md text-base"
              >
                {isLoading?"Loading..":"Upload"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Upload;
