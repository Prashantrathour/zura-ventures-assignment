import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../REDUX/Project/action";
import Project from "./Project";
import Loader from "../components/Loader"
function Projects({isloading}) {
  const bgcolor = ["#6366F1", "#7E22CE", "#7E22CE", "#F8A01D"];
  function getRandomNumber(min, max) {
    const lowerBound = Math.min(min, max);
    const upperBound = Math.max(min, max);

    const range = upperBound - lowerBound;

    const randomNumber = Math.random() * range + lowerBound;

    return Math.round(randomNumber);
  }
  const dispatch = useDispatch();
  const { projectdata } = useSelector((store) => store.projectreducer);
  useEffect(() => {
    dispatch(getProject);
  }, []);

  if(isloading){
    return <Loader/>
  }
  return (
    <div className="flex w-full  gap-5 flex-wrap justify-center items-center m-auto flex-1">
      {projectdata&&projectdata.map((item) => (
        <Project
          key={item.name + Math.random()}
          {...item}
          bgcolor={bgcolor[getRandomNumber(0, bgcolor.length - 1)]}
        />
      ))}
    </div>
  );
}

export default Projects;
