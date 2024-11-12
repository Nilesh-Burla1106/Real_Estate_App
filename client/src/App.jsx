import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Admin from './Components/Admin';
import Telecaller from './Components/Telecaller';
import Advisor from './Components/Advisor';
import Manager from './Components/Manager';
import Accountant from './Components/Accountant';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import CustomerData from './Components/CustomerData';
import NewClientFrom from './Components/NewClientFrom';
import SiteVisit from './Components/SiteVisit';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/advisor' element={<Advisor/>}></Route>
          <Route path='/manager' element={<Manager/>}></Route>
          <Route path='/telecaller' element={<Telecaller/>}></Route>
          <Route path='/accountant' element={<Accountant/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
          <Route path='/reset-password/:id/:token' element={<ResetPassword/>}></Route>
          <Route path='/customer-data' element={<CustomerData/>}></Route>
          <Route path='/new-client-form' element={<NewClientFrom/>}></Route>
          <Route path='/site-visit' element={<SiteVisit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
