import {TiLightbulb} from 'react-icons/ti'
import {HiOutlinePaintBrush} from 'react-icons/hi2'

 const About2 = ( ) => {
     return (

        <div className="h-screen bg-bgBlack font-Chakra text-white">

         <div className='bg-coverr w-full h-1/2'>
              
              <div className='h-full flex items-center justify-center sm:px-48 px-6 flex-col ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              
              
                <div className='w-full flex pb-4 justify-center'>
                <TiLightbulb  className='lg:w-24 sm:w-16 w-12 lg:h-24 sm:h-16 h-12'/>
                </div>
             
              <h1 className='text-[25px] sm:text-[30px] lg:text-[35px]  sm:w-2/3'>Nos especializamos en llevar a cabo tus ideas de manera personalizada, 
                prestando especial atención a tus solicitudes. Convertir tus conceptos en una realidad es la prioridad.</h1>
             
               </div>
        
         </div>

        
        <div className='h-1/2'>
          
        <div className='h-full flex pt-12 items-center flex-col sm:px-12 px-4'>
              
              
              <div className='w-full flex pb-12 justify-center'>
              <HiOutlinePaintBrush  className='lg:w-24 sm:w-16 w-12 lg:h-24 sm:h-16 h-12'/>
              </div>

          <h1 className='text-[25px] sm:text-[30px] lg:text-[35px]  sm:w-2/3'>Nos enfocamos en llevar a cabo un diseño de sitio web que cumpla 
            con todos los requerimientos que tu empresa necesita, de ésta manera otorgarle mayor reconocimiento y por consiguiente maximizar su imagen y ventas.</h1>
        
        </div>
       
       </div>
       
       
       
        </div>   
     )
 }


 export default About2