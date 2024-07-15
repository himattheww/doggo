import React from "react";
import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { headerStyle } from "./Headerstyle";
import logo2 from "../../Assets/Logo/logo2.png";
import './Header.css'; // Import file CSS di sini

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="static" className="header" sx={headerStyle.header}>
        <Toolbar sx={headerStyle.toolbar}>
          <img src={logo2} alt="Logo" height="40" className="logo" />
          <Typography
            variant="h6"
            component="div"
            className="typhographyx"
          >
            DogShop
          </Typography>
          <div className="menu-buttons">
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
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
