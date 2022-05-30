import  {Typography,Grid} from "@mui/material";
import ItemCount from "./ItemCount";
const ItemDetail = ({props}) => {
    return (
        <div className ='itemDetail_section'>
            <Typography variant="h2" component="div">Detalle</Typography>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={5}>
                    <img src={props.img} alt={props.title} className="card-list-img" width={500}/>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h4">{props.title}</Typography>
                    <Typography variant="h4">${props.price}</Typography>
                    <Typography variant="body2">{props.text}</Typography>
                    <ItemCount stock={props.stock}/>
                </Grid>
            </Grid>            
        </div>
    )
}
export default ItemDetail;