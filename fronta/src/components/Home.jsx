import React, { useState } from 'react'
import DropNavbar from './dropNavbar'
import Beats from './Beats'
import Footer from './Footer';
import MusicPlayer from './PlayBar'
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const [musicPlayer,setPlayer]=useState(false)
  const navigate = useNavigate();
  const handleContact=()=>{
    navigate('/contact')
  }
  const handleHome=()=>{
    navigate('/')
  }
  return (
    <div className='bg-malek bg-no-repeat bg-cover bg-center h-[20cm] relative'>
    <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
   <div className="flex justify-between items-center z-20 ">
   
   <img className='z-20' src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417653800_771342754913756_515758657566049752_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=7p6OH5hM2iwAX-0O_kb&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTdDa4KmO8EAslGvXUaspUkqFuQLYWEam4vyNz-4brlZg&oe=65F6BFAE" alt="" />
 
 <div className="flex space-x-8 mt-[1cm] z-20 ">
     <h1 className="text-xl text-white font-jakarta hover:cursor-pointer" onClick={handleHome}>HOME</h1>
     <h1 className="text-xl text-white  font-jakarta">PROFILE</h1>
     <h1 className="text-xl text-white  font-jakarta">ABOUT US</h1>
     <h1 className="text-xl text-white  font-jakarta hover:cursor-pointer" onClick={handleContact}>CONTACT </h1>
 </div>

 <div className="flex space-x-4 mt-[1cm] mr-[4cm] z-20">
     {/* <button className="bg-[#84cc16] text-white font-popin py-2 px-6 rounded-xl ">login</button>
     <button className="border border-solid border-[#84cc16] text-[#84cc16] font-popin py-2 px-6 rounded-xl hover:bg-[#84cc16] hover:text-white font-popin py-2 px-6 rounded-xl">sign up</button> */}
     <DropNavbar/>
 </div>
</div>

 


<div className='flex justify-center '>
<div className='mb-[5cm] z-20'>
<div className='flex flex-row justify-between '>
<h1 className='text-8xl font-Anton font-black text-[132px] mt-[2cm] text-[#84cc16] z-20'>EPIC</h1>

 <h1 className='text-8xl font-Anton font-black text-[132px] mt-[2cm] text-[#84cc16] z-20'>MUSIC</h1>
 </div>
 
 <h1 className='text-8xl font-Anton font-black text-[132px] text-[#84cc16] '>EXPERIENCE</h1>
 <h1 className='text-[#d9f99d] text-2xl font-popin ml-[130px] '>We have the perfect music with free licensing for your </h1>
 <h1 className='text-[#d9f99d] text-2xl font-popin ml-[180px] '>creativity. Discover the possibilities now!</h1>
 
</div>

</div>



<div className='flex justify-center  rounded-[30px] mr-[13%] ml-[13%] mt-[2cm] mb-[1cm]  '>

 <div className="text-center w-full l-full mb-[2cm] mt-[2cm] ">
  <h1 className='text-white  text-4xl font-popin '>Music Downloads for All Your Creative Ventures</h1>
  <h1 className='text-white  text-xl font-popin mb-[1cm]'>Unleash your creativity with our versatile music downloads, perfect for any project you have in mind.</h1>
  <div className="flex justify-around">
 <div className="flex items-center ">
     <img className="w-8 h-8 mr-2" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417946128_883814393425649_5494375753517539791_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=n7OIp5q9MSMAX8WEV1Z&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTVbntOLujEvZmhDuUtWUJXEz_0llMwtQwxRmwFmACWyQ&oe=65F6C4FE" alt="" />
     <h1 className="text-lg text-white font-bold">Youtube</h1>
 </div>
 <div className="flex items-center ml-6">
     <img className="w-8 h-8 mr-2" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417946128_883814393425649_5494375753517539791_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=n7OIp5q9MSMAX8WEV1Z&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTVbntOLujEvZmhDuUtWUJXEz_0llMwtQwxRmwFmACWyQ&oe=65F6C4FE" alt="" />
     <h1 className="text-lg text-white font-bold">Instagram</h1>
 </div>
 <div className="flex items-center ml-6">
     <img className="w-8 h-8 mr-2" src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417946128_883814393425649_5494375753517539791_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=n7OIp5q9MSMAX8WEV1Z&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTVbntOLujEvZmhDuUtWUJXEz_0llMwtQwxRmwFmACWyQ&oe=65F6C4FE" alt="" />
     <h1 className="text-lg text-white font-bold">Tiktok</h1>
 </div>
</div>
 </div>
</div>
<div>
  <Beats player={musicPlayer} setPlayer={setPlayer} />
</div>
{musicPlayer?<div className="fixed bottom-0 right-0 left-0">
<MusicPlayer/>
</div>:<></>}
<Footer/>

</div>

  )
}

export default Home