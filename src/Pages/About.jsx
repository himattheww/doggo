import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper } from "@mui/material";
import { aboutPageStyle } from "../Styling/Aboutstyle";

const About = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={(aboutPageStyle.container)} disableGutters>
        <Typography variant="h3" sx={aboutPageStyle.heading} gutterBottom>
          Tentang Kami (About Us)
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={aboutPageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Sejarah Toko Anjing dan Visi Misi
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.description}>
                DogShop didirikan pada tahun 20XX oleh [nama pendiri]. Dimulai sebagai sebuah toko kecil di sudut kota, DogShop berkembang menjadi destinasi utama bagi para pecinta anjing di seluruh [lokasi]. Seiring berjalannya waktu, kami terus berkembang dan berkomitmen untuk menyediakan layanan terbaik bagi anjing dan pemiliknya.
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.description}>
                Visi kami adalah menjadi pusat perawatan anjing terkemuka yang memberikan pengalaman positif bagi setiap pelanggan. Kami berkomitmen untuk memastikan kesehatan, kebahagiaan, dan kesejahteraan anjing-anjing di komunitas kami. Misi kami adalah menyediakan layanan berkualitas tinggi, produk terbaik, dan pengalaman yang ramah bagi semua pelanggan kami.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={aboutPageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Tim di Balik Toko
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.description}>
                Tim DogShop terdiri dari individu yang berdedikasi dan berpengalaman dalam perawatan dan kebutuhan anjing. Mulai dari pemilik hingga petugas, setiap anggota tim kami adalah pecinta hewan yang berkomitmen untuk memberikan layanan terbaik kepada anjing dan pemiliknya. Kami memiliki tim yang terlatih dan berpengetahuan luas dalam hal perawatan, pelatihan, dan kesehatan anjing.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={aboutPageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Testimoni Pelanggan
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.description}>
                "DogShop adalah tempat yang luar biasa untuk anjing saya. Layanan mereka sangat profesional dan perawatan yang mereka berikan sangat luar biasa. Saya sangat puas dengan produk-produk berkualitas yang mereka tawarkan. Anjing saya selalu senang setiap kali kami mengunjungi DogShop!" - [Nama Pelanggan]
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
