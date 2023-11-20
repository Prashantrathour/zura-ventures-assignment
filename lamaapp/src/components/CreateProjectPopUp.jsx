// CreateProjectPopup.js
import React, { useState } from "react";

const CreateProjectPopUp = ({ isOpen, onClose, onCreateProject }) => {
  const [projectName, setProjectName] = useState("");
  const [isname, setisname] = useState(false);

  const handleProjectNameChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCreateProject = () => {
    if(!projectName){
        setisname(true)
    }else{
        onCreateProject(projectName);
        onClose();

    }
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-1/2 p-5 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Create Project</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-600">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={projectName}
                onChange={handleProjectNameChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              {isname?<p class="text-red-500 text-xs italic">Project Name Can't be Empty</p>:""}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-red-600  rounded-md"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleCreateProject}
                className="px-4 py-2 bg-logo-color text-white rounded-md text-base"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CreateProjectPopUp;
