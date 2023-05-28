import HomeTms from './Pages/HomeTms';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';




function App() {

 

  return (
    <Router>
      <Routes> 
       <Route path='/' element={<HomeTms/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
