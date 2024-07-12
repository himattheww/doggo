import React from "react";
import { Typography, Grid, Button, Box, Container } from "@mui/material";
import { homepageStyle } from "./Homepagestyle";

const Homepage = () => {
  return (
    <Container maxWidth="100%" style={{ padding: 0, margin: 0 }}>
      <Box component="section" id="home" sx={homepageStyle.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="description">
            <Typography variant="h2" sx={homepageStyle.heading}>
              <span style={{ fontSize: "2.5rem" }}>Selamat Datang di </span>
              <br />
              <span style={{ fontSize: "2rem" }}>DogShop</span>
            </Typography>
            <Typography variant="body1" sx={homepageStyle.description}>
              DogShop adalah tujuan terbaik untuk Anda dan anjing kesayangan
              Anda. Temukan layanan berkualitas tinggi seperti grooming
              profesional, ruang bermain yang aman, dan makanan anjing premium.
              Mari mulai petualangan baru bersama anjing Anda hari ini!
            </Typography>
            <Typography variant="h6" sx={homepageStyle.slogan}>
              Your Dog's Best Friend
            </Typography>
            <Button
              variant="contained"
              sx={homepageStyle.ctaButton}
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Pesan Layanan Anda Sekarang
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Homepage;
