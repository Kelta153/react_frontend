import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import AddProduct from '././forms/AddProduct';
import EditProduct from '././forms/EditProduct';
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from '@mui/icons-material/Person';
import Backdrop from "@mui/material/Backdrop";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar"
import DeleteConfirmationAlert from './DeleteConfirmationAlert';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import LogoutIcon from '@mui/icons-material/Logout';
import WarningIcon from '@mui/icons-material/Warning';
import LoyaltyIcon from '@mui/icons-material/Loyalty';


const Drawer = styled(MuiDrawer)(
    () => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: '240px',
            boxSizing: 'border-box',
        }
    })
);

export default function Dashboard() {

    const handleClick = (e) =>{
        const section = e.target.innerText
        setMainItem(section)
        // if(section==="Dashboard") {setRows(products); setColumns(productColumns)}
        // else if(section==="Orders") {setRows(orders); setColumns(orderColumns)}
        // else if(section==="Customers") {setRows(customers); setColumns(customerColumns)}
        // else if(section==="Reports") {setRows(reports); setColumns(reportColumns)}
        // else if(section==="Integrations") {setRows(integrations); setColumns(integrationColumns)}

        if(section==="Low stock") {
            fetch('https://inventory-management-system-gary.azurewebsites.net/product/')
            .then((r) => r.json())
            .then((data) => {
               const  filteredProducts = data.filter((data.quantity < 1000))
               setRows(filteredProducts)
            }
        else if(section==="On sale") {
            fetch('https://inventory-management-system-gary.azurewebsites.net/product/')
            .then((r) => r.json())
            .then((data) => {
               const  filteredProducts = data.filter((data.on_sale === True))
               setRows(filteredProducts)
                setColumns(productColumns)
            }



            
            )
            
        
        else if(section==="On sale") {
            // setRows(integrations); 
            setColumns(productColumns)}

        

    }



    const mainListItems = (
        <React.Fragment>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}> 
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
            </ListItemButton>
        </React.Fragment>
    );

    const secondaryListItems = (
        <React.Fragment>
            <ListSubheader component="div" inset>
                Views
            </ListSubheader>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <WarningIcon />
                </ListItemIcon>
                <ListItemText primary="Low stock" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <LoyaltyIcon />
                </ListItemIcon>
                <ListItemText primary="On sale" />
            </ListItemButton>

            <ListItemButton >
                <ListItemIcon>
                    <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </React.Fragment>
    );


    const renderEditButton = (params) => {
        return (
            <strong>
                <Button

                    variant="contained"
                    // color="primary"
                    size="small"
                    onClick={(e) => {
                        handleEdit(params.row.id);
                    }}
                    sx={{ background: '#242424', color: 'F0F4F8', borderRadius: '0px', '&:hover': { backgroundColor: '#F0F4F8', color: '#242424', border: '1px solid #242424' } }}
                >
                    Edit
                </Button>
            </strong>
        );
    };

    const renderDeleteButton = (params) => {
        return (
            <strong>
                <Button
                    variant="contained"
                    sx={{ background: '#242424', color: 'F0F4F8', borderRadius: '0px', '&:hover': { backgroundColor: '#F0F4F8', color: '#242424', border: '1px solid #242424' } }}
                    size="small"
                    onClick={(e) => { handleDelete(params.row.id) }}
                >
                    Delete
                </Button>
            </strong>
        );
    };

    const productColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "is_available", headerName: "Available", width: 150 },
        { field: "is_on_sale", headerName: "On sale", width: 150 },
        { field: "quantity", headerName: "Quantity", width: 150 },
        { field: "price", headerName: "Price", width: 150 },

        {
            field: "edit",
            headerName: "Edit",
            width: 100,
            sortable: false,
            renderCell: renderEditButton,
            disableClickEventBubbling: true,
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 100,
            sortable: false,
            renderCell: renderDeleteButton,
            disableClickEventBubbling: true,
        },
    ];


    const [displayedItem, setDisplayedItem] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [editSuccess, setEditSuccess] = React.useState(null);
    const [deleteSuccess, setDeleteSuccess] = React.useState(null)
    const [rows, setRows] = React.useState([])
    const [columns, setColumns] = React.useState(productColumns)
    const [products, setProducts] = React.useState()
    const [mainItem, setMainItem] = React.useState("ProductInventory")


  

    React.useEffect(() => {
        fetch('https://inventory-management-system-gary.azurewebsites.net/product/')
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                setRows(data);
                setColumns(producColumns);
            }

            )
    }, [success, editSuccess, deleteSuccess])

    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    const handleAddProduct = () => {
        handleOpen();
        setDisplayedItem(<AddProduct setSuccess={setSuccess} handleClose={handleClose} setProducts={setProducts} />)
    };

    const handleEdit = (product_id) => {
        console.log(product_id);
        handleOpen();
        setDisplayedItem(<EditProduct setEditSuccess={setEditSuccess} product_id={product_id} handleClose={handleClose} setProducts={setProducts} />)
    };

    const handleDelete = (product_id) => {
        console.log(product_id)
        handleOpen();
        setDisplayedItem(<DeleteConfirmationAlert setDeleteSuccess={setDeleteSuccess} handleClose={handleClose} product_id={product_id} setProducts={setProducts} />)
    };



    const orders = [
        { id: 1, customerId: 1, product: "Headphones", quantity: 2, price: 50 },
        { id: 2, customerId: 2, product: "Speakers", quantity: 1, price: 100 },
        { id: 3, customerId: 3, product: "Camera", quantity: 1, price: 200 },
        { id: 4, customerId: 4, product: "Printer", quantity: 2, price: 100 },
        { id: 5, customerId: 5, product: "Mouse", quantity: 1, price: 50 },
        { id: 6, customerId: 6, product: "Keyboard", quantity: 1, price: 100 },
        { id: 7, customerId: 7, product: "Monitor", quantity: 1, price: 200 },
        { id: 8, customerId: 8, product: "Scanner", quantity: 1, price: 150 },
        { id: 9, customerId: 9, product: "Router", quantity: 1, price: 250 },
        { id: 10, customerId: 10, product: "Headphones", quantity: 1, price: 50 },
        { id: 11, customerId: 11, product: "Speakers", quantity: 1, price: 100 },
        { id: 12, customerId: 12, product: "Camera", quantity: 1, price: 200 },
        { id: 13, customerId: 13, product: "Printer", quantity: 1, price: 100 },
        { id: 14, customerId: 14, product: "Mouse", quantity: 1, price: 50 },
        { id: 15, customerId: 15, product: "Keyboard", quantity: 1, price: 100 },
        { id: 16, customerId: 16, product: "Monitor", quantity: 1, price: 200 },
        { id: 17, customerId: 17, product: "Scanner", quantity: 1, price: 150 },
        { id: 18, customerId: 18, product: "Router", quantity: 1, price: 250 },
        { id: 19, customerId: 19, product: "Headphones", quantity: 1, price: 50 },
        { id: 20, customerId: 20, product: "Speakers", quantity: 1, price: 100 },
    ]
    
    const orderColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "customerId", headerName: "Customer_ID", width: 150 },
        { field: "product", headerName: "Product", width: 150 },
        { field: "quantity", headerName: "Quantity", width: 150 },
        { field: "price", headerName: "Prics", width: 150 },
      
    ]


 
    const customers = [
        { id: 1, name: "Peter Andrews", location: "Nairobi" },
        { id: 2, name: "Jane Doe", location: "New York" },
        { id: 3, name: "Alice", location: "Tokyo" },
        { id: 4, name: "Bob", location: "London" },
        { id: 5, name: "Charlie", location: "Paris" },
        { id: 6, name: "David", location: "Berlin" },
        { id: 7, name: "Eva", location: "Madrid" },
        { id: 8, name: "Frank", location: "Rome" },
        { id: 9, name: "Grace", location: "Sydney" },
        { id: 10, name: "Harry", location: "Toronto" },
    ]

    const customerColumns =[
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "location", headerName: "Location", width: 150 },
 


    ]

    const reports = [
        { id: 1, dispatchDate: "2022-01-01", arrivalDate: "2022-01-02", delivered: true },
        { id: 2, dispatchDate: "2022-01-02", arrivalDate: "2022-01-03", delivered: false },
        { id: 3, dispatchDate: "2022-01-03", arrivalDate: "2022-01-04", delivered: true },
        { id: 4, dispatchDate: "2022-01-04", arrivalDate: "2022-01-05", delivered: false },
        { id: 5, dispatchDate: "2022-01-05", arrivalDate: "2022-01-06", delivered: true },
        { id: 6, dispatchDate: "2022-01-06", arrivalDate: "2022-01-07", delivered: false },
        { id: 7, dispatchDate: "2022-01-07", arrivalDate: "2022-01-08", delivered: true },
        { id: 8, dispatchDate: "2022-01-08", arrivalDate: "2022-01-09", delivered: false },
        { id: 9, dispatchDate: "2022-01-09", arrivalDate: "2022-01-10", delivered: true },
        { id: 10, dispatchDate: "2022-01-10", arrivalDate: "2022-01-11", delivered: false },
        { id: 11, dispatchDate: "2022-01-11", arrivalDate: "2022-01-12", delivered: true },
        { id: 12, dispatchDate: "2022-01-12", arrivalDate: "2022-01-13", delivered: false },
        { id: 13, dispatchDate: "2022-01-13", arrivalDate: "2022-01-14", delivered: true },
        { id: 14, dispatchDate: "2022-01-14", arrivalDate: "2022-01-15", delivered: false },
        { id: 15, dispatchDate: "2022-01-15", arrivalDate: "2022-01-16", delivered: true },
        { id: 16, dispatchDate: "2022-01-16", arrivalDate: "2022-01-17", delivered: false },
        { id: 17, dispatchDate: "2022-01-17", arrivalDate: "2022-01-18", delivered: true },
        { id: 18, dispatchDate: "2022-01-18", arrivalDate: "2022-01-19", delivered: false },
        { id: 19, dispatchDate: "2022-01-19", arrivalDate: "2022-01-20", delivered: true },
        { id: 20, dispatchDate: "2022-01-20", arrivalDate: "2022-01-21", delivered: false },
    ];

    const reportColumns =[
        { field: "id", headerName: "ID", width: 70 },
        { field: "dispatchDate", headerName: "Dispatch date", width: 150 },
        { field: "arrivalDate", headerName: "Arrival date", width: 150 },
        { field: "delivered", headerName: "Status", width: 150 },
    ]

 
    const integrationColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "integrationName", headerName: "Integration Name", width: 150 },
        { field: "integrationType", headerName: "Integration Type", width: 200 },
        { field: "status", headerName: "Status", width: 150 },
        { field: "integrationDate", headerName: "Integration Date", width: 200 },
      ];
      
      const integrations = [
        {
          id: 1,
          integrationName: "ERP Integration",
          integrationType: "ERP",
          status: "Connected",
          integrationDate: "2023-01-05T14:30:00",
        },
        {
          id: 2,
          integrationName: "Marketing Automation Integration",
          integrationType: "Marketing Automation",
          status: "Disconnected",
          integrationDate: null,
        },
        {
          id: 3,
          integrationName: "Shipping Integration",
          integrationType: "Shipping",
          status: "Connecting",
          integrationDate: "2023-01-21T11:00:00",
        },
      ];
    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
            width: 'auto',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'linear-gradient(180deg, #CEE5FD, #F0F4F8)',

        }}>

            <Drawer variant="permanent" open={true} sx={{ height: '100%', }}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        // mt:'4.2vh',
                        fontSize: '12px',
                        paddingBlock: '5vh'

                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#242424' }}>
                        <PersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome, Admin
                    </Typography>
                </Toolbar>

                <Divider />

                <List component="nav">
                    {mainListItems}
                    <Divider sx={{ my: 1 }} />
                    {secondaryListItems}
                </List>

            </Drawer>

            <Grid item sx={{ width: '70%', marginInline: 'auto', marginTop: '12vh' }}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column", height: '78vh' }}>

                    {/* Container for Title, Conditional success messages and Add Product button */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            // height:'78vh%'
                            // width: '80%',
                        }}
                    >
                        {/* "Projects" Title */}
                        <Box sx={{ px: 2 }}>
                            <Typography component="h3" variant="h6" gutterBottom>
                                {mainItem}
                            </Typography>
                        </Box>

                        {/* Conditional Success Messages */}
                        {success ? (
                            <Alert
                                onClose={() => {
                                    setSuccess(false);
                                }}
                                sx={{ my: 2 }}
                                severity="success"
                            >
                                {success}
                            </Alert>
                        ) : (
                            <></>
                        )}

                        {editSuccess ? (
                            <Alert
                                onClose={() => {
                                    setEditSuccess(null);
                                }}
                                sx={{ my: 2 }}
                                severity="success"
                            >
                                {editSuccess}
                            </Alert>
                        ) : (
                            <></>
                        )}
                        {deleteSuccess ? (
                            <Alert
                                onClose={() => {
                                    setDeleteSuccess(null);
                                }}
                                sx={{ my: 2 }}
                                severity="success"
                            >
                                {deleteSuccess}
                            </Alert>
                        ) : (
                            <></>
                        )}

                        {/* Add Product button */}
                        <Box>
                            <Button
                                onClick={handleAddProduct}
                                sx={{ mb: 2, backgroundColor: '#F0F4F8', color: '#242424', border: '1px solid #242424', '&:hover': { border: '1px solid #242424' } }}
                                variant="outlined"
                                color="primary"
                                startIcon={<AddIcon />}
                            >
                                Add Product
                            </Button>
                        </Box>
                    </Box>

                    {/* Main content containing records */}

                    <div style={{ height: '91%' }}>
                        <DataGrid
                            disableRowSelectionOnClick

                            checkboxSelection

                            rows={rows}
                            columns={columns}
                            sx={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}

                        />
                    </div>






                    <Backdrop
                        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        {displayedItem}
                    </Backdrop>

                </Paper>


            </Grid>




        </Box>




    );
}
