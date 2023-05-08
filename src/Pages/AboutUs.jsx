import web from '../assets/webYmobile.jpg'
import {MdPhonelink} from 'react-icons/md'   

const AboutUs = () => {
  return (
     <div className="h-screen bg-bgBlack font-Chakra pt-6" id='sobrenosotros'>
             
             <h1 className="text-[50px] text-white flex justify-center mb-12">SOMOS UNA AGENCIA ESPECIALIZADA EN...</h1>

             
             <div className='flex flex-row items-center'>
             <img className='w-[800px] ml-12 h-[700px] rounded-xl' src={web} alt="web&mobile"/>
             
             <div className='flex flex-col ml-12 px-8'>
                
                  <div className='flex flex-row  mb-12 items-center'> 
                 
                  <h1 className='text-[35px] mr-6 text-white '>Desarrollo Web y Mobile</h1>
                   <MdPhonelink className='h-12 w-12' style={{color:'white'}}/>
                  </div>
                 
                 <p className='text-white text-[25px]'>
En nuestro equipo, trabajamos en el desarrollo, diseño y planificación de sitios web y plataformas online que sean altamente efectivas y atractivas para nuestros clientes y sus usuarios. Para lograrlo, utilizamos las últimas tecnologías y tendencias del mercado en el diseño y la programación web.
Nos aseguramos de que los sitios y plataformas que construimos sean totalmente funcionales, intuitivos y fáciles de usar para que los visitantes y usuarios puedan interactuar sin problemas. También nos enfocamos en la optimización de la velocidad y el rendimiento de los sitios web, para garantizar una excelente experiencia de usuario.</p>
             </div> 
                
             </div>
    
    
     </div>
  )
}


export default AboutUs