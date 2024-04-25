import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { headerStyle } from "../Styling/Headerstyle";
import logo2 from "../Assets/Logo/logo2.png";

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={headerStyle.header}>
        <Toolbar sx={headerStyle.toolbar}>
          <img src={logo2} alt="Logo" height="40" sx={headerStyle.logo} />
          <Typography
            variant="h6"
            component="div"
            sx={headerStyle.typhographyx}
          >
            DogShop
          </Typography>
          <Link to="/">
            <Button sx={headerStyle.buttonn}>Beranda</Button>
          </Link>
          <Link to="/about">
            <Button sx={headerStyle.buttonn}>Tentang Kami</Button>
          </Link>
          <Link to="/services">
            <Button sx={headerStyle.buttonn}>Layanan</Button>
          </Link>
          <Link to="/products">
            <Button sx={headerStyle.buttonn}>Produk</Button>
          </Link>
          <Link to="/blog">
            <Button sx={headerStyle.buttonn}>Blog</Button>
          </Link>
          <Link to="/contact">
            <Button sx={headerStyle.buttonn}>Kontak</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
