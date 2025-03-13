import React from 'react';
import { Box, Typography, TextField, Button,InputAdornment, Divider } from '@mui/material';
import './HeaderPage.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useWindowSize} from '@react-hook/window-size'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import MyCart from '../my-cart/MyCart';
  


function HeaderPage() {
    const [width, height] = useWindowSize()
   
    return (
        <>
        <Box className="header-container">
            <Box className="sub-header-container">
            <Box className="mobile-responsive-header">
            {width > 979 && (<img src='./image/bg.png' alt="description" width={100} />)}
            <Box>
                <Typography variant='h6' sx={{fontWeight:"bold"}}>Delivery in 23 minutes</Typography>
                <Typography >address </Typography>
            </Box>
            {width 
            <= 979 &&(<Button variant='text' size='large'>
                    <AccountCircleIcon/>
                    </Button>)}
            </Box>
            <Box className="Search-bar">
                <TextField
                    placeholder='Search'
                    variant="outlined"
                    sx={{
                        borderRadius: '10px',
                        
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                />

            </Box>
            {width > 979 &&(<Button variant='text' size='large'>
                login</Button>)}
            
            {width > 979 && ( <Box className="mycart_button">
                <Button sx={{color:"white"}}>
                    <ShoppingCartOutlinedIcon />
                     <Link to='/Mycart' style={{color:'white'}}> Mycart</Link></Button>
            </Box>)}
            </Box>
        </Box>
       
        <Divider/>
        </>

    )
}

export default HeaderPage