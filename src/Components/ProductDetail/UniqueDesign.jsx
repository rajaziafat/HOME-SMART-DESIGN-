import { useState } from 'react';

function UniqueDesign() {
  // State variable to manage the popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to handle opening and closing of the popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="mt-10 bg-[#FFF3EC]">
      <div className="mx-auto max-w-2xl px-4 mt-10 sm:px-6 lg:max-w-7xl py-8 lg:px-8 md:py-24 relative">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-center">
            <p className="text-[28px] md:text-[32px] max-w-[1080px] lg:text-[44px] urbanist">
              <span className="font-bold urbanist">A Unique Design</span> for the Perfect Light
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center justify-center gap-4 relative">
          <div className="col-span-12 lg:col-span-12 flex justify-end lg:justify-center text-center relative">
            <div className="mt-4 md:mt-16 relative">
              <div className="relative">
                <div className="flex justify-center">
                  <img src="/1160.png" alt="" />
                  {/* Button positioned absolute */}
                  <button onClick={togglePopup} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <img className=' w-12 md:w-24' src="/play.png" alt="" />
                  </button>
                </div>
                <p className="text-[12px] lg:text-[18px] open-sans mt-4">Pirouette Satin  Color: Coral</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube video popup */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className=" p-8 ">
              <button onClick={togglePopup} className="absolute top-0 right-0 p-4 text-xl">&times;</button>
              <iframe
             className='  w-[300px] h-full md:w-[800px] md:h-[400px]'
                src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default UniqueDesign;
