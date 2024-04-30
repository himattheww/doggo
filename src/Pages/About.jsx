import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { aboutPageStyle } from "../Styling/Aboutstyle";
import goldenretriever from "../Assets/GoldenRetriever.jpg";
import aboutus1 from "../Assets/About Us Page/Aboutus1.jpg";
import aboutus4 from "../Assets/About Us Page/Aboutus4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  // Konten untuk setiap halaman carousel
  const carouselContent = [
    {
      title: "About us",
      text: "DogShop didirikan pada tahun 20XX oleh [nama pendiri]. Dimulai sebagai sebuah toko kecil di sudut kota, DogShop berkembang menjadi destinasi utama bagi para pecinta anjing di seluruh [lokasi]. Seiring berjalannya waktu, kami terus berkembang dan berkomitmen untuk menyediakan layanan terbaik bagi anjing dan pemiliknya.Visi kami adalah menjadi pusat perawatan anjing terkemuka yang memberikan pengalaman positif bagi setiap pelanggan. Kami berkomitmen untuk memastikan kesehatan, kebahagiaan, dan kesejahteraan anjing-anjing di komunitas kami. Misi kami adalah menyediakan layanan berkualitas tinggi, produk terbaik, dan pengalaman yang ramah bagi semua pelanggan kami.",
      image: aboutus4,
    },
    {
      title: "Our Team",
      text: "Tim Dogshop adalah kumpulan ahli yang bersatu dengan satu tujuan: memberikan yang terbaik untuk anjing Anda.Dengan pengalaman yang luas dan cinta mendalam terhadap hewan peliharaan, setiap anggota tim kami adalah individu yang berdedikasi dan berpengetahuan dalam dunia perawatan dan kesehatan anjing. Mulai dari pemilik hingga petugas, kami semua adalah pecinta hewan yang berkomitmen untuk memberikan layanan terbaik kepada anjing dan pemiliknya.Dengan keahlian yang terlatih, kami siap memberikan perawatan, pelatihan, dan perhatian khusus yang dibutuhkan oleh setiap anjing yang datang ke DogShop",
      image: aboutus1,
    },
  ];

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
    </>
  );
};

export default About;
