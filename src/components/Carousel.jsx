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
    <div className="w-full h-[50vh] justify-center items-center flex flex-col bg-bgBlack ">
    
         <h1 className="text-white text-[35px] mb-12 font-Chakra">NUESTROS CLIENTES</h1>
      

      <div className="flex flex-row space-x-24 items-center">
      
        <button
          onClick={handlePrev}
        >
            <BiChevronLeft className="w-16 h-16 text-white" />
        </button>
       
        <img
          src={images[currentImage === 0 ? images.length - 1 : currentImage - 1]}
          alt="Carousel image"
          className="w-36 h-36 max-w-xs"
        />

        <div className="">
          <img
            src={images[currentImage]}
            alt="Carousel image"
            className="w-40 h-40 max-w-xs transition-transform duration-500 transform hover:scale-150"
          />
        </div>

        <img
          src={images[currentImage === images.length - 1 ? 0 : currentImage + 1]}
          alt="Carousel image"
          className="w-36 h-36 max-w-xs"
        />

        <button onClick={handleNext}>
          <BiChevronRight className="w-16 h-16 text-white" />
        </button>
     
     
      </div>
    </div>
  );
};

export default Carousel;