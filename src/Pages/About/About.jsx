import React from "react";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { aboutPageStyle } from "./Aboutstyle";
import aboutUs from '../../Assets/About Us Page/Aboutus4.jpg'

const About = () => {
  return (
    <Box id="about" sx={{ ...aboutPageStyle.container }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={aboutUs}
              alt="gambar"
              style={{ maxWidth: "100%", borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={aboutPageStyle.paper}>
              <Typography variant="h4" sx={aboutPageStyle.heading}>
                About Us
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.text}>
                DogShop didirikan pada tahun 20XX oleh [nama pendiri], dimulai sebagai toko kecil di sudut kota dan berkembang menjadi destinasi utama bagi pecinta anjing di seluruh [lokasi]. Kami berkomitmen untuk menyediakan layanan terbaik bagi anjing dan pemiliknya.
              </Typography>
              <Typography variant="h6" sx={aboutPageStyle.subheading}>
                Visi Kami:
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.text}>
                Menjadi pusat perawatan anjing terkemuka, memberikan pengalaman positif bagi setiap pelanggan.
              </Typography>
              <Typography variant="h6" sx={aboutPageStyle.subheading}>
                Misi Kami:
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.text}>
                Menyediakan layanan berkualitas tinggi, produk terbaik, dan pengalaman ramah bagi semua pelanggan.
              </Typography>
              <Typography variant="h6" sx={aboutPageStyle.subheading}>
                Tim Kami:
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.text}>
                Ahli yang berdedikasi dalam perawatan dan kesehatan anjing, dengan pengalaman dan cinta mendalam terhadap hewan peliharaan.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
