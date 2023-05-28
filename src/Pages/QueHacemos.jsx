
import {SlScreenDesktop}  from "react-icons/sl";
import {SlScreenSmartphone} from "react-icons/sl"
import {AiOutlineTablet} from "react-icons/ai"
import {GiChart} from 'react-icons/gi'
import {MdOutlineDesignServices} from 'react-icons/md'

const QueHacemos = () => {
          
     return (
        <div className="h-screen bg-bgBlack font-Chakra" id="queHacemos">
            <h1 className="sm:text-[55px] text-[32px] text-white pt-24 sm:ml-12 ml-6 sm:mb-24 mb-8">QUE HACEMOS</h1>

        
          


           <div className="flex sm:flex-row flex-col h-2/3 items-center justify-center sm:px-24 sm:mt-4 md:mt-0 px-12 sm:space-y-0 space-y-12  text-[32px] text-white">
               
               <div className="flex flex-col items-center justify-start h-full sm:w-1/3 w-full ">   
                     <div className="mb-6">
                     <MdOutlineDesignServices  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     </div>

                     <p className="lg:px-16 sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>
               
               <div className="flex flex-col items-center justify-start h-full sm:w-1/3 w-full">   
                     <div className="mb-6 flex flex-row">
                     <SlScreenDesktop  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     <AiOutlineTablet className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' />
                     <SlScreenSmartphone  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16'/>
                     </div>
                     <p className="lg:px-16  sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Nos especializamos en crear sitios web y aplicaciones adaptables a diferentes dispositivos y tamaños de pantalla tanto en ordenadores de escritorio como en tablets y smartphones.</p>
               </div>
       

               <div className="flex flex-col items-center justify-start h-full sm:w-1/3 w-full">   
                     <div className="mb-6">
                     <GiChart  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     </div>
                     <p className="lg:px-16 sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Contamos con un especialista en marketing que brinda servicios de consultoría y estrategias de marketing que impulsen el crecimiento y la visibilidad de su marca.</p>
               </div>

           </div>
        
        
        
        
        
        
        </div>
     )   

   }


   export default QueHacemos