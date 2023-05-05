import NavBar from "../components/NavBar"
import {SlScreenDesktop}  from "react-icons/sl";
   

   const QueHacemos = () => {
          
     return (
        <div className="h-screen bg-bgBlack font-Chakra">
            <NavBar/>
            <h1 className="text-[55px] text-white mt-12 ml-12">QUE HACEMOS</h1>
        
        
           <div className="flex flex-row h-2/3 items-center px-24 text-[32px] text-white">
               
               <div className="flex flex-col items-center justify-center w-1/3 ">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='h-16 w-16' style={{color:'white'}}/>
                     </div>

                     <p className="px-20">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>
               
               <div className="flex flex-col items-center justify-center w-1/3">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='h-16 w-16' style={{color:'white'}}/>
                     </div>
                     <p className="px-20">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>


               <div className="flex flex-col items-center justify-center w-1/3">   
                     <div className="mb-6">
                     <SlScreenDesktop  className='h-16 w-16' style={{color:'white'}}/>
                     </div>
                     <p className="px-20">Desarrolamos, diseñamos, planificamos sitios y plataformas online, Además utilizamos las últimas tecnologías y tendencias del mercado.</p>
               </div>

           </div>
        
        
        
        
        
        
        </div>
     )   

   }


   export default QueHacemos