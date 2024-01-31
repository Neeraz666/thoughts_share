// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Login} from "./components/login"
import {Home} from "./components/home"
import {Logout} from "./components/logout"
import {Navigation} from "./components/navigation"

function App() {

  /*
    Necessary components are imported from components folder and Routings are used for routing to those different components. Whereas Navigation is a higher order component which will show in every route.
  */

  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
