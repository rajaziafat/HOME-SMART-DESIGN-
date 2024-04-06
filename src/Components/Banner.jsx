import React, { useState, useEffect } from 'react';

function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const numSlides = 4; // Number of slides in the carousel
    const slideDuration = 4000; // Duration for each slide in milliseconds

    // Array of image URLs for each slide
    const slideImages = [
        '/banner.png', // URL for slide 1 image
        'https://source.unsplash.com/featured/?running,home,black', // URL for slide 2 image

        'https://source.unsplash.com/featured/?running,shoes,red', // URL for slide 2 image

        'https://source.unsplash.com/featured/?running,shoes,blue', // URL for slide 2 image

        // Add more URLs for additional slides if needed
    ];

    // Function to change the slide
    const changeSlide = (index) => {
        setCurrentSlide(index);
    };

    // Function to auto slide after a specified duration
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % numSlides); // Move to the next slide
        }, slideDuration);

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [numSlides, slideDuration]);

    return (
        <>
            <div className="relative w-full">
                <div className="relative h-[761px]">
                    {/* Slides */}
                    {[...Array(numSlides)].map((_, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                transitionDelay: currentSlide === index ? '0ms' : '250ms', // Delay for the transition
                                transitionTimingFunction: currentSlide === index ? 'ease-in-out' : 'ease-out', // Different timing function for first slide
                            }}
                        >
                            <img
                                src={slideImages[index]} // Use the image URL from the array
                                className="absolute object-cover lg:object-fill  h-[761px]  w-full top-0 left-0"
                                alt={`Slide ${index + 1}`}
                            />
                            <div className='container mx-auto px-6 md:px-0'>
                                <div className="absolute bottom-24 lg:-bottom-24  z-50  transform  -translate-y-1/2  text-white">
                                    <h1 className="text-[40px] md:text-[64px] max-w-[800px] lg:text-[85px] font-semibold open-sans leading-[82px]  md:leading-[144px]  tracking-wide">Get Help Finding <br />
                                        Your Perfect Shade</h1>

                                    <div className="flex items-center  mt-8 space-x-4">
                                        <button className="block text-white text-[14px] md:text-[18px] md:w-[394px] font-bold open-sans bg-[#FE7721] rounded-full   py-4  mt-3 tracking-wide md:mt-0">Request A Consultation</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Custom Image Dots */}
                    <div className="absolute bottom-8 items-center right-8 z-50 flex space-x-4">
                        {[...Array(numSlides)].map((_, index) => (
                            <div key={index} className="relative">
                                <img
                                    src={currentSlide === index ? '/activedot.png' : '/dot.png'}
                                    className={`cursor-pointer flex ${currentSlide === index ? 'w-6 h-6 rotate-animation' : 'w-3 h-3'}`} // Apply rotate-animation class to active dot image
                                    alt={`Slide ${index + 1}`}
                                    onClick={() => changeSlide(index)}
                                />
                                {currentSlide === index && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-6 h-6 relative">
                                            <svg className="w-full h-full" viewBox="0 0 32 32">
                                                <circle className="circle-bg" cx="16" cy="16" r="14" fill="transparent" strokeWidth="2" />
                                                <circle className="circle-fill" cx="16" cy="16" r="14" fill="transparent" strokeWidth="2" strokeDasharray="88" strokeDashoffset="0" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>

                        ))}
                    </div>


                </div>
            </div>
        </>
    );
}

export default Banner;
