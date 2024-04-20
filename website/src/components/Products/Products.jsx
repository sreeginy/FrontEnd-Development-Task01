import React from 'react';
import './products.css';
import '../../index.css';
import Product01 from "../../assets/product01.jpg";
import Product02 from "../../assets/product002.jpg";
import Product03 from "../../assets/product03.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Products = () => {
  return (
    <div className="title"> 
    <h1>OUR PRODUCTS</h1>
    <div className='products container'>

            <div className="card-container">
              
    <Card sx={{ maxWidth: 345 }} className='textstyle'>
      <CardMedia
        component="img"
        alt="coffee"
        height="300"
        image={Product01}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        Original Coffee
        </Typography>
        <Typography variant="body1" color="text.secondary" >
        A coffee café is an establishment that serves various types of coffee, espresso, latte.
        </Typography> <br />
        <Button variant="contained" size="medium" >View More</Button> <br />
      </CardContent>
    </Card>

   <Card sx={{ maxWidth: 345 }} className='textstyle'>
      <CardMedia
        component="img"
        alt="coffee"
        height="300"
        image={Product02}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        20 Coffee Flavors
        </Typography>
        <Typography variant="body1" color="text.secondary" >
        A coffee café is an establishment that serves various types of coffee, espresso, latte.
        </Typography> <br />
        <Button variant="contained" size="medium" >View More</Button> <br />
      </CardContent>
    </Card>      



    <Card sx={{ maxWidth: 345 }} className='textstyle'>
      <CardMedia
        component="img"
        alt="coffee"
        height="300"
        image={Product03}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
        Signature Coffee
        </Typography>
        <Typography variant="body1" color="text.secondary" >
        A coffee café is an establishment that serves various types of coffee, espresso, latte.
        </Typography> <br />
        <Button variant="contained" size="medium" >View More</Button> <br />
      </CardContent>
    </Card>   

    </div>
  </div> 

  </div>


  )
}

export default Products
