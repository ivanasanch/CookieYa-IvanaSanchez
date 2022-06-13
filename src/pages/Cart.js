import { Grid, Button, Typography } from "@mui/material";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext);
  const { delProducttoCart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  return (
    <div style={{padding: "1em"}}>
      {cartListItems.length === 0 && (
        <div>
        <Button key={0}>
          <Typography variant="button">
            <Link to="/"  style={{color: "#f19444", textTransform:"uppercase", textDecoration:"none"}}>
            No has agregado nada al carrito. <br/>Empieza a comprar</Link>
          </Typography>
        </Button>
        <div>
          <img src='../../img/imgCart.png' alt="ilustration cart"></img>
        </div>
        </div>
      )}
      {cartListItems.length > 0 && (
      <div><header>
      <Typography variant="h4" component="div" mt={10} style={{textAlign:"left"}}>Su carrito de compras</Typography>
      </header>
      <Grid container direction="row" className="cartTitle" key="0" style={{color: "#f19444", textTransform:"uppercase"}} mt={10}>
              <Grid item xs={1}>
                <Typography variant="body2">Imagen</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2">Descripcion</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2">Precio Unitario</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2">Cantidad</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography variant="body2">Quitar</Typography>
              </Grid>
            </Grid></div>
            )}
      {cartListItems.map((item) => {
        return (
          <div>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              key={item.id}
            >
              <Grid item xs={1}>
                <div>
                  <img src={`/${item.img}`} width="50px" alt={item.title}></img>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div>
                  <Typography variant="body2">{item.title}</Typography>
                </div>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body2">${item.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <div>
                  <Typography variant="body2">{item.count}</Typography>
                </div>
              </Grid>
              <Grid item xs={1}>
                <div>
                  <Button
                    variant="text"
                    onClick={() => {
                      delProducttoCart(item);
                    }}>
                    <DeleteIcon />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
      {cartListItems.length > 0 && (
        <Grid container spacing={2}>
          <Grid item xs={2}>
              <Button
              onClick={() => clearCart()}
              key='99'
              style={{ color: "#f19444", textTransform: "uppercase" }}>
                  <Typography variant="body2">Vaciar Carrito</Typography>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button key='98'>
                  <Typography variant="body2">
                      <Link to="/" style={{textDecoration:"none", color: "#f19444", textTransform: "uppercase" }}>Seguir comprando</Link>
                  </Typography>
              </Button>
              </Grid>
            <Grid item xs={8}><Typography variant="button">Total: ${totalPrice}</Typography></Grid>
          </Grid>
      )}
    </div>
  );
};
export default Cart;
