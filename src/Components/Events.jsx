import React from 'react';
import Navbar from './Navbar'; 

const handleClick=()=>{
    console.log("buttonclicked")
}
function Events() {
  return (
    <>
    <div className="relative flex min-h-screen flex-col bg-slate-50 overflow-x-hidden font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]">
       
        <div className="px-10 flex flex-1 justify-center py-5">
          <div className="w-full max-w-3xl flex flex-col py-5">
            <h2 className="text-[28px] font-bold px-4 pb-3 pt-5">Create an event</h2>

           
            {/* <div className="border-b border-[#cedbe8] px-4 flex gap-8">
              {['Details', 'Tickets', 'Promote', 'Publish'].map((tab, i) => (
                <a
                  key={tab}
                  className={`flex flex-col items-center pb-3 pt-4 border-b-[3px] text-sm font-bold ${i === 0 ? 'border-[#3d98f4] text-[#0d141c]' : 'border-transparent text-[#49739c]'}`}
                  href="#"
                >
                  {tab}
                </a>
              ))}
            </div> */}

            {/* Event Name */}
            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-base font-medium pb-2">Event name</p>
                <input
                  placeholder="Name your event"
                  className="h-14 rounded-lg bg-[#e7edf4] p-4 text-base placeholder:text-[#49739c]"
                />
              </label>
            </div>

            {/* Description */}
            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <p className="text-base font-medium pb-2">Description</p>
                <textarea
                  placeholder="Tell people what your event is about"
                  className="min-h-36 rounded-lg bg-[#e7edf4] p-4 text-base placeholder:text-[#49739c]"
                ></textarea>
              </label>
            </div>

            {/* Image Upload */}
            <h2 className="text-[22px] font-bold px-4 pt-5">Images</h2>
            <div className="p-4">
              <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-[#cedbe8] px-6 py-14">
                <p className="text-lg font-bold text-center">Add an image</p>
                <p className="text-sm text-center">Recommended size: </p>
                <button className="h-10 px-4 bg-[#e7edf4] text-sm font-bold rounded-lg" onClick={handleClick}>Upload image</button>
              </div>
            </div>

            {/* Category */}
            <h2 className="text-[22px] font-bold px-4 pt-5">Category</h2>
            <div className="px-4 py-3">
              <label className="flex flex-col w-full">
                <select className="h-14 rounded-lg bg-[#e7edf4] p-4 text-base">
                  <option>Select a category</option>
                  <option>Free</option>
                  <option>Paid</option>
                </select>
              </label>
            </div>


            {/* submit button */}
            <div className="px-4 py-3 flex justify-end">
              <button className="h-10 px-4 bg-[#3d98f4] text-white text-sm font-bold rounded-lg" onClick={handleClick}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events;
