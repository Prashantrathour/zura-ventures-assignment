import React, { useState } from "react";
import { CiEdit, CiSearch } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import {useDispatch, useSelector} from "react-redux"
import { getuploadProject, updateuploadProject } from "../REDUX/ProjectUpload/action";
function EditDescription({Edit}) {
  const {isLoading} =useSelector((store)=>store.projectuploadreducer)
  const dispatch =useDispatch()

  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(
   Edit.description
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDiscardClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    console.log(description)
    // Implement the logic to save the edited description, if needed
    dispatch(updateuploadProject(Edit._id,{description})).then((res)=>{
      dispatch(getuploadProject)
      setIsEditing(false);

    })

  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between mx-4">
        <h1 className="text-[30px] mb-4 text-[#7E22CE] font-bold">
          Edit Transcript
        </h1>
        {isEditing ? (
          <div>
            <button
              onClick={handleDiscardClick}
              className="text-red-500 font-medium rounded  mr-2 p-2 px-5 border border-red-600"
            >
              Discard
            </button>
            <button
            disabled={isLoading}
              onClick={handleSaveClick}
              className="text-white font-medium rounded p-2 px-5 bg-[#211935]"
            >
              {isLoading?"Loading..":"Save & Exit"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      {isEditing ? (
        <div>
          <div className="w-full h-[200px] min-w-[300px] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex flex-col justify-between h-full px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="w-full min-h-[400px] min-w-[300px] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="m-3 flex justify-between" >
            <button
              onClick={handleEditClick}
              className="flex justify-center items-center gap-1 text-sm p-2 px-3 rounded-2xl text-[#faf9fa] font-semibold hover:underline cursor-pointer bg-slate-700"
            >
              <FaPencil/><span>Edit mode</span>
            </button>
            <CiSearch/>
          </div>
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditDescription;
