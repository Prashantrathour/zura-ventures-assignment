import React from 'react'
import {useDispatch} from "react-redux"
import { deleteuploadProject, getuploadProject } from '../REDUX/ProjectUpload/action'
import Loader from './Loader'
function ProjectTable({projectdata,onEdit,isLoading}) {
const dispatch =useDispatch()
const ondelete=(id)=>{
  
 dispatch(deleteuploadProject(id)).then((result) => {
    dispatch(getuploadProject)
 }).catch((err) => {
    console.log(err)
 });
}
if(isLoading ||!projectdata){
    return <Loader/>
}

  return (
    <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg  mt-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                         name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Upload Date & Time
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {projectdata?.map((item,i)=>{
                    return (

                <tr key={item._id} class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.name}
                    </th>
                    <td class="px-6 py-4">
                        {item.time}
                    </td>
                    <td class="px-6 py-4">
                       DONE
                    </td>
                    <td class="px-6 py-4">
                        <div className='flex  w-full'>

                        <button onClick={()=>onEdit(item)} className='p-2 border'>Edit</button>
                        <button onClick={()=>ondelete(item._id)} className='text-red-600 p-2 border'>Delete</button>
                        </div>
                    </td>
                </tr>

                    )
                })}


              
            </tbody>
        </table>
    </div></div>
  )
}

export default ProjectTable

