import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function AddProduct({ setSuccess, handleClose, setProducts }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      name: data.get('name') || 'Unnamed product',
      quantity: data.get('quantity') || 0,
      price: data.get('price') || 0.0
    };



    fetch('https://inventory-management-system-gary.azurewebsites.net/product/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setSuccess(`Sucess! Prouct number ${data.id} Created`);  
        setTimeout(()=>{
          setSuccess(false)
        }, 2000)
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
      fetch('https://inventory-management-system-gary.azurewebsites.net/product/')
      .then((r)=>r.json() )
      .then((data) => {

        setProducts(data)})

    handleClose();

  };

  return (
    <Container component="main" sx={{
      backgroundColor: '#F0F4F8',
      width: '40%',
      height: '80%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: '20px',

      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          // borderColor: 'gray',
          borderRadius: '0px',
          border: '0.5px solid #242424',

        },
        '&.Mui-focused fieldset': {
          // borderColor: '#242424',
          border: '0.5px solid #242424',
          borderRadius: '0px'
          //  boxShadow: '0 0 0 1px blue',
        },
      },
    }}>
      <Box
        sx={{
          // marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#242424' }}>
          <AddCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: '#242424' }}>
          ADD NEW PRODUCT
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="quantity"
                label="Quantity"
                type="quantity"
                id="quantity"
                autoComplete="quantity"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="price"
                label="Price"
                type="price"
                id="price"
                autoComplete="price"
              />
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, bgcolor: '#242424', color: '#F0F4F8', borderRadius: '0px', '&:hover': { bgcolor: '#242424' } }}
          >
            CONFIRM
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, bgcolor: '#242424', color: '#F0F4F8', borderRadius: '0px', '&:hover': { bgcolor: '#242424' } }}
          >
            BACK
          </Button>

        </Box>
      </Box>
    </Container>
  );
}



