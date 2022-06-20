import { Grid, Button, Typography, TextField } from "@mui/material";
import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import db from "../utils/firebaseConfig"
import { collection, addDoc,  } from "firebase/firestore";
const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext);
  const { delProducttoCart } = useContext(CartContext);
  const { clearCart } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
})
const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map( item => {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            count: item.count
        }
    } ),
    total: totalPrice
})
const saveData = async (newOrder) => {
  const orderFirebase = collection(db, 'orders')
  const orderDoc = await addDoc(orderFirebase, newOrder)
  clearCart()
}
  const handleSubmit = (e) => {
    e.preventDefault()
    setOrder({...order, buyer: formValue})
    saveData({...order, buyer: formValue})
}

  const handleChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
}
  return (
    <Grid container direction="row">
    <Grid item xs={9}>
    <div style={{ padding: "1em" }}>
      {cartListItems.length === 0 && (
        <div>
          <Button key={0}>
            <Typography variant="button">
              <Link
                to="/"
                style={{
                  color: "#f19444",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                No has agregado nada al carrito. <br />
                Empieza a comprar
              </Link>
            </Typography>
          </Button>
          <div>
            <img src="../../img/imgCart.png" alt="ilustration cart"></img>
          </div>
        </div>
      )}
      {cartListItems.length > 0 && (
        <div>
          <header>
            <Typography
              variant="h4"
              component="div"
              mt={10}
              style={{ textAlign: "left" }}
            >
              Su carrito de compras
            </Typography>
          </header>
          <Grid
            container
            direction="row"
            className="cartTitle"
            key="0"
            style={{ color: "#f19444", textTransform: "uppercase" }}
            mt={10}
          >
            <Grid item xs={1} key="01">
              <Typography variant="body2">Imagen</Typography>
            </Grid>
            <Grid item xs={3} key="02">
              <Typography variant="body2">Descripcion</Typography>
            </Grid>
            <Grid item xs={3} key="03">
              <Typography variant="body2">Precio Unitario</Typography>
            </Grid>
            <Grid item xs={3} key="04">
              <Typography variant="body2">Cantidad</Typography>
            </Grid>
            <Grid item xs={1} key="05">
              <Typography variant="body2">Quitar</Typography>
            </Grid>
            
          </Grid>


        </div>
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
              <Grid item xs={3}>
                <Typography variant="body2">${item.price}</Typography>
              </Grid>
              <Grid item xs={3}>
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
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        );
      })}
    </div>
    </Grid>
    {cartListItems.length > 0 && (
    <Grid item xs={3}>
      <Grid container direction="row" mt={15}>
      <Grid item >
            <div style={{ borderLeft:"solid 1px #f19444" }}>
              <Button
              onClick={() => clearCart()}
              key="99"
              style={{ color: "#f19444", textTransform: "uppercase" }}
              >
              <Typography variant="body2">Vaciar Carrito</Typography>
            </Button>
            <Button key="98">
              <Typography variant="body2">
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#f19444",
                    textTransform: "uppercase",
                  }}
                >
                  Seguir comprando
                </Link>
              </Typography>
            </Button>
            <form className="form-contact" onSubmit={handleSubmit}>
              <TextField 
                id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido"
                        type="text" 
                        variant="outlined" 
                        value={formValue.name}
                        margin="normal" 
                        onChange={handleChange}
              />
              <TextField 
                        id="outlined-basic" 
                        name="phone"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        label="Telefono" 
                        variant="outlined" 
                        value={formValue.phone}
                        margin="normal" 
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        value={formValue.email}
                        variant="outlined" 
                        margin="normal" 
                        onChange={handleChange}
                    />
                      <TextField 
                        id="outlined-basic" 
                        name="address"
                        label="Direccion" 
                        variant="outlined" 
                        margin="normal" 
                        value={formValue.address}
                        onChange={handleChange}
                    />
                    <br/>
                    <Button type="submit">Enviar</Button>
            </form>
            <Typography variant="button" component={"div"}>Total: ${totalPrice}</Typography>
            </div>
          </Grid>

      </Grid>
    </Grid>)}
    </Grid>
  );
};
export default Cart;
