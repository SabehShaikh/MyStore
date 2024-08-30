import React, { useContext, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import ReactStars from "react-stars";
import "./index.css";
import CartContext from "../context/cart";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function MediaCard({ product, viewDetails }) {
  const { cart, setCart } = useContext(CartContext);

  const [open, setOpen] = useState(false);

  const addToCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex((v) => v.id === product.id);

    // if item is already in cart then increase qty
    if (index !== -1) {
      cartData[index].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cartData));
      setCart(cartData);
      setOpen(true);
      return;
    }
    cartData.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
    setOpen(true);
  };

  return (
    <Card
      sx={{
        width: 250,
        height: 450,
        marginTop: 4,
        paddingBottom: 5,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <img
          style={{ width: "100%", height: 240, objectFit: "contain" }}
          src={product.image}
          alt={product.title}
        />
      </div>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Product added to cart!
        </MuiAlert>
      </Snackbar>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Rs {product.price}
        </Typography>
        <Typography gutterBottom variant="span" component="div">
          {product.title.length > 28
            ? `${product.title.slice(0, 28)}...`
            : product.title}
        </Typography>
        <ReactStars
          edit={false}
          value={product.rating.rate}
          count={5}
          size={18}
          color2={"#ffd700"}
        />
      </CardContent>
      <CardActions className="card-btns">
        <Button onClick={addToCart} size="small">
          ADD TO CART
        </Button>
        <Button
          onClick={() => viewDetails(product.id)}
          className="view-detail-btn"
          size="small"
        >
          VIEW DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}
