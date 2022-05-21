import * as React from 'react';
import Item from './Item.js';
import { Grid, Typography } from '@mui/material';
const ItemList=({props}) => {

  return (
  <div className='contenedor'>
      <Typography variant="h2">Productos destacados</Typography>
        <Grid container spacing={3}>
            {
                props.map( ({title, price, img, id, stock, text}) => {
                    return(
                        <Grid item md={4} key={id}>
                            <Item title={title} price={price} img={img} stock={stock} text={text}/>
                        </Grid>
                    )
                })
            }
        </Grid>
        </div>
  )
}
export default ItemList;