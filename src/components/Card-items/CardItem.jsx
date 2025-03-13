import React from 'react'
import './CardItem.css'
import {Card, CardMedia, CardContent,Box, Typography, Button} from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MyCart from '../my-cart/MyCart';
import { CartItemList } from './CartItemList';

function CardItem(props) {

    const {data} = props;
    // console.log("hi",props)
    function addToCart() {
        const product = {
          name: data.productName,
          image: data.productImage,
          price:data.productPrice
        };
        console.log(product.name,product.image)
        CartItemList.push(product);
        
        localStorage.setItem("manoj",JSON.stringify(CartItemList))

        console.log("Updated CartItemList:", CartItemList);
        // setData(product); // Call the function passed as a prop
      }
    
    return (
        <><Card sx={{ borderRadius: 3, boxShadow: 3, }}>
           
            <CardMedia
                component="img"
                height="150"
                image={data.productImage} 
                alt="Amul Pure Milk Cheese Slices"
                sx={{ objectFit: 'contain' }} />

            <CardContent>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTimeIcon sx={{ fontSize: 18, color: 'green', mr: 1 }} />
                    <Typography variant="body2">11 MINS</Typography>
                </Box>

                
                <Typography gutterBottom variant="h6" component="div" fontSize={"medium"}>
                    {data.productName}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {data.productQty+data.unit}
                </Typography>

             
                <Box className="adding-items">
                    <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                        {data.productPrice}
                    </Typography>

                   
                    <Button
                        variant="outlined"
                        color="success"
                        onClick={addToCart}
                        sx={{
                            borderRadius: 3,
                            // mt: 2,
                            // width: '100%',
                            fontWeight: 'bold',
                        }}>
                        ADD
                    </Button>
                </Box>
            </CardContent>
        </Card></>
    )
}

export default CardItem