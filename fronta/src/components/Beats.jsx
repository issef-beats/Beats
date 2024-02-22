import React from 'react'
import { CiSearch } from "react-icons/ci";
import BeatsProduts from './BeatsProduts';
import Footer from './Footer';
function Beats({player,setPlayer}) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex flex-row justify-between gap-4'>
          <div className='flex flex-row'>
            <input className='border border-black rounded-[5px] bg-slate-600 p-1 w-[350px] pr-[30px]' type="text" placeholder='Search Music' />
            <CiSearch className=' absolute right-56 mt-[8px] mr-[490px] text-slate-300 '/>
          </div>  
          <div className='flex flex-row gap-4'>
          <select class='border border-gray rounded-[5px] text-white bg-transparent p-1 w-[120px]'>
                    <option value='popular'>Popular</option>
                    <option value='popular'>Newest</option>
                    <option value='popular'>Relevant</option>
                    <option value='popular'>None</option>
                </select>
                <select class='border border-gray rounded-[5px] text-white bg-transparent p-1 w-[120px]'>
                    <option value='popular'>duration</option>
                </select>
        </div>
        </div>
        <div>
          <BeatsProduts player={player} setPlayer={setPlayer} />
        </div>
    </div> 
  )
}

export default Beats