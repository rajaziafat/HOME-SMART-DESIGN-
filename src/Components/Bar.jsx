import { useState } from 'react';

function Bar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#F6EEE3] py-2 px-2 hidden lg:block">
            <div className="container mx-auto px-6  flex justify-between items-center ">
                <div className="flex space-x-4">
                    <button className="bg-[#FE7721] text-white px-2 py-0.5 font-semibold text-[14px] rounded-md">
                        REQUEST A CONSULTATION
                    </button>
                    <p className="text-[#B8B8B8]">|</p>
                    <span className="flex items-center space-x-2">
                        <img src="/phone.svg" alt="" />
                        <p className="font-bold text-[#4A4A4A] open-sans">(510) 770-0688</p>
                    </span>
                    <p className="text-[#B8B8B8]">|</p>
                    <span className="flex items-center space-x-2">
                        <img src="/phone.svg" alt="" />

                        {/* Dropdown menu */}   <div className="flex  ">
                            <>
                                <div className="relative">
                                    <button
                                        id="dropdownDefaultButton"
                                        onClick={toggleDropdown}
                                        className="font-bold text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                                        type="button"
                                    >
                                        Hours & Location
                                        <svg
                                            className={`w-2.5 h-2.5 mt-0.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
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
                                        className={` z-50 ${isOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow    absolute top-full`}
                                    >
                                        <ul
                                            className="py-2 text-sm text-[#4A4A4A] font-bold"
                                            aria-labelledby="dropdownDefaultButton"
                                        >
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 te"
                                                >
                                                    Loaction 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-gray-100 "
                                                >
                                                    Loaction 2
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </>

                        </div>

                    </span>

                </div>



                <div className='flex space-x-6 items-center'>
                    <img src="/11.png" alt="" />

                    <span>
                        <img src="/facebook.svg" alt="" />
                    </span>

                    <span>
                        <img src="/bari1.svg" alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Bar;
