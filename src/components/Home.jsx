import {HiChevronDown}  from "react-icons/hi2";
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import devForge from '../assets/DevForge.svg'

  const Home = () => {
  

       return (
         <div className="font-Chakra text-white mt-24 flex flex-col justify-center">
             <TrackVisibility once>
             {({isVisible}) =>
             <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
            
            <div className="flex flex-col sm:ml-64 ml-6 sm:mb-40 mb-24">
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