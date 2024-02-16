import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";

function BeatsProduts() {
  return (
    <div className='mt-8 flex flex-wrap justify-center gap-12'>
      {[...Array(8)].map((_, index) => (
        <div key={index} className='relative'>
          <img className='w-[300px] h-[300px] border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
          <div className='w-[300px] absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-90 text-white p-4 border-transparent rounded-b-lg'>
            <div>
              <h1 className='text-white'>Title</h1>
              <h2 className='text-white'>Beat description</h2>
            </div>
            <hr className='mt-2 border-gray-500' />
            <div className='flex justify-between mt-2'>
              <CiHeart className='text-white' size={20}/>
              <FaRegPlayCircle className='text-lime-500' size={20}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BeatsProduts;
