import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { Typography, Grid, Button, Box, Container } from "@mui/material";
import { homepageStyle } from "../Styling/Homepagestyle";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <>
      {/* jadi biar dia ga white space kasih padding 0 dan margin 0 dulu */}
      <Container maxWidth="100%" style={{ padding: 0, margin: 0 }}>
        <Header />
        <Box component="section" sx={homepageStyle.container}>
          <Grid container spacing={2}>
            {/* Deskripsi singkat tentang toko anjing dan layanan yang disediakan */}
            <Grid item xs={12} className="description">
              <Typography variant="h2" sx={homepageStyle.heading}>
                Selamat Datang di DogShop
              </Typography>
              <Typography variant="body1" sx={homepageStyle.description}>
                DogShop adalah tujuan terbaik untuk Anda dan anjing kesayangan
                Anda. Temukan layanan berkualitas tinggi seperti grooming
                profesional, ruang bermain yang aman, dan makanan anjing
                premium. Mari mulai petualangan baru bersama anjing Anda hari
                ini!
              </Typography>
            </Grid>

            {/* Tautan-tautan cepat ke halaman-halaman penting lainnya di situs web */}
            <Grid item xs={12} className="quick-links">
              <Button
                component={Link}
                to="/about"
                variant="contained"
                sx={homepageStyle.button}
              >
                Tentang Kami
              </Button>
              <Button
                component={Link}
                to="/services"
                variant="contained"
                sx={homepageStyle.button}
              >
                Layanan
              </Button>
              <Button
                component={Link}
                to="/products"
                variant="contained"
                sx={homepageStyle.button}
              >
                Produk
              </Button>
              <Button
                component={Link}
                to="/blog"
                variant="contained"
                sx={homepageStyle.button}
              >
                Blog
              </Button>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={homepageStyle.button}
              >
                Kontak
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Homepage;
