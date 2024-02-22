import React from 'react'
import Footer from './Footer'
const Contact = () => {
  return (
    <div>
  
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md mt-[2cm]">
    <h2 className="mb-4 text-4xl  font-extrabold text-center text-white mb-[1.5cm] ">
      Contact Us
    </h2>
   
    <form className="space-y-8"   >
      <div>
        <div className=' mb-[10px]'>
        <label className="block mb-2 text-lg font-medium text-white">Your Full Name </label>
        <input
          type="text"
          className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
          placeholder="write your name here"
        />
          </div>
        <div>
        <label className="block mb-2 text-lg font-medium text-white ">Your email</label>
        <input
          type="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="xxx.xxx@mail.com"
        />
      </div>

      </div>
      <div className="sm:col-span-2">
        <label className="block mb-2 text-lg font-medium text-white ">
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave your message here..."
        ></textarea>
      </div>
      <button
  type="submit"
  className="bg-black text-[#84cc16] border border-solid border-[#84cc16] ml-[6.7cm] hover:bg-[#84cc16] hover:text-white text-2xl font-bold font-popin py-2 px-6 rounded-xl "
>
  Send message
</button>

    </form>
  </div>
  <Footer/>

  </div>
  )
}

export default Contact