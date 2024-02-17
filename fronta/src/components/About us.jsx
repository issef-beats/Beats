import React from 'react'
import IssefImg from '../images/image00132.jpeg'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function AboutUs() {
  return (
    <div className='flex flex-row'>
        <div className='ml-[150px]'>
        <img className='w-[450px]' src={IssefImg} alt="" />
        </div>
        <div className='flex flex-col mt-12'>
        <div className='ml-[200px] text-white w-[600px]'> 
        <h1 className='text-lime-500 font-bold text-4xl'>Issef Zarka</h1>
        <p className='mt-6'>Welcome to Issef Beats, where passion meets creativity in the world of music production.

At Issef Beats, we are dedicated to crafting high-quality beats that resonate with artists and creators worldwide. With a deep love for music and a keen understanding of the evolving music industry, we strive to provide artists with the perfect soundscapes to bring their vision to life.

Our journey began with a single beat, fueled by a desire to create music that inspires and moves people. Since then, we have honed our skills and expertise, continuously pushing boundaries to deliver beats that captivate listeners and elevate artists' work to new heights.

What sets us apart is our commitment to authenticity and innovation.

</p>
        </div>
        <div className='text-white'>
        <hr className='mt-8 ml-[240px] border-gray-400 w-[500px]' />
        <p className='ml-[200px] mt-8'>Have any question?</p>
        <p className='ml-[200px] '>Contact Us!</p>
        <h2 className='flex flex-row items-center gap-4 ml-[200px] mt-4'><FaPhone size={20}/> (+216) 58 413 695</h2>
        <h2 className='flex flex-row items-center gap-4 ml-[200px] mt-4'><IoMdMail size={20}/> issefzarka@yahoo.com</h2>
        </div>
        </div>
    </div>
  )
}

export default AboutUs