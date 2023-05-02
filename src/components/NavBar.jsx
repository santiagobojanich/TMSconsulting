

const NavBar = () => {
      
    return (
         
        <div className="w-full bg-bgBlack border-white border-b-2  text-white flex items-center">
                
          
           <div className="flex w-full flex-row">
            
                 <div className="w-2/4">
                      <h1 className="text-[60px] font-Chakra font-bold ml-24">TMS</h1>
                 </div> 

                 <div className="flex flex-row font-PathWay items-center justify-center w-2/4">
                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">SOBRE NOSOTROS</h1>
                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">NUESTROS CLIENTES</h1>
                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">QUE HACEMOS</h1>
                      <h1 className="text-[23px] w-1/4 flex justify-center items-center h-full nav-link">CONTACTANOS</h1>
                      
                 </div>

          
           </div>

        
        </div>
    )
}


export default NavBar