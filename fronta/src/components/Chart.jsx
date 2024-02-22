import React from 'react'

function Chart() {
  return (
    <div className='flex flex-row justify-center gap-4 mt-24'>
        <div className='border border-lime-500 rounded-lg w-[800px] h-[500px]'>
            <div className='flex justify-around text-white p-2'>
                <h1 className='font-bold text-lg'>Beat Name</h1>
                <h1 className='font-bold text-lg'>Price</h1>
            </div>
            <hr className='ml-[50px] mt-2 w-[700px] border-lime-500' />
            <div className='flex flex-row justify-around text-white mt-4'>
                <div className='flex flex-row p-2'>
                <img className='w-[80px] border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                <h1 className='flex items-center ml-4'>Beat Name</h1>
                </div>
                <span className='flex items-center'>50DT</span>
            </div>
            <div className='flex flex-row justify-around text-white mt-4'>
                <div className='flex flex-row p-2'>
                <img className='w-[80px] border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                <h1 className='flex items-center ml-4'>Beat Name</h1>
                </div>
                <span className='flex items-center'>50DT</span>
            </div>
        </div>
        <div className='border border-lime-500 rounded-lg w-[300px] p-4'>
            <h1 className='text-white font-bold text-lg'>Cart Total</h1>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Chart