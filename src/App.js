import HomeTms from './Pages/HomeTms';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import QueHacemos from './Pages/QueHacemos';



function App() {

 

  return (
    <Router>
      <Routes> 
       <Route path='/' element={<HomeTms/>}/> 
       <Route path='/QueHacemos' element={<QueHacemos/>} />
      </Routes>
    </Router>
  );
}

export default App;
