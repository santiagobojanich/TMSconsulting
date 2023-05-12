import React from 'react'
import contact from '../assets/customer-service.gif'

const ContactUs = () => {
  return (
    <div className='flex sm:flex-row flex-col h-[90vh] '>
        <div className='w-1/2 flex items-center justify-center flex-col'>
           <img src={contact} alt="contact_image" className='rounded-xl sm:w-72' />
        </div>
        <form className='w-1/2 p-12 flex flex-col gap-4 justify-center'>

            <div className='flex sm:flex-row flex-col gap-4'>
                <div className='flex flex-col sm:w-1/2'>
                    <span>Name</span>
                    <input type="text" className='border bg-transparent p-2' />
                </div>
                <div className='flex flex-col sm:w-1/2'>
                    <span>Subject</span>
                    <input type="text" className='border bg-transparent p-2' />
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-4'>
                <div className='flex flex-col sm:w-1/2'>
                    <span>Phone</span>
                    <input type="text" className='border bg-transparent p-2' />
                </div>
                <div className='flex flex-col sm:w-1/2'>
                    <span>Email</span>
                    <input type="text" className='border bg-transparent p-2' />
                </div>
            </div>
            <div className='flex flex-col'>
               <span>Mensaje</span>
               <input type="text" rows='10' className='bg-transparent border p-2'/>
            </div>
            <button className='font-bold text-xl border p-2 hover:text-bgBlack hover:bg-white'>ENVIAR</button>
        </form>

    </div>
  )
}

export default ContactUs