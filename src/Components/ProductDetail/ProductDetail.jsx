import { useState } from 'react';

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


    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isContentVisible2, setIsContentVisible2] = useState(false);
    const [isContentVisible3, setIsContentVisible3] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    const toggleContent2 = () => {
        setIsContentVisible2(!isContentVisible2);
    };
    const toggleContent3 = () => {
        setIsContentVisible3(!isContentVisible3);
    };



    return (
        <div className='container mx-auto px-6 mt-10 md:mt-24'>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-12 lg:col-span-6'>
                    <div className='relative'>
                        {/* Main image */}
                        <img className='w-full' src={images[currentSlide].src} alt={images[currentSlide].alt} />

                        {/* Bottom left images */}
                        <div className='lg:absolute bottom-0 flex left-0 space-x-2 lg:space-x-4 bg-white rounded-xl py-2 px-2'>
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    className='w-32 hidden md:block cursor-pointer'
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
                                    className={`h-4 w-4 ${currentSlide === index ? 'w-6 h-6' : 'w-6 h-6'}`}
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

                <div className='col-span-12 md:col-span-6'>
                    <div className='flex items-center space-x-2 text-center'>
                        <p className="text-[28px]  md:text-[32px] max-w-[1080px] lg:text-[44px] urbanist   "> Pirouette ® <span className='font-bold urbanist'>sheer shades </span> </p>
                        <div />
                    </div>
                    <p className='max-w-[550px]'>Soft fabric vanes whose shape changes on demand. Controlling light in a magical new way.</p>

                    <div className="flex items-center justify-start mt-8 space-x-4">
                        <button className="block text-white text-[12px] md:text-[18px] px-2 w-[280px] md:w-[304px] font-bold open-sans bg-[#FE7721] rounded-full   py-4  mt-3 tracking-wide md:mt-0">Add to basket</button>
                    </div>

                    <div className='mt-10 flex justify-between items-center border-t py-4'>
                        <h3 className='open-sans font-semibold text-[18px]'>
                            Key Features & Enhancements
                        </h3>
                        <img
                            className='w-4 h-4 cursor-pointer'
                            src={isContentVisible ? "/arrowup.png" : "/arrowdown.png"}
                            alt=""
                            onClick={toggleContent}
                        />

                    </div>

                    {isContentVisible && (
                        <div>
                            <h4 className='text-[#465062] mt-5'>
                                Alter light in a space with the sculptural design of Pirouette ® Window Shadings.
                            </h4>

                            <ul className='mt-5 text-[#465062] '>
                                <li className='flex items-center '><img className='mr-2' src="/check.png" alt="" />Light Control and Privacy—with our unique fabric vanes and a single back sheer.</li>
                                <li className='flex items-center mt-4'><img className='mr-2' src="/check.png" alt="" />UV Protection—keeps furniture and flooring from fading.</li>
                                <li className='flex items-center mt-4'><img className='mr-2' src="/check.png" alt="" />Beautiful Fabrics—luxurious, high-quality selection.</li>

                                <li className='flex items-center mt-4'><img className='mr-2' src="/check.png" alt="" />Vane Sizes—4" or 5".</li>

                                <li className='flex items-center mt-4 '><img className='mr-2' src="/check.png" alt="" /><p>A Coordinated Look—with our <b > Whole House Solution</b> ™ for horizontal and vertical window treatments.</p></li>


                            </ul>


                            <h4 className=' mt-5 font-semibold'>
                                Optional Enhancements
                            </h4>

                            <p className='py-2'>Superior View-Through—with <b>ClearView®</b> sheers.</p>
                            <p className='py-2'>Exclusive Fabrics—from The  <b>Alustra®</b> Collection.</p>

                        </div>
                    )}


                    <div className='mt-4 flex justify-between items-center border-t py-4'>
                        <h3 className='open-sans font-semibold text-[18px]'>
                            Control Options                        </h3>
                        <img
                            className='w-4 h-4 cursor-pointer'
                            src={isContentVisible2 ? "/arrowup.png" : "/arrowdown.png"}
                            alt=""
                            onClick={toggleContent2}
                        />

                    </div>

                    {isContentVisible2 && (
                        <div>
                            <h4 className='text-[#465062]'>
                                Control Options
                            </h4>

                            <ul className='mt-4 text-[#465062] '>
                                <li className='flex items-center '><img className='mr-2' src="/check.png" alt="" />Light Control and Privacy—with our unique fabric vanes and a single back sheer.</li>
                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />UV Protection—keeps furniture and flooring from fading.</li>
                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />Beautiful Fabrics—luxurious, high-quality selection.</li>

                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />Vane Sizes—4" or 5".</li>

                                <li className='flex items-center mt-3 '><img className='mr-2' src="/check.png" alt="" /><p>A Coordinated Look—with our <b > Whole House Solution</b> ™ for horizontal and vertical window treatments.</p></li>


                            </ul>
                        </div>
                    )}


                    <div className='mt-4 flex justify-between items-center border-t py-4'>
                        <h3 className='open-sans font-semibold text-[18px]'>
                        Specialty Shapes                  </h3>
                        <img
                            className='w-4 h-4 cursor-pointer'
                            src={isContentVisible3 ? "/arrowup.png" : "/arrowdown.png"}
                            alt=""
                            onClick={toggleContent3}
                        />

                    </div>

                    {isContentVisible3 && (
                        <div>
                            <h4 className='text-[#465062]'>
                                Control Options
                            </h4>

                            <ul className='mt-4 text-[#465062] '>
                                <li className='flex items-center '><img className='mr-2' src="/check.png" alt="" />Light Control and Privacy—with our unique fabric vanes and a single back sheer.</li>
                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />UV Protection—keeps furniture and flooring from fading.</li>
                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />Beautiful Fabrics—luxurious, high-quality selection.</li>

                                <li className='flex items-center mt-3'><img className='mr-2' src="/check.png" alt="" />Vane Sizes—4" or 5".</li>

                                <li className='flex items-center mt-3 '><img className='mr-2' src="/check.png" alt="" /><p>A Coordinated Look—with our <b > Whole House Solution</b> ™ for horizontal and vertical window treatments.</p></li>


                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
