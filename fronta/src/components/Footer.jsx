import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-row justify-between mt-10 p-[50px]'>
        <div className='flex flex-col w-[400px]'>
            <img src="" alt="" />
            <p className='text-white'>description for footer description for footer description for footer description for footer description for footer description for footer</p>
        </div>
        <div className='flex flex-row justify-around gap-[30px]'>
            <div className='text-white'>
                <h1>Product</h1>
                <h2>Beats</h2>
                <h2>Licensing</h2>
            </div>
            <div className='text-white'>
                <h1>Support</h1>
                <h2>About us</h2>
                <h2>Contact us</h2>
            </div>
            <div className='text-white'>
                <h1>Social Media</h1>
                <p>For new updates and news follow <br /> our social media feeds</p>
                <div className='flex flex-row justify-between'>
                <FaFacebookSquare />
                <FaYoutube />
                <FaInstagramSquare />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer