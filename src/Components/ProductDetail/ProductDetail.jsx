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
            <div className='grid grid-cols-12'>
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

                    <p className="text-center mt-5">Lyrical, PR70-011</p>

                    <div className=' flex justify-center items-center space-x-4 mt-5'>
                    {/* Content for the right side */}
                    <button className='px-2 py-2 border border-[#FE7721] rounded-full' onClick={handlePrev}><img src="/oarrowl.png" alt="" /></button>

                    <p>Fabric 1/11</p>

                    <button className='px-2 py-2 border bg-[#FE7721] rounded-full' onClick={handleNext}><img src="/oarrowr.png" alt="" /></button>
                </div>
                </div>

             
            </div>
        </div>
    );
}

export default ProductDetail;
