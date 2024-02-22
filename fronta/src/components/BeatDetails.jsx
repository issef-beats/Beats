// 
import React from 'react';
import { FaRegPlayCircle } from "react-icons/fa";

function BeatDetails() {
  return (
    <div className='mt-12'>
      <div className='flex flex-row items-center justify-center gap-8'>
        <img src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" className='w-[400px] h-[400px] border border-transparent rounded-lg' alt="" />
        <div>
          <div className='flex flex-row text-white items-center gap-4'>
            <FaRegPlayCircle className='text-white' size={30}/>
            <h1 className='text-2xl'>Beat title</h1>
          </div>
          <span className='text-white ml-12'>priceDT</span>
          <p className='text-white ml-12'>beat description for your beats beat description for your beats</p>
          <div className='mt-6'>
            <div class="space-y-2">
              <div class="relative">
                <div class="bg-slate-100 transition-all duration-500 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div class="bg-lime-500 transition-all duration-500 dark:bg-lime-400 w-1/2 h-2" role="progressbar"
                    aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
                </div>
                <div
                  class="ring-lime-500 transition-all duration-500 dark:ring-lime-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
                  <div
                    class="w-1.5 h-1.5 bg-lime-500 transition-all duration-500 dark:bg-lime-400 rounded-full ring-1 ring-inset ring-slate-900/5">
                  </div>
                </div>
              </div>
              <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
                <div class="text-lime-500 transition-all duration-500 dark:text-slate-100">24:16</div>
                <div class="text-slate-300 transition-all duration-500 dark:text-slate-400">75:50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ml-[270px] w-[950px] '>
        <table className="min-w-full divide-y divide-lime-500 mt-8">
          <thead className="">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Time
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Views
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                Buy
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className='border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      Music Title
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">3:45</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">1000</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-lime-500 hover:text-indigo-900">Buy</button>
              </td>
            </tr>
            {/* More rows can be added here */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className='border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      Music Title
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">3:45</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">1000</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-lime-500 hover:text-indigo-900">Buy</button>
              </td>
            </tr>
            {}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className='border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      Music Title
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">3:45</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">1000</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-lime-500 hover:text-indigo-900">Buy</button>
              </td>
            </tr>
            {}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className='border border-transparent rounded-lg' src="https://i.pinimg.com/564x/48/2b/88/482b88c2e206052ec3090426e3b8f590.jpg" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      Music Title
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">3:45</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-white">1000</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-lime-500 hover:text-indigo-900">Buy</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BeatDetails;
