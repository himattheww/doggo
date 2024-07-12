import React, { useState } from "react";
import goldenretriever from "../../Assets/GoldenRetriever.jpg";
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
import { blogPageStyle } from "./Blogstyle";
import { content } from "../../Importing/Content";

const Blog = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const handleVideoClick = (videoURL) => {
    setFullscreenVideo(videoURL);
  };

  const handleCloseVideo = () => {
    setFullscreenVideo(null);
  };

  const videos = content.blog_videos;

  return (
    <>
      <Box id="blog"
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
    </>
  );
};

export default Blog;
