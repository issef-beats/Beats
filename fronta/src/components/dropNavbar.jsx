import React, { useState } from 'react';


function DropNavbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <div className="container mx-auto pt-8 text-center ">
      <img
        src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain"
        alt=""
        onClick={toggleNavbar}
        className="w-16 h-16 mr-4 cursor-pointer rounded-[100px] hover:border-solid hover:border-2 border-black"
      />
     <div className={`navbar ${navbarVisible ? '' : 'hidden'} absolute mt-4 bg-transparent text-white rounded-md backdrop-blur-3xl right-[7%]`}>

        <ul className="p-2">
            <div className="flex items-center hover:bg-gray-200 hover:text-black">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200 hover:text-black">
             profile
            </a>
          </li>
          </div>
          <div className="flex items-center hover:bg-gray-200 hover:text-black">
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              card
            </a>
          </li>
          </div>
          <div className="flex items-center hover:bg-gray-200 hover:text-black">
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                  />
                </svg>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
             Log out
            </a>
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DropNavbar;
