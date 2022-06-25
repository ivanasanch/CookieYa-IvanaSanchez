import { Grid, Button, Typography, TextField } from "@mui/material";
import { CartContext } from "../context/cartContext";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import db from "../utils/firebaseConfig";
import swal from 'sweetalert';
import "../css/style.css";
import { collection, addDoc, updateDoc,doc } from "firebase/firestore";
//pantalla de carrito de compras. Muestra todos los articulos en el carrito y gestiona la orden
const Cart = () => {
  const { cartListItems, totalPrice } = useContext(CartContext);
  const { delProducttoCart } = useContext(CartContext);
  const navigate = useNavigate()
  const { clearCart } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    email2:''
})

const [order, setOrder] = useState({
    buyer: {},
    items: cartListItems.map( item => {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            count: item.count,
            stock: item.stock
        }
    } ),
    total: totalPrice
})
const newStock = (newOrder) =>{
  newOrder.items.map(async(item)=> {
    const cookieOrder = doc(db, "cookies",item.id);
   await updateDoc(cookieOrder, {
    stock: (item.stock - item.count)})
  })
}


const saveData = async (newOrder) => {
  const orderFirebase = collection(db, 'orders')
  const orderDoc = await addDoc(orderFirebase, newOrder)
  swal(
    {
      title:"Se ha completado la compra correctamente",
      text:`Tu orden tiene el código: ${orderDoc.id}`,
      icon: "success"},
      )
  newStock(newOrder)
   clearCart()
   navigate("/")
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
    <div>
    {cartListItems.length === 0 && (
        <div style={{textAlign:"center", paddingTop:"10px"}}>
          <Link to="/" className="link">
              <Button key="0" className="btn_effect">
                <Typography variant="h4">
                  Aún no has agregado artículos.<br/>Empieza a comprar
                </Typography>
              </Button>
            </Link>
        </div>
      )}
    <Grid container direction="row">
      
    <Grid item md={9}>
    <div style={{ padding: "1em" }}>
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
            key="001"
            style={{ color: "#f19444", textTransform: "uppercase" }}
            mt={10}
          >
            <Grid item md={3} key="02">
              <Typography variant="body2">Descripcion</Typography>
            </Grid>
            <Grid item md={3} key="03">
              <Typography variant="body2">Precio Unitario</Typography>
            </Grid>
            <Grid item md={3} key="04">
              <Typography variant="body2">Cantidad</Typography>
            </Grid>
            <Grid item md={1} key="05">
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
                    className="btn_effect"
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
    <Grid item md={3}>
      <Grid container direction="row" mt={15}>
      <Grid item >
            <div style={{ borderLeft:"solid 1px #f19444" }}>
              <Button
              onClick={() => clearCart()}
              key="99"
              className="btn_effect">
              <Typography variant="body2">Vaciar Carrito</Typography>
            </Button>
            <Link to="/" className="link">
              <Button key="98" className="btn_effect">
                <Typography variant="body2">
                  Seguir comprando
                </Typography>
              </Button>
            </Link>
            <form className="form-contact" key="form" onSubmit={handleSubmit}>
              <TextField 
                id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido"
                        type="text" 
                        variant="outlined" 
                        value={formValue.name}
                        margin="normal" 
                        onChange={handleChange}
                        required
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
                        required
                    />
                      <TextField 
                        id="outlined-basic" 
                        name="address"
                        label="Direccion" 
                        variant="outlined" 
                        margin="normal" 
                        value={formValue.address}
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        type="email"
                        label="Email"
                        value={formValue.email}
                        variant="outlined" 
                        margin="normal" 
                        onChange={handleChange}
                        required
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email2"
                        type="email"
                        label="Repetir email"
                        value={formValue.email2}
                        variant="outlined" 
                        margin="normal" 
                        onChange={handleChange}
                        required
                    />
                    <br/>
                    <Button type="submit" variant="text" className="btn_effect" disabled={(formValue.email!== formValue.email2 || formValue.email==='' || formValue.email2==='' )}>Completar compra</Button>
            </form>
            <Typography variant="button" component={"div"}>Total: ${totalPrice}</Typography>
            </div>
          </Grid>

      </Grid>
    </Grid>)}
    </Grid>
    </div>
  );
};
export default Cart;
