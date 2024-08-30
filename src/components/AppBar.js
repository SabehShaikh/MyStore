import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSearchParams, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import CartContext from "../context/cart";
import TemporaryDrawer from "./Drawer";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
];

function DrawerAppBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const { cart, setCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            onClick={() => {
              navigate(`/?category=${item.toLowerCase()}`);
            }}
            key={item}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  const deleteCart = (id) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex((v) => v.id === id);
    /*
splice is used to remove items from an array.
Here, splice(index, 1) removes the item at the index
 found in the previous step.
  The 1 means only one item will be removed.
*/
    cartData.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  };

  const updateQty = (type, id) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartData.findIndex((v) => v.id === id);

    if (type === "+") {
      cartData.splice(index, 1, {
        ...cartData[index],
        qty: cartData[index].qty + 1,
      });
    } else {
      cartData.splice(index, 1, {
        ...cartData[index],
        qty: cartData[index].qty - 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    setCart(cartData);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: "#8bc34a" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            SMIT STORE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => {
                  navigate(`/?category=${item.toLowerCase()}`);
                }}
                key={item}
                sx={{ color: "#fff" }}
              >
                {item}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              onClick={() => setOpen(true)}
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Box>

          <TemporaryDrawer
            updateQty={updateQty}
            deleteCart={deleteCart}
            cartData={cart}
            open={open}
            setOpen={setOpen}
          />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, mt: 8 }}>
        {/* Main content can go here */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
