import React from "react";
import image from "../image/Ellipse 21.jpg";
function Setting() {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="text-logo-color text-3xl font-bold w-full  ">Account Settings</h1>
      <div className="flex justify-evenly gap-8 items-center align-middle  w-full  mt-9">
        <div className="w-64">
          <img
            className="object-cover w-full"
            src={image}
            alt="account image"
          />
        </div>
     
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              User Name
            </label>

            <input className=" rounded  border-gray-400 w-full" type="text" placeholder="alphauser" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>

            <input className="w-full rounded border border-gray-400 " type="email" value="alphauser@gmail.com" />
      
        </div>
        <button className="text-white mt-2 bg-logo-color p-2 px-4 font-semibold text-lg rounded-lg">save</button>
      </div>
<h1 className="text-logo-color text-3xl font-bold w-full ">Subscription</h1>
<div className="bg-logo-color text-white font-semibold p-5 flex justify-between rounded-lg items-center align-middle">
    <h2 className="text-center">You are currently on the <span className="underline text-lg font-semibold cursor-pointer">Ques AI Basic Plan!</span> </h2>
    <button className="bg-white text-logo-color p-2 px-4 font-semibold text-lg rounded-lg">Upgrade</button>
</div>
<p className="text-base font-medium text-red-600 underline cursor-pointer">Cancle Subscription</p>
    </div>
  );
}

export default Setting;
