import * as React from 'react';
import { Typography,Card,CardContent} from '@mui/material';
const ItemListContainer = (props) => {
    return (
        <Card sx={{ display: 'inline-block', mx: '5px', transform: 'scale(0.8)', minWidth:'150px'}}>
            <CardContent>
                <div className='card-list'>
                   <Typography variant='h4' component="div">{props.title}</Typography> 
                   <Typography variant='p' component="div">{props.text}</Typography>
                   <Typography variant='p' component="div">${props.price}</Typography>
                </div>
            </CardContent>
        </Card>
    )

}
export default ItemListContainer;