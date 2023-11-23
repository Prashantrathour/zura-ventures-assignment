// Project.js

import React from 'react';
import {useNavigate} from "react-router-dom"
function Project({ name, time, episode,bgcolor,_id,isloading}) {
  const navigate = useNavigate();
 
  let initials = "";
  let firstLetters = name.split(" ");
  firstLetters.forEach((element, i) => {
    if (i <= 1) {
      initials += element[0].toUpperCase();
    }
  });
  const handleClick = () => {
    // Navigate to the projectDashboard route with the project's _id
    navigate(`/projectDashboard/${_id}`);
  };
  if(isloading){
    return <p>isLoading...</p>
  }
  return (
    
    <div onClick={handleClick} className=" border border-solid border-[#999999] rounded-lg shadow-lg flex md:w-72 lg:w-80 cursor-pointer overflow-hidden">
      <div className="flex items-center">
        <div style={{background:bgcolor}} className={`text-white text-4xl flex w-24 justify-center p-5 m-3 rounded-lg text-center items-center`}>
          <div className='text-center'>
            <h1 className='text-5xl font-bold'>{initials}</h1>
          </div>
        </div>
        <div className="text-black px-5 flex flex-col gap-5">
          <div className="items-center">
            <h4 className="text-xl w-40   text-violet-500 overflow-ellipsis overflow-hidden whitespace-nowrap">{name}</h4>
            <h5 className="mr-2 text-xs">{episode}<span className='ml-2'>episode</span></h5>
          </div>
          <div className='text-slate-600 text-sm'>
            <h4 className="mt-2">last edit a week ago</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
