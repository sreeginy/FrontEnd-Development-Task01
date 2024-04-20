import React from 'react'
import './gallery.css';
import '../../index.css';
import Gallery01 from "../../assets/topView01.jpg";
import Gallery03 from "../../assets/topView03.jpg";
import Gallery04 from "../../assets/topView04.jpg";
import Gallery05 from "../../assets/topView05.jpg";
import Gallery06 from "../../assets/topView06.jpg";
import Gallery08 from "../../assets/topView07.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Gallery = () => {
  return (
   

    <div className="title"> 
    <h1>OUR GALLERY</h1>
    <div className='gallery '>


    <div className="cardContainer">
    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery01}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Latte Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </div>
  


    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery03}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Cappuccino Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </div>
  

    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery06}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Lungo Coffee
          </Typography>
          <Typography variant='body2' color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </div>



    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery05}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Cappuccino Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>

    </div>

    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery04}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Espresso Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>

    </div>


    <div className='card' sx={{ maxWidth: 205 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={Gallery08}
          alt="green iguana"
        />
        <CardContent className='textStyle'>
          <Typography gutterBottom variant="h6" component="div">
          Latte Coffee
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>

    </div>

    </div>
    </div>
    </div>


  )
}

export default Gallery
