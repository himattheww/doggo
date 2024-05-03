import React, { useState } from "react";
import Header from "../Components/Header";
import goldenretriever from "../Assets/GoldenRetriever.jpg";
import CloseIcon from "@mui/icons-material/Close";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import { blogPageStyle } from "../Styling/Blogstyle";
import dogtips from "../Assets/Blog Pages/dog-healthytips.jpeg";
import dogfunnymoments from "../Assets/Blog Pages/dog-withowner.webp";
import dogproductreview from "../Assets/Blog Pages/Dog-productreview.jpg";
import Footer from "../Components/Footer";

const Blog = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const handleVideoClick = (videoURL) => {
    setFullscreenVideo(videoURL);
  };

  const handleCloseVideo = () => {
    setFullscreenVideo(null);
  };

  const videos = [
    {
      title: "Healthy Dog Tips",
      description: "Berikut cuplikan menjaga kesehatan anjing",
      image: dogtips,
      video: "https://www.youtube.com/embed/FA4R9TBWOIU?si=ECGQ_KRqZKoxg1_D",
    },
    {
      title: "Funny Video",
      description: "Berikut cuplikan moment lucu anjing dan owner",
      image: dogfunnymoments,
      video: "https://www.youtube.com/embed/NGFKjWYKKvY?si=PwFPmhJibw24Ep6V",
    },
    {
      title: "Product Review",
      description: "Berikut cuplikan review produk anjing",
      image: dogproductreview,
      video: "https://www.youtube.com/embed/FGR3HL4WRVY?si=jTieKTtvMEIprxCp",
    },
  ];

  return (
    <>
      <Header />
      <Box
        sx={{
          ...blogPageStyle.container,
          backgroundImage: `url(${goldenretriever})`,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Blog & Artikel
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {videos.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={blogPageStyle.card}>
                  <CardActionArea onClick={() => handleVideoClick(item.video)}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {fullscreenVideo && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fff",
              }}
              onClick={handleCloseVideo}
            >
              <CloseIcon />
            </IconButton>
            <iframe
              width="1300"
              height="600"
              src={fullscreenVideo}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Blog;
