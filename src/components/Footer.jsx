import React from 'react'
import logo from '../assets/DevForge.svg'
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='bg-bgBlack flex flex-col items-center justify-center'>
    <hr className='w-[90%] ' />
    <div className='sm:grid sm:grid-cols-4 sm:p-12'>
       <div className='w-full p-12'>
         <img src={logo} alt="logo" />
       </div>
       <div className='w-full p-12 flex flex-col items-center justify-center gap-2'>
         <h1 className='text-white font-bold font-Chakra'>Contacto</h1>
         <div className='flex flex-row items-center justify-center gap-2'>
           <AiOutlineMail size={30} className='text-white'/>
           <p className='text-white font-semibold font-Chakra'>devforge.tms@gmail.com</p>
         </div>
       </div>
       <div className='w-full p-12 flex flex-col items-center justify-center gap-2'>
         <h1 className='text-white font-bold font-Chakra'>Ubicación</h1>
         <div className='flex flex-row items-center justify-center gap-2'>
           <BiWorld size={30} className='text-white'/>
           <p className='text-white font-semibold font-Chakra'>Argentina</p>
         </div>
           
       </div>
       <div className='w-full p-12 flex flex-row items-center justify-center gap-2'>
        <a href="https://www.facebook.com/DevForgeTMS" target='blank' rel='Facebook'>
         <AiFillFacebook size={40} className='text-white hover:text-blue-400' />
        </a>
        <a href='https://www.linkedin.com/company/93261956' target='blank' rel='Linkedin'>
         <FaLinkedin size={40} className='text-white hover:text-blue-500' />
        </a>
       </div>
      
       
    </div>
    <div className='p-4 w-full flex items-center justify-center'>
         <p className='text-white text-xs'>© 2023. Todos los derechos reservados por DevsForgeTMS</p>
    </div>

    </div>
  )
}

export default Footer