import React, { useState } from "react";
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import cuidefy from '../assets/cuidefy.svg'
import tLogo from '../assets/Treep.svg'
import mweed from '../assets/mweed.svg'

const images = [
  cuidefy,
  tLogo,
  mweed,
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) => prev === 0 ? images.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentImage((prev) => prev === images.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className="w-full pb-24 justify-center items-center flex flex-col bg-bgBlack ">
    
         <h1 className="text-white text-[35px] mb-12 font-Chakra">NUESTROS CLIENTES</h1>
      

      <div className="flex flex-row sm:space-x-24 space-x-4 items-center">
      
        <button
          onClick={handlePrev}
        >
            <BiChevronLeft className="sm:w-16 w-12 sm:h-16 h-12 text-white" />
        </button>
       
        <img
          src={images[currentImage === 0 ? images.length - 1 : currentImage - 1]}
          alt="Carousel image"
          className="sm:w-36 w-12 sm:h-36 h-12 max-w-xs"
        />

        <div className="">
          <img
            src={images[currentImage]}
            alt="Carousel image"
            className="sm:w-40 w-28 sm:h-40 h-28 max-w-xs transition-transform duration-500 transform sm:hover:scale-150"
          />
        </div>

        <img
          src={images[currentImage === images.length - 1 ? 0 : currentImage + 1]}
          alt="Carousel image"
          className="sm:w-36 w-12 sm:h-36 h-12 max-w-xs"
        />

        <button onClick={handleNext}>
          <BiChevronRight className="sm:w-16 w-12 sm:h-16 h-12 text-white" />
        </button>
     
     
      </div>
    </div>
  );
};

export default Carousel;