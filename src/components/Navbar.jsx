import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import logo from '../logo.png'



const logoStyle = {
    width: '35px',
    height: 'auto',
    cursor: 'pointer',
};

function Navbar({ handleOpen, handleLogout, loggedIn }) {

    const navBarMargin = loggedIn ? '240px' : '0px';
    // const navBarPosition = loggedIn? 'fixed' : 'fixed';

    // Logic for scrolling using navigation links
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 50;
        if (sectionElement) {
          const targetScroll = sectionElement.offsetTop - offset;
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div >
            <AppBar  position='fixed' sx={{ boxShadow: 0, bgcolor: 'transparent', mt:2,  backgroundImage: 'none'}} >
                <Container maxWidth="lg" >
                    <Toolbar variant="regular"
                        sx={{
                            marginLeft:`${navBarMargin}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                        }}>

                        {/* Logo + Navmenu */}

                        <Box 
                            sx={{
                                zIndex:-1,
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',

                            }}
                        >

                            {/* Logo/Brand */}
                            <a href="#" style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
                            <img
                                src={logo}
                                style={logoStyle}
                                alt="logo"
                            />

                        

                            <Typography sx={{ color: 'black', fontWeight: 'bold', margin: '20px' }}> STOCK_STREAM </Typography>
                            </a>
                            {/* Nav menu items  */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '4em', marginInline: 'auto' }}>
                               <>
                                    {!loggedIn?
                                        <>
                                            <MenuItem onClick={() => scrollToSection('features')} sx={{ py: '6px', px: '12px' }}>
                                                <Typography variant="body2" color="black"> Features </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => scrollToSection('testimonials')} sx={{ py: '6px', px: '12px' }}>
                                                <Typography variant="body2" color="black"> Testimonials </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => scrollToSection('newsletter')}sx={{ py: '6px', px: '12px' }}>
                                                <Typography variant="body2" color="black"> Newsletter </Typography>
                                            </MenuItem>
                                        </>
                                        : 
                                        <></>
                                    }
                                </>
                            </Box>
                        </Box>

                        {/* Sign in button */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                            {loggedIn ? <Button onClick={handleLogout} sx={{paddingInline:'15px', color:'black'}}> Logout </Button> : 
                                        <Button onClick={handleOpen} sx={{paddingInline:'15px', color:'black'}}> Sign In </Button>
                            }
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}



export default Navbar;