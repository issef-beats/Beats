import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-row justify-between  p-[50px] w-full'>
        <div className='flex flex-col w-[400px]'>
            <img src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/417653800_771342754913756_515758657566049752_n.png?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=7p6OH5hM2iwAX-0O_kb&_nc_ht=scontent.ftun9-1.fna&oh=03_AdTdDa4KmO8EAslGvXUaspUkqFuQLYWEam4vyNz-4brlZg&oe=65F6BFAE" alt="" />
            <p className='text-white'>description for footer description for footer description for footer description for footer description for footer description for footer</p>
        </div>
        <div className='flex flex-row justify-around gap-[30px]'>
            <div className='text-white'>
                <h1 className='text-gray-500'>Product</h1>
                <h2 >Beats</h2>
                <h2>Licensing</h2>
            </div>
            <div className='text-white'>
                <h1  className='text-gray-500'>Support</h1>
                <h2>About us</h2>
                <h2>Contact us</h2>
            </div>
            <div className='text-white'>
                <h1  className='text-gray-500'>Social Media</h1>
                <p>For new updates and news follow <br /> our social media feeds</p>
                <div className='flex flex-row  gap-4 mt-5'>
                <FaFacebookSquare size={25}/>
                <FaYoutube size={25}/>
                <FaInstagramSquare size={25}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer