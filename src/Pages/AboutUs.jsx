import web from '../assets/webYmobile.jpg'
import {MdPhonelink} from 'react-icons/md'   

const AboutUs = () => {
  return (
     <div className="h-screen bg-bgBlack font-Chakra pt-24" id='sobrenosotros'>
             
             <h1 className="sm:text-[50px] text-[35px] sm:ml-0 ml-4 text-white flex justify-center mb-12">SOMOS UNA AGENCIA ESPECIALIZADA EN...</h1>

             
             <div className='flex flex-row p-4 items-center'>
             <img className='sm:w-[40%] h-[40%] hidden sm:flex ml-12 rounded-xl' src={web} alt="web&mobile"/>
             
             <div className='flex flex-col sm:ml-12 sm:px-8'>
                
                  <div className='flex flex-row  mb-12 items-center'> 
                 
                  <h1 className='sm:text-[35px] text-[25px] mr-6 text-white '>Desarrollo Web y Mobile</h1>
                   <MdPhonelink className='sm:h-12 h-6 sm:w-12 w-6' style={{color:'white'}}/>
                  </div>
                 
                 <p className='text-white sm:text-[22px] text-[19px]'>
En nuestro equipo, trabajamos en el desarrollo, diseño y planificación de sitios web y plataformas online que sean altamente efectivas y atractivas para nuestros clientes y sus usuarios. Para lograrlo, utilizamos las últimas tecnologías y tendencias del mercado en el diseño y la programación web.
Nos aseguramos de que los sitios y plataformas que construimos sean totalmente funcionales, intuitivos y fáciles de usar para que los visitantes y usuarios puedan interactuar sin problemas. También nos enfocamos en la optimización de la velocidad y el rendimiento de los sitios web, para garantizar una excelente experiencia de usuario.</p>
             </div> 
                
             </div>
    
    
     </div>
  )
}


export default AboutUs