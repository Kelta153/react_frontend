import React from 'react'
import Hero from './Hero'
import Features from './Features';
import Testimonials from './Testimonials';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Dashboard from './Dashboard';
import Footer from './Footer';




const Home = ({loggedIn, handleOpen}) => {


  return (
    
       <>
       { !loggedIn ?             <>            
                <Hero handleOpen={handleOpen}  />
                <Box sx={{ width:'100%'}}>
                <Divider />
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Divider />
        
                </Box>
                <Footer />

            </> 

            : <Dashboard />

        }
       </>  

          
        
        
        
  )}

export default Home