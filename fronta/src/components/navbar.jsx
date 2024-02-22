import React from 'react'
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  return (
<div className="flex justify-between items-center z-20 ">
   
   <img className='z-20' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417653800_771342754913756_515758657566049752_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=7p6OH5hM2iwAX-0O_kb&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTdDa4KmO8EAslGvXUaspUkqFuQLYWEam4vyNz-4brlZg&oe=65F6BFAE" alt="" />
   
   <div className="flex space-x-8 mt-[1cm] z-20 ">
     <h1 className="text-xl text-white font-jakarta">HOME</h1>
     <h1 className="text-xl text-white  font-jakarta">PROFILE</h1>
     <h1 className="text-xl text-white  font-jakarta">ABOUT US</h1>
     <button onClick={()=>handleContact()} className="text-xl text-white  font-jakarta">CONTACT </button>
   </div>
   
   <div className="flex space-x-4 mt-[1cm] mr-[1cm] z-20">
     <button className="bg-[#84cc16] text-white font-popin py-2 px-6 rounded-xl">login</button>
     <button className="border border-solid border-[#84cc16] text-[#84cc16] font-popin py-2 px-6 rounded-xl hover:bg-[#84cc16] hover:text-white font-popin py-2 px-6 rounded-xl">sign up</button>
   </div>
   </div>
  )
}

export default Navbar


