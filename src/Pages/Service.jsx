import React from "react";
import Header from "../Components/Header";
import { Typography, Container, Grid, Paper, Box } from "@mui/material";
import { servicePageStyle } from "../Styling/Servicestyle";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../Components/Footer";
import { content } from "../Importing/Content";

const Service = () => {
  // Konten untuk setiap halaman carousel
  const carouselContent = content.service_carouselContent;

  return (
    <>
      <Header />
      <Box sx={servicePageStyle.container}>
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
