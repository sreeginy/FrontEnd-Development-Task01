import React from 'react';
import './products.css';
import '../../index.css';
import Product01 from "../../assets/product01.jpg";
import Product02 from "../../assets/product002.jpg";
import Product03 from "../../assets/product03.jpg";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
  return (
    <div className="title"> 
    <h1>OUR PRODUCTS</h1>
    <div className='products container'>
        <div className="product">

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="coffee"
        height="350"
        image={Product01}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Original Coffee
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ alignItems: "left"}}>
        A coffee café is an establishment that primarily serves various types of coffee, espresso, latte.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">View More</Button>
      </CardActions>
    </Card>

            {/* <img src={Product01} alt="" />
            <h3>Original Coffee</h3>
            <p>A coffee café is an establishment that primarily serves various types of coffee, espresso, latte.</p>
            <button className='button3'>Explore More</button>  */}
        </div> 

        <div className="product">
            <img src={Product02} alt="" />
            <h3>20 Coffee Flavors</h3>
            <p>A coffee café is an establishment that primarily serves various types of coffee, espresso, latte.</p>
            <button className='button3'>Explore More</button>
        </div>

        <div className="product">
            <img src={Product03} alt="" />
            <h3>Signature Coffee</h3>
            <p>A coffee café is an establishment that primarily serves various types of coffee, espresso, latte.</p>
            <button className='button3'>Explore More</button>
        </div>
    </div>
    </div>
  )
}

export default Products
