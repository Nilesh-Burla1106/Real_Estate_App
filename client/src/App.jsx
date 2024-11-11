import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Telecaller from './Telecaller';
import Advisor from './Advisor';
import Manager from './Manager';
import Accountant from './Accountant';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/advisor' element={<Advisor/>}></Route>
          <Route path='/manager' element={<Manager/>}></Route>
          <Route path='/telecaller' element={<Telecaller/>}></Route>
          <Route path='/accountant' element={<Accountant/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/reset-password/:id/:token' element={<ResetPassword/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
