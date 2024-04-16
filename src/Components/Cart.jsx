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
        <div className='container mx-auto px-6 mt-10 md:mt-24 mb-4'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-7'>

                    <h2 className='text-[22px] md:text-[28px] open-sans  lg:text-[38px] bold'>Basket</h2>

                    <div className='mt-10'>
                        <div className='flex flex-col md:flex-row items-center space-x-4'>
                            <img src="/c1.png" alt="" />
                            <div className=''>
                                <h2 className='text-[22px] font-bold open-sans mt-5 md:mt-0' >Lyrical, PR70-011</h2>
                                <p className='font-bold text-[#FE7721] mt-5'>$120.00</p>
                                <p className='text[#465062] mt-1 max-w-[480px]'>Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.</p>

                                <div className='flex items-center space-x-4 mt-5'>
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

                                <div className='flex items-center space-x-4 mt-5'>
                                    <img className='cursor-pointer' src="/heart.png" alt="" />
                                    <img className='cursor-pointer' src="/trash.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>



                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />


                    <div className='mt-10'>
                        <div className='flex flex-col md:flex-row items-center space-x-4'>
                            <img src="/c1.png" alt="" />
                            <div className=''>
                                <h2 className='text-[22px] font-bold open-sans mt-5 md:mt-0' >Lyrical, PR70-011</h2>
                                <p className='font-bold text-[#FE7721] mt-5'>$120.00</p>
                                <p className='text[#465062] mt-1 max-w-[480px]'>Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.</p>

                                <div className='flex items-center space-x-4 mt-5'>
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

                                <div className='flex items-center space-x-4 mt-5'>
                                    <img className='cursor-pointer' src="/heart.png" alt="" />
                                    <img className='cursor-pointer' src="/trash.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-12 md:col-span-5 mt-5 md:mt-0'>
                    <h2 className='text-[28px] md:text-[28px] open-sans  lg:text-[38px] bold'>Summary</h2>



                    <div className='mt-5 md:mt-10'>

                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[22px] font-bold open-sans'>
                                Product
                            </p>
                            <p className='text-[22px] font-bold open-sans'>
                                Subtotal
                            </p>
                        </div>
                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[16px] font-bold open-sans'>
                                Lyrical, PR70-011
                            </p>
                            <p className='text-[16px]  open-sans'>
                                $ 90.00
                            </p>
                        </div>
                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[16px] font-bold open-sans'>
                                Lyrical, PR70-011
                            </p>
                            <p className='text-[16px]  open-sans'>
                                $ 90.00
                            </p>
                        </div>
                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[18px]  open-sans'>
                                Subtotal
                            </p>
                            <p className='text-[18px]  open-sans'>
                                $ 145.00

                            </p>
                        </div>
                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[18px]  open-sans'>
                                Shipping
                            </p>
                            <p className='text-[18px]  open-sans'>
                                $ 00.00

                            </p>
                        </div>
                        <div className='border-b  flex justify-between py-4'>
                            <p className='text-[18px]  open-sans'>
                                Discount
                            </p>
                            <p className='text-[18px]  open-sans'>
                                $ 00.00

                            </p>
                        </div>
                        <div className=' flex justify-between py-4 text-[#FE7721] font-semibold'>
                            <p className='text-[18px]   open-sans'>
                                Total
                            </p>
                            <p className='text-[18px]  open-sans'>
                                $ 145.00

                            </p>
                        </div>




                    </div>


                    <div>
                        <h2 className='text-[22px] md:text-[28px] open-sans  lg:text-[38px] bold'>Choose Payment Method</h2>


                        <div className='bg-[#FFF3EC] px-4 py-4 rounded-xl'>
                            <div className="flex items-center mb-4">
                                <input type="radio" className="custom-radio accent-[#FE7721] border-none focus:ring-offset-transparent focus:ring-0" />
                                <label htmlFor="" className="ml-2 text-[18px] open-sans font-semibold text-black">Credit / Debit Card</label>
                            </div>

                            <div className='md:flex  md:space-x-4 items-center'>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#ffff] border-none   text-[#333] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="4242 4242 4242 4242"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        Expiration
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#ffff] border-none   text-[#333] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="MM / YY"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        cvc
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#ffff] border-none   text-[#333] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="cvc"
                                    />
                                </div>
                            </div>


                            <div className="flex items-center mb-4">
                                <input type="radio" className="custom-radio accent-[#FE7721] border-none focus:ring-offset-transparent focus:ring-0" />
                                <label htmlFor="" className="ml-2 text-[18px] open-sans font-semibold text-black">Paypal</label>
                            </div>




                            <div className="flex items-center mb-4">
                                <input type="radio" className="custom-radio accent-[#FE7721] border-none focus:ring-offset-transparent focus:ring-0" />
                                <label htmlFor="" className="ml-2 text-[18px] open-sans font-semibold text-black">Cash on delivery </label>
                            </div>

                        </div>

                        <div className="flex items-center justify-center mt-8 space-x-4">
                            <button className="block text-white text-[12px] md:text-[18px] px-2 w-[280px] md:w-[304px] font-bold open-sans bg-[#FE7721] rounded-full   py-4  mt-3 tracking-wide md:mt-0">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
