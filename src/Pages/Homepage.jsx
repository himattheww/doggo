import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, Box } from "@mui/material";
import { homepageStyle } from "../Styling/Homepagestyle";

const Homepage = () => {
  return (
    <>
      <Header />
      <Box component="section" sx={homepageStyle.container}>
        <Grid container spacing={2}>
          {/* Deskripsi singkat tentang toko anjing dan layanan yang disediakan */}
          <Grid item xs={12} className="description">
            <Typography variant="h2" sx={homepageStyle.heading}>
              Selamat Datang di DogShop
            </Typography>
            <Typography variant="body1" sx={homepageStyle.description}>
              DogShop adalah tempat yang sempurna untuk Anda dan anjing kesayangan Anda. Kami menyediakan berbagai layanan berkualitas tinggi untuk memastikan kesehatan dan kebahagiaan anjing Anda.
            </Typography>
          </Grid>

          {/* Tautan-tautan cepat ke halaman-halaman penting lainnya di situs web */}
          <Grid item xs={12} className="quick-links">
            <Button component={Link} to="/about" variant="contained" sx={homepageStyle.button}>
              Tentang Kami
            </Button>
            <Button component={Link} to="/services" variant="contained" sx={homepageStyle.button}>
              Layanan
            </Button>
            <Button component={Link} to="/products" variant="contained" sx={homepageStyle.button}>
              Produk
            </Button>
            <Button component={Link} to="/blog" variant="contained" sx={homepageStyle.button}>
              Blog
            </Button>
            <Button component={Link} to="/contact" variant="contained" sx={homepageStyle.button}>
              Kontak
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Homepage;
