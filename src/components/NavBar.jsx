import {Link} from 'react-router-dom'
import devForge from '../assets/DevForge.svg'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import { useState } from 'react'

const NavBar = () => {
      
  const [toggle, setToggle] = useState(false)

    return (
         
        <div className="w-full bg-bgBlack border-white border-b-2  text-white flex items-center top-0 sticky">
                
          
           <div className="flex w-full flex-row">
            
                 <div className="w-2/4">
                    
                      <div className='sm:w-96 w-60 p-2 sm:h-20  sm:ml-24 ml-4  mt-1 sm:mt-0 sm:mb-2'>
                        <a href='#logo'>
                        <img  src={devForge} alt='forge' />
                        </a>
                      </div>
                 </div> 


                 <div className="hidden sm:flex flex-row font-PathWay items-center justify-center w-2/4">
                      <a href='#sobrenosotros' className='text-[23px] w-1/4 flex justify-center items-center h-full nav-link'>
                         <h1 className="">SOBRE NOSOTROS</h1>
                      </a>
                     
                     <a className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link" href='#clientes'>
                      <h1 >NUESTROS CLIENTES</h1>
                     </a>
                      
                      <a className='text-[23px] w-1/4 flex justify-center items-center h-full nav-link' href='#queHacemos'>
                      <h1 className="">QUE HACEMOS</h1>
                      </a>
                      
                      <a
                   className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link"
                      href='#footer'>
                      <h1 >
                        CONTACTANOS
                        </h1>
                      </a>
                      
                 </div>

          {/*RESPONSIVEEE  */}
                 <div className='sm:hidden flex flex-1 justify-end mr-6 items-center font-Chakra'> 
                 
                 <img src={toggle ? close : menu} alt="menu"
                  className='w-[28px] h-[28px] object-contain mr-2 mt-2'
                  onClick={ () => setToggle((prev) => !prev)}
                  /> 
                  </div>

                  <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-white
                 absolute top-16 right-0 mx-2 my-2 min-w-[140px] text-black flex-col rounded-xl sidebar`}
                 >
                   <ul className='font-Chakra text-[15px] space-y-2 font-bold'>
               <li className="text-xs">
               <a href='#sobrenosotros'>
                   SOBRE NOSOTROS 
                </a>
               </li>
               <li className="text-xs">

                 <a  href='#clientes'>
                 NUESTROS CLIENTES
                </a>
               </li>

               <li className="text-xs">
               <a  href='#queHacemos'>
                  QUE HACEMOS
                </a> 
               </li>
               
               <li className="text-xs">
               <a  href='#footer'>
                  CONTACTANOS 
                </a> 
               </li>        
                           
               </ul>
            </div>





           </div>

        
        </div>
    )
}


export default NavBar