import React from 'react'; 

import Login from './Pages/LogIn.jsx';
import Signup from './Pages/SignUp.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import About from './Pages/About.jsx';
import NewReport from './Pages/NewReport';

import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard/:userID' element={<Dashboard/>}/>
        <Route path='/dashboard/:userID/new' element={<NewReport/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
