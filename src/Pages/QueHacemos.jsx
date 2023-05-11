
import {SlScreenDesktop}  from "react-icons/sl";


   const QueHacemos = () => {
          
     return (
        <div className="h-screen bg-bgBlack font-Chakra" id="queHacemos">
            <h1 className="sm:text-[55px] text-[32px] text-white pt-24 sm:ml-12 ml-6 sm:mb-0 mb-8">QUE HACEMOS</h1>

        
           <div className="flex sm:flex-row flex-col h-2/3 items-center sm:px-24 px-4 sm:space-y-0 space-y-12  text-[32px] text-white">
               
               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full ">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-16 sm:w-16' style={{color:'white'}}/>
                     </div>

                     <p className="sm:px-20 sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>
               
               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-16 sm:w-16' style={{color:'white'}}/>
                     </div>
                     <p className="sm:px-20 sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>


               <div className="flex flex-col items-center justify-center sm:w-1/3 w-full">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='sm:h-16 sm:w-16' style={{color:'white'}}/>
                     </div>
                     <p className="sm:px-20 sm:text-[33px] text-[16px] ">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>

           </div>
        
        
        
        
        
        
        </div>
     )   

   }


   export default QueHacemos