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
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparan
    minHeight: "100vh", // Mengisi seluruh tinggi viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px", // Menambahkan padding untuk memperkecil jarak
  };

  const closeButtonStyle = {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
  };
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={catalogStyle}>
        <IconButton aria-label="close" onClick={onClose} sx={closeButtonStyle}>
          <AiFillCloseCircle size={32} />
        </IconButton>
        <Grid container spacing={2} justifyContent="center">
          {selectedProduct &&
            selectedProduct.images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {" "}
                  {/* Transparan */}
                  <CardMedia
                    component="img"
                    height="230"
                    image={image}
                    alt={selectedProduct.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
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
