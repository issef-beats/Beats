import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
function BeatDetails() {
  return (
    <div>
        <div className='flex flex-row items-center justify-center gap-8'>
            <img src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" className='w-[500px] h-[300px] border border-transparent rounded-lg' alt="" />
            <div>
                <div className='flex flex-row text-white items-center gap-4'>
                <FaRegPlayCircle className='text-white' size={30}/>
                <h1 className='text-2xl'>Beat title</h1>
                </div>
                <span className='text-white ml-12'>priceDT</span>
                <p className='text-white ml-12'>beat description for your beats beat description for your beats</p>
                <div>
                    <audio className='text-white' src=""></audio>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BeatDetails