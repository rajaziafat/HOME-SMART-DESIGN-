import Chapta from "../Chapta"

function ProductConsultation() {
    return (
        <div className="homeconsultation-bg py-16 px-4">
            <div className="'   mx-auto max-w-2xl px-4  sm:px-6 mt-24  xl:max-w-7xl xl:px-8  bg-white rounded-2xl py-12">
                <div className='flex justify-center '>
                    <div className='flex items-center space-x-2 text-center'>
                        <div>
                            <p className="text-[28px]  md:text-[32px] max-w-[1080px] xl:text-[44px] urbanist font-semibold  "> Request a Consultation</p>
                            <p> We re here to help and answer any questions you may have.</p>
                        </div>
                        <div />
                    </div>
                </div>


                <div className="grid grid-cols-12   gap-4 mt-10 max-w-[896px] mx-auto">
                    <div className=" col-span-12  xl:col-span-6 ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="first name"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className=" col-span-12  xl:col-span-6 ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        Last Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="last name"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className=" col-span-12  xl:col-span-6 ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        Phone no <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="+62"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className=" col-span-12  xl:col-span-6 ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        City <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="City"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>


                    <div className=" col-span-12   ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        Email <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="Email"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>



                    <div className=" col-span-12   ">
                        <div>
                            <div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="default-input"
                                        className="block mb-2 text-[14px] open-sans font-semibold text-black"
                                    >
                                        How can we help you?
                                    </label>
                                    <textarea
                                        rows={6}
                                        type="text"
                                        id="default-input"
                                        className="bg-[#EEEEEE] border-none   text-[#8A8A8A] text-sm rounded-xl focus:ring-none focus:border-none block w-full p-2.5"
                                        placeholder="Explain......"
                                    />
                                </div>

                            </div>


                        </div>
                    </div>

                </div>
                <div className="text-center">
                    <p className="text-[14px] text-[#465062]">All submitted information will only be shared with Home Smart Designs and Hunter Douglas. See our full Privacy Policy.</p>
                </div>
                <div className="flex items-center justify-center mt-8 space-x-4">
                    <Chapta />                </div>
              
            </div>


        </div>
    )
}

export default ProductConsultation
