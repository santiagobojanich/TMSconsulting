import React from 'react'
import logo from '../assets/DevForge.svg'
import { AiOutlineMail, AiFillFacebook, AiOutlineLinkedin } from 'react-icons/ai'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { SlScreenDesktop, SlScreenSmartphone } from 'react-icons/sl'


const Footer = () => {
  return (
    <footer className='bg-bgBlack flex flex-col items-center justify-center' id='footer'>
    <hr className='w-[90%] ' />
    <div className='sm:grid sm:grid-cols-3 sm:p-12 sm:gap-10'>
       <div className='w-full p-12 flex flex-col gap-10 font-Chakra items-center justify-start'>
         <img src={logo} alt="logo" className='w-80' />
         <p className='text-white text-xs max-w-[250px] '>Una agencia digital de servicio completo enfocada en la creatividad y soluciones impulsadas por resultados.</p>
         <div className='w-full flex flex-row items-center justify-center gap-5'>
            <a href="https://www.facebook.com/DevForgeTMS" target='blank' rel='Facebook'>
             <AiFillFacebook size={40} className='text-white hover:text-blue-400' />
            </a>
            <a href='https://www.linkedin.com/company/93261956' target='blank' rel='Linkedin'>
             <FaLinkedin size={40} className='text-white hover:text-blue-500' />
            </a>
           </div>
         </div>

       <div className='w-full p-12 flex flex-col items-center justify-start gap-8'>
        <div className='sm:w-60'>
         <h1  className='text-white font-bold font-Chakra'>Contacto</h1>
        </div>
         <div className='flex flex-row items-center justify-start gap-2 sm:w-60'>
           <AiOutlineMail size={30} className='text-white'/>
           <p className='text-white font-semibold font-Chakra'>devforge.tms@gmail.com</p>
         </div>
         <div className='flex flex-row items-center justify-start gap-2 sm:w-60'>
           <AiOutlineLinkedin size={30} className='text-white'/>
           <a href='https://www.linkedin.com/company/dev-forge-tms/' target='blank' className='text-white font-semibold font-Chakra'>DevForge</a>
         </div>
       </div>


       <div className='w-full p-12 flex flex-col items-center justify-start gap-8'>
        <div className='sm:w-full'>
         <h1  className='text-white font-bold font-Chakra '>Servicios</h1>
        </div>
         <div className='flex flex-row items-center justify-start gap-2 sm:w-full'>
           <SlScreenDesktop size={30} className='text-white'/>
           <p className='text-white font-semibold font-Chakra'>Desarrollo Web Responsive</p>
         </div>
         <div className='flex flex-row items-center justify-start gap-2 sm:w-full'>
           <SlScreenSmartphone size={30} className='text-white'/>
           <p className='text-white font-semibold font-Chakra'>Desarrollo Mobile Responsive</p>
         </div>
         <div className='flex flex-row items-center justify-start gap-2 sm:w-full'>
           <MdOutlineDesignServices size={30} className='text-white' />
           <p className='text-white font-semibold font-Chakra'>Diseño UX/UI</p>
         </div>
       </div>

    </div>
    <div className='p-4 w-full flex items-center justify-center'>
         <p className='text-white text-xs '>© 2023. Todos los derechos reservados por DevsForgeTMS</p>
    </div>

    </footer>
  )
}

export default Footer