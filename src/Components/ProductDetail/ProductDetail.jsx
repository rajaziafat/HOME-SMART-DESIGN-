import React, { useState } from 'react';

function ProductDetail() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: 'p98.png', alt: 'Main Image' },
        { src: 'p98.png', alt: 'Image 1' },
        { src: 'p98.png', alt: 'Image 2' },
        { src: 'p98.png', alt: 'Image 3' },
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='container mx-auto px-6 mt-10 md:mt-24'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-7'>
                    <div className='relative'>
                        {/* Main image */}
                        <img className='w-full' src={images[currentSlide].src} alt={images[currentSlide].alt} />

                        {/* Bottom left images */}
                        <div className='lg:absolute bottom-0 flex left-0 space-x-2 lg:space-x-4 bg-white rounded-xl py-2 px-2'>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    className='w-14 lg:w-32 hidden md:block cursor-pointer'
                                    src={image.src}
                                    alt={image.alt}
                                    onClick={() => handleDotClick(index)}
                                />
                            ))}
                        </div>

                        {/* Custom dot indicators */}
                        <div className='absolute bottom-6 right-2 flex space-x-2'>
                            {images.map((_, index) => (
                                <img
                                    key={index}
                                    src={currentSlide === index ? 'dadot.png' : 'ddot.png'}
                                    alt={`Dot ${index}`}
                                    className={`h-4 w-4 ${currentSlide === index ? 'w-8 h-8' : 'w-8 h-8'}`}
                                    onClick={() => handleDotClick(index)}
                                    style={{ cursor: 'pointer' }}
                                />
                            ))}
                        </div>


                    </div>

                    <p className="text-center mt-4 font-semibold">Lyrical, PR70-011</p>

                    <div className=' flex justify-center items-center space-x-4 mt-3'>
                        {/* Content for the right side */}
                        <button className='px-2 py-2 border border-[#FE7721] rounded-full' onClick={handlePrev}><img src="/oarrowl.png" alt="" /></button>

                        <p>Fabric 1/11</p>

                        <button className='px-2 py-2 border bg-[#FE7721] rounded-full' onClick={handleNext}><img src="/oarrowr.png" alt="" /></button>
                    </div>
                </div>

                <div className='col-span-12 md:col-span-5'>
                    <div className='flex items-center space-x-2 text-center'>
                        <p className="text-[28px]  md:text-[32px] max-w-[1080px] lg:text-[44px] urbanist   "> Pirouette ® <span className='font-bold urbanist'>sheer shades </span> </p>
                        <div />
                    </div>
                    <p className='max-w-[550px]'>Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.</p>

                    <div className="flex items-center justify-start mt-8 space-x-4">
                            <button className="block text-white text-[12px] md:text-[18px] px-2 w-[280px] md:w-[304px] font-bold open-sans bg-[#FE7721] rounded-full   py-4  mt-3 tracking-wide md:mt-0">Add to basket</button>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
