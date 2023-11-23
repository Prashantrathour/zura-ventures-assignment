import React, { useState,useEffect } from "react";
import youtube from "../image/yt.jpg";
import spotify from "../image/spotify.png";
import feed from "../image/feed.png";
import {useDispatch, useSelector } from 'react-redux'
import { FaYoutube } from "react-icons/fa6";
import { LiaYoutubeSquare } from "react-icons/lia";
import {ToastContainer} from "react-toastify"
import Upload from "../components/Upload";
import { projectUPLOAD } from "../REDUX/ProjectUpload/action";
import { getuploadProject } from "../REDUX/ProjectUpload/action";
import ProjectTable from "../components/ProjectTable";
import EditDescription from "../components/EditDescription";
import { useParams } from 'react-router-dom';
import { getProject } from "../REDUX/Project/action";
import { succesAlert } from "../components/Notification";
function ProjectUpload({projectname}) {
  const project=useSelector(store=>store.projectreducer)
  const { _id } = useParams();
    const {projectdata,isLoading}=useSelector((store)=>store.projectuploadreducer)
    const pro=project?.projectdata?.find((item)=>item._id==_id)
    
    const dispatch=useDispatch()
  const [showPopup, setShowPopup] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [isupdate, setisupdate] = useState(false);
  const [Edit, setEdit] = useState({});
  const [showPopupname, setShowPopupname] = useState("");

  const openPopup = (e) => {
    const elementWithDataValue = e.target.closest('[data-value]');
    
    if (elementWithDataValue) {
        const value = elementWithDataValue.getAttribute('data-value');
        setShowPopupname(value);
        setShowPopup(true);
    } else {
        console.log('Element with data-value attribute not found.');
    }
};
 const onEdit=(data)=>{
 setEdit(data)
    setisEdit(!isEdit)
    setisupdate(!isupdate)
 
 }
  const closePopup = () => {
    setShowPopup(false);
    setisupdate(!isupdate)
  };

  const handleCreateProject = (project) => {
  
     dispatch(projectUPLOAD(project)).then((res)=>{
      succesAlert("Project uploded")
      dispatch(getuploadProject)
      setisupdate(!isupdate)
     })
  };

  const uploadcategory = [
    { platform: "Youtube", img: youtube },
    { platform: "Spotify", img: spotify },
    { platform: "Feed RSS", img: feed },
    { platform: "Youtube", img: youtube },
    { platform: "Spotify", img: spotify },
    { platform: "Feed RSS", img: feed },
  ];

  useEffect(()=>{
 dispatch(getuploadProject)
 dispatch(getProject)
  },[isupdate])

  return (
    <div className="w-full  flex flex-col justify-center">
      <ToastContainer/>
      {!isEdit?<div>
      <Upload
        isOpen={showPopup}
        onClose={closePopup}
        onCreateProject={handleCreateProject}
        showPopupname={showPopupname}
      />
      <div className="mx-6">
        <h1 className="text-[30px] mb-4 text-[#7E22CE] font-bold">
          {pro&&pro.name}
        </h1>
        <div className="flex flex-wrap gap-4 justify-evenly ">
          {uploadcategory.map((item) => {
            return (
              <div
              id="project-upload"
              data-value={item.platform}
                onClick={openPopup}
                className="border flex w-72 justify-center items-center text-center p-2 gap-5 rounded-[22px] cursor-pointer"
              >
                <div   data-value={item.platform}>
                  <img   data-value={item.platform} width={"100%"} src={item.img} />
                </div>
                <div   data-value={item.platform} className="font-semibold flex flex-col justify-start">
                  <p   data-value={item.platform}>Upload</p>
                  <p   data-value={item.platform}>{item.platform} Video</p>
                </div>
              </div>
            );
          })}
        </div>
        {!projectdata?.length>0?<>
        <div className="w-full  text-center font-semibold text-gray-400 py-5 ">
          or
        </div>
        <div className="flex items-center justify-center w-full bg-cover">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center  w-full  mx-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-[128px] h-[128px] mb-4 text-[#7E22CE] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">
                  Select a file or drag and drop here (Podcast Media or
                  Transcription Text)
                </span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
              </p>
              <button className="text-[#7E22CE] px-5 py-2 rounded-xl mt-3 border border-[#7E22CE]">
                Select file
              </button>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div></>:<ProjectTable projectdata={projectdata} onEdit={onEdit} isLoading={isLoading}/>}
      </div>
      </div>:<EditDescription Edit={Edit}/>}
    
    </div>
  );
}

export default ProjectUpload;
