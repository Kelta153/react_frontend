import * as React from 'react';
import Navbar from './components/Navbar';
import Signin from './components/forms/Signin';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import "./App.css"



export default function App() {

  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogout = () => {
    setLoggedIn(false)
  }

  const handleClose = () => {
    setOpen(false);
    setLoggedIn(true)

  };
  const handleOpen = (e) => {
    setOpen(true);
  };



  
  return (
    <>
      <Navbar handleOpen={handleOpen} handleLogout={handleLogout} loggedIn={loggedIn}/>
      <Routes>
        <Route path='/' element={<Home loggedIn={loggedIn} handleOpen={handleOpen} />}></Route>
      </Routes>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <Signin handleClose={handleClose}/>
      </Backdrop>
     
          </>
  );
}