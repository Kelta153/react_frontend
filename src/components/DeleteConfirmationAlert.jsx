import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function DeleteConfirmationAlert({
  setDeleteSuccess,
  product_id,
  handleClose,
  setProducts,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://inventory-management-system-gary.azurewebsites.net/product/${product_id}`, {
      method: "DELETE",
    }).
    then(setDeleteSuccess("Success! Product has been removed"));
    setTimeout(()=>{
      setDeleteSuccess(false)
    }, 2000) 
    
      fetch('http://inventory-management-system-gary.azurewebsites.net/product/')
      .then((r)=>r.json() )
      .then((data) => {
        // console.log(data);
        setProducts(data)
      }
    
      )

    

    handleClose();
  };

  const handleGoBack = () => {
    handleClose();
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ borderRadius: "20px", backgroundColor: "#F0F4F8", padding:'2.5vh' }}
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", color: "#242424" }}
        >
          Are you sure you want to remove this product?{" "}
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}></Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,bgcolor:'#242424', color:'#F0F4F8', borderRadius:'0px', '&:hover':{bgcolor:'#242424'}  }}
          >
            Yes I'm sure
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 , bgcolor:'#242424', color:'#F0F4F8', borderRadius:'0px', '&:hover':{bgcolor:'#242424'}}}
            onClick={handleGoBack}
          >
            Back to products
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
