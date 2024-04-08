import { useState } from 'react';

function Cart() {

    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [selectedMoreOption, setSelectedMoreOption] = useState("size: 48cm");

    const toggleMoreDropdown = (option) => {
        setIsMoreOpen(!isMoreOpen);
        setSelectedMoreOption(option);
    }

    const [isQuantityOpen, setIsQuantityOpen] = useState(false);
    const [selectedQuantityOption, setSelectedQuantityOption] = useState("Quantity: 1");

    const toggleQuantityDropdown = (option) => {
        setIsQuantityOpen(!isQuantityOpen);
        setSelectedQuantityOption(option);
    }

    return (
        <div className='container mx-auto px-6 mt-10 md:mt-24'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-7'>

                    <h2 className='text-[22px] md:text-[28px] open-sans  lg:text-[38px] bold'>Basket</h2>

                    <div>
                        <div className='flex items-center space-x-4'>
                            <img src="/c1.png" alt="" />
                            <div>
                                <h2 className='text-[22px] font-bold open-sans' >Lyrical, PR70-011</h2>
                                <p className='font-bold text-[#FE7721] mt-2'>$120.00</p>
                                <p className='text[#465062] mt-2'>Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.</p>

                                <div className='flex items-center space-x-4 mt-2'>
                                    <div className='relative mt-2'>
                                        <button
                                            id="dropdownDefaultButton"
                                            onClick={() => toggleMoreDropdown(selectedMoreOption)}
                                            className="text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                                            type="button"
                                        >
                                            {selectedMoreOption}                                 
                                            <svg
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

                                        <div
                                            id="dropdown"
                                            className={`z-50 ${isMoreOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow absolute top-full`}
                                        >
                                            <ul
                                                className="py-2 text-sm text-[#4A4A4A] font-semibold"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 te"
                                                        onClick={() => toggleMoreDropdown("Option 1")}
                                                    >
                                                        Option 1                           
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 "
                                                        onClick={() => toggleMoreDropdown("Option 2")}
                                                    >
                                                        Option 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative mt-2'>
                                        <button
                                            id="dropdownDefaultButton"
                                            onClick={() => toggleQuantityDropdown(selectedQuantityOption)}
                                            className=" text-[#4A4A4A] open-sans bg-transparent hover:bg-transparent focus:ring-none focus:outline-none focus:ring-none  inline-flex items-center "
                                            type="button"
                                        >
                                            {selectedQuantityOption}                          
                                            <svg
                                                className={`w-2.5 h-2.5 mt-0.5 ms-3 ${isQuantityOpen ? 'transform rotate-180' : ''}`}
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

                                        <div
                                            id="dropdown"
                                            className={`z-50 ${isQuantityOpen ? 'block' : 'hidden'} bg-white divide-y mt-4 divide-gray-100 rounded-lg shadow absolute top-full`}
                                        >
                                            <ul
                                                className="py-2 text-sm text-[#4A4A4A] font-semibold"
                                                aria-labelledby="dropdownDefaultButton"
                                            >
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 te"
                                                        onClick={() => toggleQuantityDropdown("Option 1")}
                                                    >
                                                        Option 1                           
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="block px-4 py-2 hover:bg-gray-100 "
                                                        onClick={() => toggleQuantityDropdown("Option 2")}
                                                    >
                                                        Option 2
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-12 md:col-span-5'>

                </div>
            </div>
        </div>
    );
}

export default Cart;
