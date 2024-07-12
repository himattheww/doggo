import React from "react";
import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { headerStyle } from "./Headerstyle";
import logo2 from "../../Assets/Logo/logo2.png";

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

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
          <Button sx={headerStyle.buttonn} onClick={() => scrollToSection('home')}>
            Beranda
          </Button>
          <Button sx={headerStyle.buttonn} onClick={() => scrollToSection('about')}>
            Tentang Kami
          </Button>
          <Button sx={headerStyle.buttonn} onClick={() => scrollToSection('services')}>
            Layanan
          </Button>
          <Button sx={headerStyle.buttonn} onClick={() => scrollToSection('products')}>
            Produk
          </Button>
          <Button sx={headerStyle.buttonn} onClick={() => scrollToSection('blog')}>
            Blog
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
