
function MapSection() {
    return (
        <div className="mt-10  bg-[#FFF3EC]">
            <div className="'   mx-auto max-w-2xl px-4 mt-10 sm:px-6  lg:max-w-7xl lg:px-8 py-16">
                <div className='flex justify-center '>
                    <div className='max-w-[950px]'>
                        <p className="text-[28px] text-center  md:text-[32px] max-w-[1080px] lg:text-[40px] urbanist   "> WE ARE YOUR LOCAL <span className='font-bold urbanist'> HUNTER DOUGLAS </span> per DEALER</p>

                        <p className="text-[14px] max-w-[950px] open-sans text-center mt-4">
                            Home Smart Designs offers a large selection of custom Hunter Douglas window treatments, including
                            sheers and shadings, honeycomb shades, shutters, horizontal blinds, vertical blinds, Roman shades, roller
                            shades, and woven wood shades.
                        </p>

                        <p className="text-[14px] max-w-[950px] open-sans text-center mt-4">
                            We serve the Bay Area, from Fremont to San Francisco. Please contact us, and let us know how we can help
                            you.
                        </p>
                        <div />
                    </div>

                </div>

                <div className="flex items-center justify-center mt-8 space-x-4">
                    <button className=" text-center font-bold  w-[280px] md:w-[304px] text-white text-[12px] md:text-[18px] px-2 open-sans bg-[#FE7721] rounded-full py-4  tracking-wide "><p className="flex justify-center items-center space-x-2"><span>Open Google Map</span> <img className="w-4" src="/arrowr.svg" alt="" /></p></button>
                </div>

                <div className="flex mt-8 md:-mt-8 items-center justify-center space-x-4">
                  <img src="/map.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default MapSection
