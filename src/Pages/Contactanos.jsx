import { useState } from "react"
import NavBar from "../components/NavBar"



const Contactanos = () => {

  const [input,setInput] = useState(
    {
      nombre:'',
      apellido:'',
      mail:'',
      telefono:''
    }
  )



    return (
       <div className="h-screen flex flex-col bg-bgBlack">
        
        <div className="mb-24">
        <NavBar/>
        </div>

        <div className="pb-24  font-Chakra text-white">
            
            <div className="flex flex-col items-center">
            
            <h1 className="text-[35px] pb-12">CONTACTANOS</h1> 
           
            <div className="flex flex-col w-2/3 justify-center items-center space-y-8 ">
               
               <div className="flex flex-row w-full space-x-12">
                 <input className="w-1/2 rounded-xl h-12 p-2 bg-bgBlack border-white border placeholder-white" placeholder="Nombre..."/>
                 <input className="w-1/2 rounded-xl h-12 p-2 bg-bgBlack border-white border placeholder-white" placeholder="Apellido..."/>
               </div>
               
               <div className="flex flex-row w-full space-x-12">
                 <input className="w-1/2 rounded-xl h-12 p-2 bg-bgBlack border-white border placeholder-white" placeholder="Mail..."/>
                 <input className="w-1/2 rounded-xl h-12 p-2 bg-bgBlack border-white border placeholder-white" placeholder="Telefono..."/>
               </div>
               
                 <input className="w-2/3 rounded-xl h-24 p-2 bg-bgBlack border-white border placeholder-white" placeholder="Mensaje..."/>
                 <button className="w-64 h-16 text-white text-[20px] border-2 font-bold border-white but">Enviar...</button>
            </div>

            </div>

            </div>
        </div>
    )
}


export default Contactanos