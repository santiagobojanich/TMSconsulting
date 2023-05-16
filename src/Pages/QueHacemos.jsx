
import {SlScreenDesktop}  from "react-icons/sl";


   const QueHacemos = () => {
          
     return (
        <div className="h-screen bg-bgBlack font-Chakra" id="queHacemos">
            <h1 className="sm:text-[55px] text-[32px] text-white pt-24 sm:ml-12 ml-6 sm:mb-0 mb-8">QUE HACEMOS</h1>

        
           <div className="flex sm:flex-row flex-col h-2/3 items-center sm:px-24 sm:mt-4 md:mt-0 px-4 sm:space-y-0 space-y-12  text-[32px] text-white">
               
               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full ">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     </div>

                     <p className="lg:px-16 sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>
               
               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     </div>
                     <p className="lg:px-16  sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>


               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-14 sm:w-14 lg:h-16 lg:w-16' style={{color:'white'}}/>
                     </div>
                     <p className="lg:px-16 sm:px-2 lg:text-[33px] sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>

           </div>
        
        
        
        
        
        
        </div>
     )   

   }


   export default QueHacemos