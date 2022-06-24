import * as React from "react";
import Item from "./Item.js";
import { Grid, Typography } from "@mui/material";
import "../css/style.css"
//Componente itemList. arma la visual del listado de home y productos
const ItemList = ({ data, title }) => {
  return (
    <div className="contenedor">
      <Typography
        variant="h2"
        style={{ textTransform: "uppercase" }}
        key="title"
      >
        {title}
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        spacing={4}
      >
        {data.map(({ title, price, img, id, stock, text }) => {
          return (
            <Grid item md={4} key={id}>
              <Item
                title={title}
                price={price}
                img={img}
                stock={stock}
                text={text}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default ItemList;
