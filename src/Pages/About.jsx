import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { aboutPageStyle } from "../Styling/Aboutstyle";
import goldenretriever from "../Assets/GoldenRetriever.jpg";
import aboutus from "../Assets/About Us Page/Aboutus1.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          ...aboutPageStyle.container,
          backgroundImage: `url(${goldenretriever})`,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Kotak Utama */}
            <Grid item xs={12}>
              <Paper style={{ padding: 20, backgroundColor: "#ffffff80" }}>
                <Typography variant="h4" sx={{ color: "#333333" }}>
                  About us
                </Typography>
              </Paper>
              <hr style={{ borderTop: "2px solid #ffffff", width: "100%" }} />
            </Grid>

            {/* Kotak Satu */}
            <Grid item xs={12}>
              <Paper style={{ padding: 20, backgroundColor: "#ffffff80" }}>
                <Grid container spacing={2}>
                  {/* Bagian Pertama */}
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{ color: "#333333" }}>
                      DogShop didirikan pada tahun 20XX oleh [nama pendiri].
                      Dimulai sebagai sebuah toko kecil di sudut kota,
                      DogShop berkembang menjadi destinasi utama bagi para
                      pecinta anjing di seluruh [lokasi]. Seiring berjalannya
                      waktu, kami terus berkembang dan berkomitmen untuk
                      menyediakan layanan terbaik bagi anjing dan pemiliknya.
                    </Typography>
                  </Grid>

                  {/* Bagian Kedua */}
                  <Grid item xs={6}>
                    <img
                      src={aboutus}
                      alt="gambar"
                      style={{ maxWidth: "100%" }}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
