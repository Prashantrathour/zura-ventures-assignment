import React, { useEffect, useState } from "react";
import Circle from "../components/Circle";
import { FaGear } from "react-icons/fa6";
import ProjectUpload from "./ProjectUpload";
import WidgetConf from "./WidgetConf";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink, useParams } from 'react-router-dom';
import { LiaBellSolid } from "react-icons/lia";
import {useDispatch, useSelector} from "react-redux"
import Setting from "../components/Setting";
import { getProject } from "../REDUX/Project/action";
import { getuploadProject } from "../REDUX/ProjectUpload/action";
const ContentArea = ({ activeSection,projectname }) => {

  const contentMap = {
    projects: <ProjectUpload projectname={projectname} />,
    widgetConfigurations: <WidgetConf />,
    deployment: "Deployment Content Goes Here",
    pricing: "Pricing Content Goes Here",
    setting:<Setting/>,
  };

  return (
    <div className="p-4 overflow-y-auto">
      {contentMap[activeSection]}
    </div>
  );
};
export function ProjectDashboard() {
  const dispatch =useDispatch()
  const {projectdata}=useSelector(store=>store.projectreducer)
  const { _id } = useParams();
  const project=projectdata?.find((item)=>item._id==_id)
  const [flage, setflage] = useState(
    "https://cdn-icons-png.flaticon.com/128/197/197374.png"
  );
  const [activeSection, setActiveSection] = useState("projects");
  const [show, setshow] = useState(false);
  function onclick() {
    setshow(!show);
  }
  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };
  const categories = [
    {
      id: "projects",
      text: "Projects",
    },
    {
      id: "widgetConfigurations",
      text: "Widget Configurations",
    },
    {
      id: "deployment",
      text: "Deployment",
    },
    {
      id: "pricing",
      text: "Pricing",
    },
    {
      id: "setting",
      text: "Setting",
    },
  ];
  const flag = [
    {
      country: "EN",
      logo: "https://cdn-icons-png.flaticon.com/128/197/197374.png",
    },
    {
      country: "IND",
      logo: "https://cdn-icons-png.flaticon.com/128/10597/10597864.png",
    },
  ];
  useEffect(()=>{
    dispatch(getProject)
    dispatch(getuploadProject)
  },[])


  return (
    <>
      <div className="border">
        <button
          onClick={onclick}
          data-drawer-target="sidebar-multi-level-sidebar"
          data-drawer-toggle="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <CiMenuBurger
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
          />
        </button>
      </div>

    <div className="flex">
        <aside
          id="sidebar-multi-level-sidebar"
          className="sticky hidden md:block top-0 left-0 z-4 w-64 h-[95vh] transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <NavLink to={"/"}>
              <li className="flex gap-2">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconsax/Bulk/directright">
                    <path
                      id="Vector"
                      d="M37.4727 46.8739L29.8109 43.043C27.6752 41.9862 25.1873 41.9862 23.0517 43.043L15.3678 46.8739C8.80679 50.1544 1.87148 43.087 5.3061 36.592L7.11149 33.2014C7.35367 32.7171 7.74998 32.3428 8.23435 32.1446L36.0857 19.617C37.2306 19.1106 38.5736 19.573 39.146 20.6738L47.5344 36.614C50.9691 43.087 44.0338 50.1544 37.4727 46.8739Z"
                      fill="#7E22CE"
                    />
                    <path
                      id="Vector_2"
                      opacity="0.4"
                      d="M34.3463 16.9308L16.1163 25.1431C14.0688 26.0678 11.9992 23.8661 13.056 21.8846L19.7491 9.18088C22.5893 3.78675 30.2952 3.78675 33.1354 9.18088L35.4912 13.6723C36.1076 14.8832 35.6013 16.3584 34.3463 16.9308Z"
                      fill="#7E22CE"
                    />
                  </g>
                </svg>
                <div className=" relative">
                  <p className="font-Plus Jakarta Sans font-extrabold text-logo-color text-[24px] p-0">
                    LAMA.
                  </p>
                </div>
              </li>

              </NavLink>
              {categories.map((category, i) => {
                return (
                  <li key={i}>
                    <div
                      key={category.id}
                      className={`space-y-3 ${
                        category.id === "setting"
                          ? "w-full absolute top-[90vh]"
                          : ""
                      }`}
                    >
                      <a
                        onClick={() => handleNavLinkClick(category.id)}
                        className={`flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-[#7E22CE] hover:text-white dark:hover:bg-gray-800 dark:hover:text-gray-200  ${
                          activeSection === category.id
                            ? "bg-[#7E22CE] text-white"
                            : ""
                        }`}
                        href="#"
                      >
                        {category.id != "setting" ? (
                          <Circle
                            number={i + 1}
                            bgColor={
                              activeSection === category.id
                                ? "#211935"
                                : "#1D1B201F"
                            }
                            color="text-white"
                          />
                        ) : (
                          <div
                            className={`flex items-center rounded-3xl justify-center w-fit p-2 ${
                              activeSection === category.id
                                ? "bg-[#211935]"
                                : "bg-#1D1B201F"
                            }`}
                          >
                            <span className="text-base font-bold ">
                              <FaGear />
                            </span>
                          </div>
                        )}
                        {
                          <span className="mx-2 text-sm font-medium  sm:w-40 md:w-56 lg:w-60">
                            {category.text}
                          </span>
                        }
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      

      <div className="p-3   w-full">
        <div className=" py-2 px-2 flex justify-between   ">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <NavLink to={"/"}>

              <li class="inline-flex items-center">
                <a
                 
                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              </NavLink>
              <li>
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    {project?.name}
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Upload
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className=" gap-2 justify-center hidden md:flex">
            <select
              className="border-none"
              onChange={(e) => setflage(e.target.value)}
            >
              {flag.map((item) => (
                <option value={item.logo}>{item.country} </option>
              ))}
            </select>
            <div className="w-[40px] flex justify-center items-center">
              <img className="w-full" src={flage} />
            </div>
            <div>
              <LiaBellSolid fontSize={"40px"} />
            </div>
          </div>
        </div>
        <ContentArea activeSection={activeSection} projectname={project?.name} />
      </div>
    </div>
    </>
  );
}

export default ProjectDashboard;
