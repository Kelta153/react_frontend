import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import login_pic from '../login_pic.jpg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Stock_stream
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function Signin({handleClose}) {

  // Function to handle submit event
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    handleClose();

    
  };

  return (
      <Grid container component="main" sx={{padding:'20vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            
            borderTopLeftRadius:'20px',
            borderBottomLeftRadius:'20px',
            backgroundRepeat: 'no-repeat',        
            background: `url(${login_pic})`,
 

            // backgroundColor: (t) =>
            //   t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{              borderTopRightRadius:'20px',
              borderBottomRightRadius:'20px',}}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBlock:'25%',


            }}
          >

            <Typography component="h1" variant="h5">
              SIGN IN
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
     
                  '& .MuiOutlinedInput-root': {
                    
                   '& fieldset': {
                       // borderColor: 'gray',
                       borderRadius:'0px',
                       border:'0.5px solid #242424',

                     },
                     
                    '&.Mui-focused fieldset': {
                     // borderColor: '#242424',
                     border:'0.5px solid #242424',
                     borderRadius:'0px'
                     //  boxShadow: '0 0 0 1px blue',
                     },
                   },
                 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  '& .MuiOutlinedInput-root': {
                   '& fieldset': {
                       // borderColor: 'gray',
                       borderRadius:'0px',
                       border:'0.5px solid #242424',

                     },
                    '&.Mui-focused fieldset': {
                     // borderColor: '#242424',
                     border:'0.5px solid #242424',
                     borderRadius:'0px'
                     //  boxShadow: '0 0 0 1px blue',
                     },
                   },
                 }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor:'#242424', color:'F0F4F8', borderRadius:'0px', '&:hover':{backgroundColor:'#242424'} }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{color:'#242424', textDecoration:'none'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2"  sx={{color:'#242424', textDecoration:'none'}}> 
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}