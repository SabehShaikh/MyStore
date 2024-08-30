import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import {Link } from "react-router-dom";

export default function AlignItemsList({ cartData, deleteCart, updateQty }) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {cartData.map((v, i) => {
        return (
          <div key={i}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar
                style={{
                  padding: 5,
                }}
              >
                <img
                  style={{
                    width: 70,
                    height: 70,
                    objectFit: "contain",
                  }}
                  src={v.image}
                  alt=""
                />
              </ListItemAvatar>
              <ListItemText
                primary={v.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      Rs {v.price * v.qty}
                    </Typography>
                    <Typography style={{ display: "flex" }}>
                      {"QTY: "}
                      <FaRegMinusSquare
                        style={{ cursor: "pointer" }}
                        onClick={() => v.qty > 1 && updateQty("-", v.id)}
                        size={22}
                      />
                      <span style={{ marginLeft: 5, marginRight: 5 }}>
                        {v.qty}
                      </span>
                      <FaRegPlusSquare
                        style={{ cursor: "pointer" }}
                        onClick={() => updateQty("+", v.id)}
                        size={22}
                      />

                      <MdOutlineDeleteOutline
                        onClick={() => deleteCart(v.id)}
                        style={{ marginLeft: 10, cursor: "pointer" }}
                        size={22}
                        color="red"
                      />
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        );
      })}

      {cartData.length ? (
        <div>
            <Link to="/checkout">
          <Button style={{ width: "100%", marginTop: 10 }} size="small">
            CHECKOUT
          </Button>
            </Link>
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: 10 }}>
          <Alert severity="warning">
            Your cart is Empty!</Alert>
        </div>
      )}
    </List>
  );
}
