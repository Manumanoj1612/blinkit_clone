import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import './ContentPage.css';
import { useWindowSize } from '@react-hook/window-size';
import CardItem from '../Card-items/CardItem';
import { ProductData } from '../dummy-data/ProductData';
import MyCart from '../my-cart/MyCart';

function ContentPage() {
    const [width, height] = useWindowSize();
    const [cartItems, setCartItems] = useState([]);

    // Function to handle adding items to the cart
   

    const images = Array(18).fill(0);

    useEffect(() => {
        console.log(ProductData);
    }, []);

    return (
        <>
            <Box className="main-home-page-container">
                <Box className="main-sub-page">
                    <Box className="banner-container">
                        <img src='./image/image1.png' alt="Banner 1" />
                    </Box>
                    <Box className="banner-content-container">
                        <img src='./image/image2.png' alt="Banner 2" />
                        <img src='./image/image3.png' alt="Banner 3" />
                        <img src='./image/image4.png' alt="Banner 4" />
                        <img src='./image/image5.png' alt="Banner 5" />
                    </Box>
                    <Box className="item-select-container">
                        <Box>
                            {images.map((_, index) => (
                                <img key={index} src="./image/image6.png" alt="" width={150} />
                            ))}
                        </Box>
                    </Box>
                    <Box className="product-card-container">
                        {
                            ProductData && ProductData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Typography variant='h5' sx={{ fontWeight: "bold", pl: 2 }}>
                                            {item.category}
                                        </Typography>
                                        <Box className="card-item-container">
                                            {
                                                item.products.map((product, index) => (
                                                    <Box className="sub-card-item-container" key={index}>
                                                        {/* Pass down the addToCart function to CardItem */}
                                                        <CardItem data={product} />
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                    </div>
                                );
                            })
                        }
                    </Box>
                </Box>

                {/* <MyCart cartItems={"cartItems"} /> */}
            </Box>
        </>
    );
}

export default ContentPage;
