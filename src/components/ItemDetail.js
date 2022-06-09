import  {Typography,Grid, Button} from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import * as React from 'react';
import { useState } from 'react';
const ItemDetail = ({props}) => {
    const [showButton, setShowButton] = useState(false)
    return (
        <div className ='itemDetail_section'>
            <Typography variant="h2" component="div">Detalle</Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={5}>
                    <img src={`/${props.img}`} alt={props.title} className="card-list-img" width={500}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="h4">${props.price}</Typography>
                    <Typography variant="body2">{props.text}</Typography>
                    {!showButton ? 
                    <ItemCount props = {props} setShowButton={setShowButton}/>
                    :
                    <Button variant='text'>
                        <Link to={'/cart'} style={{ textDecoration: 'none', color:'#f19444'}}>Terminar compra</Link>
                    </Button>
                    }
                </Grid>
            </Grid>            
        </div>
    )
}
export default ItemDetail;