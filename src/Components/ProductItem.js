import React from 'react'
import "./ProductItem.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductItem = (props) => {
  return (
    <>
     {props.products.map((item) => {
        const {id, name, price, description, image} = item;
        return (
          
          <Card  key={id} className='car col-9 col-sm-5 col-md-5 col-lg-3 col-xl-3 bg-primary my-1 px-3 py-1 mx-4 '>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {name}
              </Typography>
              <Typography variant='body2'>
              Desc : {description}
              </Typography>
              <Typography  variant="body2" color="text.secondary">
              Price: <strike> RS 25000</strike><span className='price'> : {price}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    
        )
      })}   
    </>
  )
}

export default ProductItem