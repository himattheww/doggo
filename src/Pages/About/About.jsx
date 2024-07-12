import React, { useEffect } from "react";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { aboutPageStyle } from "./Aboutstyle";
import { FaEye, FaBullseye, FaUsers } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutUs from "../../Assets/About Us Page/Aboutus4.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Box id="about" sx={{ ...aboutPageStyle.container }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} data-aos="fade-up">
          <Grid item xs={12} md={6}>
            <img
              src={aboutUs}
              alt="gambar"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={aboutPageStyle.paper}>
              <Typography variant="h4" sx={aboutPageStyle.heading}>
                About Us
              </Typography>
              <Typography variant="body1" sx={aboutPageStyle.text} gutterBottom>
                DogShop didirikan pada tahun 20XX oleh [nama pendiri], dimulai
                sebagai toko kecil di sudut kota dan berkembang menjadi
                destinasi utama bagi pecinta anjing di seluruh [lokasi]. Kami
                berkomitmen untuk menyediakan layanan terbaik bagi anjing dan
                pemiliknya.
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <FaEye style={aboutPageStyle.icon} />
                <Typography variant="body1" sx={aboutPageStyle.text} gutterBottom>
                  Menjadi pusat perawatan anjing terkemuka, memberikan pengalaman
                  positif bagi setiap pelanggan.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <FaBullseye style={aboutPageStyle.icon} />
                <Typography variant="body1" sx={aboutPageStyle.text} gutterBottom>
                  Menyediakan layanan berkualitas tinggi, produk terbaik, dan
                  pengalaman ramah bagi semua pelanggan.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
                <FaUsers style={aboutPageStyle.icon} />
                <Typography variant="body1" sx={aboutPageStyle.text} gutterBottom>
                  Ahli yang berdedikasi dalam perawatan dan kesehatan anjing,
                  dengan pengalaman dan cinta mendalam terhadap hewan peliharaan.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
