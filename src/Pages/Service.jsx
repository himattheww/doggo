import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { servicePageStyle } from "../Styling/Servicestyle";
import goldenretriever from "../Assets/GoldenRetriever.jpg";
import dogplaying from "../Assets/Services/DogPlaying/dogplay4.jpg";
import doggrooming from "../Assets/Services/DogGrooming/doggrooming3.jpg";
import dogtraining from "../Assets/Services/DogTraining/dogtraining3.jpg";
import doghealth from "../Assets/Services/DogHealth/doghealth.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../Components/Footer";

const Service = () => {
  // Konten untuk setiap halaman carousel
  const carouselContent = [
    {
      title: "Layanan Bermain",
      text: "Kami menyediakan area bermain yang aman dan menyenangkan bagi anjing Anda. Dengan fasilitas yang lengkap dan pengawasan yang ketat, anjing Anda akan menikmati waktu bermain yang berkualitas.",
      image: dogplaying,
    },
    {
      title: "Layanan Grooming",
      text: " Kami menawarkan layanan grooming profesional untuk menjaga penampilan dan kesehatan bulu anjing Anda. Dari mandi, potong kuku, hingga pemotongan rambut, kami memberikan perawatan yang terbaik.",
      image: doggrooming,
    },
    {
      title: "Layanan Pelatihan",
      text: " Paket pelatihan khusus yang disesuaikan dengan kebutuhan dan tingkat keterampilan anjing Anda. Dari pelatihan dasar hingga pelatihan lanjutan, kami membantu anjing Anda menjadi lebih patuh dan terampil.",
      image: dogtraining,
    },
    {
      title: " Layanan Perawatan Kesehatan  ",
      text: "Kami memberikan perawatan kesehatan yang komprehensif untuk menjaga kesehatan dan kesejahteraan anjing Anda. Layanan termasuk pemeriksaan kesehatan rutin, vaksinasi, dan perawatan medis lainnya.",
      image: doghealth,
    },
  ];

  return (
    <>
      <Header />
      <Box
        sx={{
          ...servicePageStyle.container,
          backgroundImage: `url(${goldenretriever})`,
        }}
      >
        <Container maxWidth="lg">
          <Carousel
            showStatus={false}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 15,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaChevronLeft size={24} color="#ffffff" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 15,
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaChevronRight size={24} color="#ffffff" />
                </button>
              )
            }
          >
            {carouselContent.map((content, index) => (
              <div key={index}>
                <Grid container spacing={2}>
                  {/* Kotak Utama */}
                  <Grid item xs={12}>
                    <Paper
                      style={{
                        padding: 20,
                        backgroundColor: "#ffffff80",
                      }}
                    >
                      <Typography variant="h4" sx={{ color: "#333333" }}>
                        {content.title}
                      </Typography>
                    </Paper>
                    <hr
                      style={{
                        borderTop: "2px solid #ffffff",
                        width: "100%",
                      }}
                    />
                  </Grid>

                  {/* Kotak Satu */}
                  <Grid item xs={12}>
                    <Paper
                      style={{
                        padding: 20,
                        backgroundColor: "#ffffff80",
                      }}
                    >
                      <Grid container spacing={2}>
                        {/* Bagian Pertama */}
                        <Grid item xs={6}>
                          <Typography variant="body1" sx={{ color: "#333333" }}>
                            {content.text}
                          </Typography>
                        </Grid>

                        {/* Bagian Kedua */}
                        <Grid item xs={6}>
                          <img
                            src={content.image}
                            alt="gambar"
                            style={{ maxWidth: "100%" }}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Carousel>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Service;
