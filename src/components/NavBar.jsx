import {Link} from 'react-router-dom'
import devForge from '../assets/DevForge.svg'

const NavBar = () => {
      
    return (
         
        <div className="w-full bg-bgBlack border-white border-b-2  text-white flex items-center">
                
          
           <div className="flex w-full flex-row">
            
                 <div className="w-2/4">
                      <div className='w-96 p-2 h-20 ml-24 mb-2'>
                        <Link to='/'>
                        <img  src={devForge} alt='forge' />
                      {/* <h1 className="text-[60px] font-Chakra font-bold ml-24">TMS</h1> */}
                        </Link>
                      </div>
                 </div> 

                 <div className="flex flex-row font-PathWay items-center justify-center w-2/4">
                     
                  
                      <a href='#sobrenosotros' className='text-[23px] w-1/4 flex justify-center items-center h-full nav-link'>
                         <h1 className="">SOBRE NOSOTROS</h1>
                      </a>
                   

                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">NUESTROS CLIENTES</h1>
                      
                      <a className='text-[23px] w-1/4 flex justify-center items-center h-full nav-link' href='#queHacemos'>
                      <h1 className="">QUE HACEMOS</h1>
                      </a>
                      
                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">CONTACTANOS</h1>
                      
                 </div>

          
           </div>

        
        </div>
    )
}


export default NavBar