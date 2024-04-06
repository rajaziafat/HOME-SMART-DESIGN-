function HomeSmart() {
    return (
        <div className="container mx-auto px-6 mt-10 md:mt-24">
            <div className="smart-bg px-4 py-4">
                <div className="grid grid-cols-12 z-40 gap-4">
                    <div className="col-span-12 lg:col-span-8 flex items-center">
                        <div className="flex flex-col md:relative"> 
                            <div className="lg:ml-24 ">
                                <div className='flex items-center space-x-2 text-center '>
                                    <p className=" smart-h text-[24px] md:text-[32px] max-w-[1080px] lg:text-[44px] urbanist">About <span className='font-bold urbanist'>home smart Designs </span></p>
                                    <div />
                                </div>
                                <h3 className="text-[14px] lg:text-[20px] open-sans mt-2">LOCALLY OWNED AND OPERATED</h3>
                                <p className=" smart-p text-[12px] lg:text-[14px] max-w-[777px] mt-2 open-sans">We have a full staff of designers for both kitchen and bath design. Because we are locally owned and operated, we know the area and understand local preferences. All of our product and services are selected with the needs and tastes of the local community in mind. We are here to help you today, and we will be here in the future, when you may need us again.</p>
                            </div> 
                            <button className="md:absolute text-center  smart-button text-white text-[12px] md:text-[18px] px-2 font-bold open-sans bg-[#FE7721] rounded-full py-4 mt-3 tracking-wide md:mt-0"><p className="flex justify-center items-center space-x-2"><span>Explore product</span> <img src="/arrowr.svg" alt="" /></p></button>

                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-4 flex md:mt-10 order-first md:mb-10 lg:order-none">
                        <img className="w-full lg:w-[450px]" src="/143.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSmart
