import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";

const Catalog = ({ selectedProduct, onClose }) => {
  const catalogStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Transparan lebih gelap
    minHeight: "100vh", // Mengisi seluruh tinggi viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px", // Menambahkan padding untuk memperkecil jarak
    position: "relative",
  };

  const closeButtonStyle = {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
  };

  const cardStyle = {
    height: "100%", // Pastikan card mengisi seluruh tinggi grid item
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparan lebih terang
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const cardMediaStyle = {
    height: "230px",
    objectFit: "cover",
  };

  const cardContentStyle = {
    flexGrow: 1,
  };

  return (
    <Modal 
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={catalogStyle}>
        <IconButton aria-label="close" onClick={onClose} sx={closeButtonStyle}>
          <AiFillCloseCircle size={32} />
        </IconButton>
        <Grid container spacing={3} justifyContent="center">
          {selectedProduct &&
            selectedProduct.images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={cardStyle}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={selectedProduct.name}
                    sx={cardMediaStyle}
                  />
                  <CardContent sx={cardContentStyle}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ color: "#000" }} // Warna teks lebih gelap
                    >
                      {selectedProduct.productName[index]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedProduct.productDescription[index]}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default Catalog;
