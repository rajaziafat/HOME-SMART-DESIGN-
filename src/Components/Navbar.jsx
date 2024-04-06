import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [isHunterOpen, setIsHunterOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isInspirationOpen, setIsInspirationOpen] = useState(false);


  const toggleHunterDropdown = () => {
    setIsHunterOpen(!isHunterOpen);
  };
  const toggleMoreDropdown = () => {
    setIsMoreOpen(!isMoreOpen);

  }
  const toggleInspirationDropdown = () => {
    setIsInspirationOpen(!isInspirationOpen);

  }

  return (
    <>
      <nav className="bg-white border-gray-200 open-sans">
        <div className="container px-6  flex flex-wrap items-center justify-between mx-auto ">
          <Link
            to='/'
            className="flex items-center space-x-3"
          >
            <img
              src="/logo.svg"
              className="w-48 md:w-52 xl:w-full"
              alt=""
            />

          </Link>
          <button
            data-collapse-toggle="navbar-default"
            onClick={toggleMobileMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={mobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${mobileMenuOpen ? "block" : "hidden"
              } w-full lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white">
              <li className="relative">
                <a
                  href="#"
                  className="block py-2 px-3 text-[#4A4A4A] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  <>
                    <div className="relative">
                      <button
                        id="dropdownDefaultButton"
                        onClick={toggleHunterDropdown}
                        className="font-semibold text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                        type="button"
                      >
                        Hunter Douglas Products                                        <svg
                          className={`w-2.5 h-2.5 mt-0.5 ms-3 ${isHunterOpen ? 'transform rotate-180' : ''}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Dropdown menu */}
                      <div
                        id="dropdown"
                        className={` z-50 ${isHunterOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow    absolute top-full`}
                      >
                        <ul
                          className="py-2 text-sm text-[#4A4A4A] font-semibold"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 te"
                            >
                              Option 1                           </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Option 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>



                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="block py-2 px-3 text-[#4A4A4A] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  <>
                    <div className="relative">
                      <button
                        id="dropdownDefaultButton"
                        onClick={toggleMoreDropdown}
                        className="font-semibold text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                        type="button"
                      >
                        More Products & Services                                     <svg
                          className={`w-2.5 h-2.5 mt-0.5 ms-3 ${isMoreOpen ? 'transform rotate-180' : ''}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Dropdown menu */}
                      <div
                        id="dropdown"
                        className={` z-50 ${isMoreOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow    absolute top-full`}
                      >
                        <ul
                          className="py-2 text-sm text-[#4A4A4A] font-semibold"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 te"
                            >
                              Option 1                           </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Option 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                </a>
              </li>

              <li className="relative">
                <a
                  href="#"
                  className="block py-2 px-3 text-[#4A4A4A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  About us
                </a>
              </li>
              <li className="relative">
                <a
                  href="#"
                  className="block py-2 px-3 text-[#4A4A4A] font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                                  <>
                    <div className="relative">
                      <button
                        id="dropdownDefaultButton"
                        onClick={toggleInspirationDropdown}
                        className="font-semibold text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                        type="button"
                      >
                       Inspiration & Solutions
                       
                                                         <svg
                          className={`w-2.5 h-2.5 mt-0.5 ms-3 ${isInspirationOpen ? 'transform rotate-180' : ''}`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      {/* Dropdown menu */}
                      <div
                        id="dropdown"
                        className={` z-50 ${isInspirationOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow    absolute top-full`}
                      >
                        <ul
                          className="py-2 text-sm text-[#4A4A4A] font-semibold"
                          aria-labelledby="dropdownDefaultButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 te"
                            >
                              Option 1                           </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Option 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
