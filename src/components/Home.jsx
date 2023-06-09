import {HiChevronDown}  from "react-icons/hi2";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import devForge from '../assets/DevForge.svg'

  const Home = () => {
  

       return (
         <div className="font-Chakra text-white pt-24 flex flex-col justify-center" id="logo">
             <TrackVisibility once>
             {({isVisible}) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
            
            <div className="flex flex-col ml-6 sm:ml-44 lg:ml-64 lg:mt-12  mb-24 sm:mb-12 lg:mb-10 xl:mb-24 ">
                <img src={devForge} alt='forge'/>
                 <p className="sm:mt-0 mt-10 sm:text-[40px] text-[32px]">Somos una consultora caracterizada por llevar </p>
                 <p className="sm:text-[40px] text-[32px]">ideas innovadoras a un mercado real</p>
            </div> 
           
            <div className="items-center flex justify-center float">
             <HiChevronDown className="h-32 w-32"/> 
            </div> 
          
            </div>  }
           </TrackVisibility>
             
          </div>
       )
  }


  export default Home 