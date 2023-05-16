import Footer from '../components/Footer';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import About2 from './About2';
import AboutUs from './AboutUs';
import Contactanos from './Contactanos';
import QueHacemos from './QueHacemos';
import Carousel from '../components/Carousel';


 const HomeTms = () => {
    

    return (
      <div>

    
          <div className='h-screen bg-bgBlack'>

           <div className='h-auto border-white'>
             <NavBar />
           </div>
             <Home/>
          </div>
      
          <div className='h-screen'>
            <AboutUs/>
          </div>

          
          <div className='h-screen'>
            <About2/>
          </div>
          
          <div className=''>
            <QueHacemos/>
            <Carousel />
          </div>

      
       
       {/*      
          <div className=''>
            <Contactanos/>
         </div> */}

          <Footer />

      </div>
    )


}


 export default HomeTms