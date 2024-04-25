import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper } from "@mui/material";
import { servicePageStyle } from "../Styling/Servicestyle"; // Styling yang sesuai dengan y

const Service = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={servicePageStyle.container}>
        <Typography variant="h3" sx={servicePageStyle.heading} gutterBottom>
          Layanan Kami
        </Typography>
        <Grid container spacing={3}>
          {/* Layanan Bermain */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={servicePageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Layanan Bermain
              </Typography>
              <Typography variant="body1" sx={servicePageStyle.description}>
                Kami menyediakan area bermain yang aman dan menyenangkan bagi anjing Anda. Dengan fasilitas yang lengkap dan pengawasan yang ketat, anjing Anda akan menikmati waktu bermain yang berkualitas.
              </Typography>
            </Paper>
          </Grid>
          {/* Layanan Grooming */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={servicePageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Layanan Grooming
              </Typography>
              <Typography variant="body1" sx={servicePageStyle.description}>
                Kami menawarkan layanan grooming profesional untuk menjaga penampilan dan kesehatan bulu anjing Anda. Dari mandi, potong kuku, hingga pemotongan rambut, kami memberikan perawatan yang terbaik.
              </Typography>
            </Paper>
          </Grid>
          {/* Layanan Pelatihan */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={servicePageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Layanan Pelatihan
              </Typography>
              <Typography variant="body1" sx={servicePageStyle.description}>
                Paket pelatihan khusus yang disesuaikan dengan kebutuhan dan tingkat keterampilan anjing Anda. Dari pelatihan dasar hingga pelatihan lanjutan, kami membantu anjing Anda menjadi lebih patuh dan terampil.
              </Typography>
            </Paper>
          </Grid>
          {/* Layanan Perawatan Kesehatan */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={servicePageStyle.paper}>
              <Typography variant="h4" gutterBottom>
                Layanan Perawatan Kesehatan
              </Typography>
              <Typography variant="body1" sx={servicePageStyle.description}>
                Kami memberikan perawatan kesehatan yang komprehensif untuk menjaga kesehatan dan kesejahteraan anjing Anda. Layanan termasuk pemeriksaan kesehatan rutin, vaksinasi, dan perawatan medis lainnya.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Service;
