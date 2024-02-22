import React from 'react'

const Contact = () => {
  return (
    <div>
   <div className="grid max-w-2xl mx-auto mt-8 mb-8">
                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">

                        <div
                            className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label 
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                     name</label>
                                <input
                               
                                 type="text" id="first_name"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
                                    placeholder="Your name"  required/>
                            </div>


                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input

                             type="email" id="email"
                             className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
                                placeholder="your.email@mail.com" required/>
                        </div>

                      
                        <div className="font-bold text-[#84cc16]">Password Changes</div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Current Password</label>
                            <input
                         
                             type="password" id="CurrentPassword"
                             className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
                                placeholder="Current Password" required/>
                        </div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">New Password</label>
                            <input
                           
                             type="password" id="NewPassword"
            className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
                                placeholder="New Password" required/>
                        </div>
                        <div className="mb-6">
                            <label 
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Confirm Password</label>
                            <input
                          
                             type="password" id="ConfirmPassword"
            className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg  shadow-md shadow-[#84cc16] focus:ring-primary-500 focus:border"
                                placeholder="Confirm Password" required/>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit"
                                 className="bg-black text-[#84cc16] border border-solid border-[#84cc16]  hover:bg-[#84cc16] hover:text-white text-2xl font-bold font-popin py-2 px-6 rounded-xl "
                                >Save</button>
                        </div>

                    </div>
                </div>

  </div>
  )
}

export default Contact