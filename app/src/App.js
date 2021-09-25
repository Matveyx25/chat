import React, { useContext } from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './Components/AppRouter';
import Navbar from './Components/Navbar'
import './App.css'
import { Context } from './index';
import Preloader from './Components/Preloader';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const {auth} = useContext(Context)
  const [user, loading, error] = useAuthState(auth)

  if(loading){
    return <Preloader/>
  }

  return (
   <BrowserRouter>
      <Navbar/>
      <AppRouter/>
   </BrowserRouter>
  );
}

export default App;
