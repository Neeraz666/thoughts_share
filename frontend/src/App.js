// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from "./components/login"
import { Home } from "./components/home"
import { Logout } from "./components/logout"
import { Navigation } from "./components/navigation"
import { SignUp } from "./components/signupform"
import React, { useState, useEffect } from 'react'

function App() {

  /*
        Used useState and useEffect Hook. At first isAuth is set to false using useState hook. Then using if conditionals, we check the localStorage if there is access_token in localStorage is not null then isAuth is set to true. Created a navigation bar using html and css.
    */

  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    if (localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);
  
  
  /*
    Necessary components are imported from components folder and Routings are used for routing to those different components. Whereas Navigation is a higher order component which will show in every route.
  */
  return (
    <BrowserRouter>
      <Navigation isAuth = {isAuth} />
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
