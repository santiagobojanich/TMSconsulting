import HomeTms from './Pages/HomeTms';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import QueHacemos from './Pages/QueHacemos';
import Contactanos from './Pages/Contactanos';



function App() {

 

  return (
    <Router>
      <Routes> 
       <Route path='/' element={<HomeTms/>}/> 
       <Route path='/contacto' element={<Contactanos/>} />
      </Routes>
    </Router>
  );
}

export default App;
