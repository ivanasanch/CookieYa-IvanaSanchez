import  {Typography,Grid, Button, Breadcrumbs} from "@mui/material";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import * as React from 'react';
import { useState } from 'react';
//Arma la visual del item detallado
const ItemDetail = ({props}) => {
    const [showButton, setShowButton] = useState(false)
    return (
        <div className ='itemDetail_section' >
            
            
            <Typography variant="h2" component="div">{props.title}</Typography>
            <div className="bc">
                <Breadcrumbs separator="·">
                    <Link to={"/"} className="link_bc">
                        Inicio
                    </Link>
                    <Link to={`/productos/${props.category}`} className="link_bc">
                        {props.category}
                    </Link>
                    <Typography variant="body2">{props.title}</Typography>
                </Breadcrumbs>
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center" wrap="wrap">
                <Grid item md={5}>
                <div>
                    <img src={`/${props.img}`} alt={props.title} className="card-list-img" width={500}/>
                    </div>
                </Grid>
                <Grid item  md={3}>
                    <Typography variant="body2" pb={3} component="div">{props.text}</Typography>
                    <Typography variant="h4" component="div">${props.price}</Typography>
                    {!showButton ? 
                    <ItemCount props = {props} setShowButton={setShowButton}/>
                    :
                    <Button variant='button' className='btn_effect'>
                        <Link to={'/cart'} className="link">Terminar compra</Link>
                    </Button>
                    }
                </Grid>
            </Grid>            
        </div>
    )
}
export default ItemDetail;