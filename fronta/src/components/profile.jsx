import React, { useState } from 'react';
import Footer from './Footer'
import Whishlist from './wishlist'
import Updateprofile from './updateprofile' 
import Shop from './shop'

const Profile = () => {
  const [showWhishlist, setShowWhishlist] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  const [updateClicked, setUpdateClicked] = useState(false);
  const [whishlistClicked, setWhishlistClicked] = useState(false);
  const [shopClicked, setShopClicked] = useState(false);
  const [showShop, setShop] = useState(false);


  const toggleWhishlist = () => {
    setShowWhishlist(!showWhishlist);
    setShowUpdateProfile(false);
    setShop(false);
    setUpdateClicked(false); 
    setShopClicked(false);
    setWhishlistClicked(true); 
  };

  const toggleUpdateProfile = () => {
    setShowUpdateProfile(!showUpdateProfile);
    setShowWhishlist(false); 
    setShop(false);
    setWhishlistClicked(false); 
    setShopClicked(false);
    setUpdateClicked(true);
  };

  const toggleShop = () => {
    setShop(!showShop);
    setShowWhishlist(false); 
    setShowUpdateProfile(false);
    setWhishlistClicked(false);
    setUpdateClicked(false);
    setShopClicked(true);
  };

  return (
   <div>
 <div class="relative mt-[30px]">
    <img class="brightness-75 h-[13cm] w-screen cover blur-sm  " src="https://wallpaperaccess.com/full/6151247.jpg" alt="" />
    
    <img class="absolute top-0 left-0 border-solid border-8 border-black w-[400px] h-[400px] rounded-[200px] ml-[40%] mt-[280px] " src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain" alt="" />
    <div className='mt-[5.5cm]'>
    <p class=" text-white tect-bold text-4xl font-extrabold font-jakarta ml-[21cm] "> Salim ben slim</p>
    <div className="flex space-x-8 mt-[1cm] ml-[21cm] ">
    <svg width="40px" height="40px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5V1H7V5L4.5 7.5L8.5 11.5L11 9H15V15H11C5.47715 15 1 10.5228 1 5Z" fill="#64748b"/></svg>
    <p class=" text-[#64748b] text-4xl  font-jakarta ml-[17cm]"> 24 355 125</p>
    </div>
    <div className="flex space-x-8 mt-[1cm] ml-[20cm] ">
    <svg fill="#64748b" width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><title>mail</title><path d="M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z" /></svg>
    <p class=" text-[#64748b] text-4xl  font-jakarta ml-[17cm]">salim@gmail.com</p>
 </div>
 </div>
</div>
<div>
<button className={`bg-white py-8 px-16 rounded-xl mt-[3cm] ml-[11cm] ${updateClicked && 'border border-solid border-8 border-[#84cc16]'}`} onClick={toggleUpdateProfile}>  <svg 
  className=' '
  xmlns="http://www.w3.org/2000/svg"
  width="75"
  height="75"
  viewBox="0 0 24 24"
  fill="white"
  stroke="#000000"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
  <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
</svg>
<p className=' text-black font-popin text-4xl'>Edit</p>
  </button>
  <button className={`bg-white py-8 px-16 rounded-xl mt-[3cm] ml-[5cm] ${whishlistClicked && 'border border-solid border-8 border-[#84cc16]'}`} onClick={toggleWhishlist}>
  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-[75px] h-[75px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
<p className=' text-black font-popin text-4xl'>Fav</p>
  </button>

  <button
        className={`bg-white py-8 px-16 rounded-xl mt-[3cm] ml-[5cm] ${
          shopClicked && 'border border-solid border-8 border-[#84cc16]'
        }`}
        onClick={toggleShop}
      >

<svg width="75px" height="75px" viewBox="0 -2.72 54.624 54.624" xmlns="http://www.w3.org/2000/svg">
  <g id="Group_38" data-name="Group 38" transform="translate(-150.273 -1577.233)">
    <path id="Path_98" data-name="Path 98" d="M159.723,1596.869v13.651h32.746l6.107-13.651Z" fill="#d1d3d4"/>
    <path id="Path_99" data-name="Path 99" d="M152.273,1579.233h7.683v31.286h32.513l10.428-23.312h-39.26" fill="none" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <path id="Path_100" data-name="Path 100" d="M167.668,1620.451a3.972,3.972,0,1,1-3.973-3.973A3.972,3.972,0,0,1,167.668,1620.451Z" fill="#ffffff" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
    <path id="Path_101" data-name="Path 101" d="M187.532,1620.451a3.973,3.973,0,1,1-3.972-3.973A3.972,3.972,0,0,1,187.532,1620.451Z" fill="#ffffff" stroke="#231f20" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
  </g>
</svg>
<p className=' text-black font-popin text-4xl'>shop</p>
  </button>

</div>
<div className='border border-solid border-[#84cc16] rounded-xl  mt-[2cm] w-[90%]  ml-[5%]'>
{showUpdateProfile && <Updateprofile />}
        {showWhishlist && <Whishlist />}
        {showShop && <Shop/>}
</div>


<Footer/>
   </div>
  )
}

export default Profile