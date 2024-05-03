import React, { useState } from "react";
import Header from "../Components/Header";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Modal,
  IconButton,
} from "@mui/material";
import { productPageStyle } from "../Styling/Productstyle";
import { AiFillCloseCircle } from "react-icons/ai";

import dogfood from "../Assets/Dog Products/Dog Food/dog-food.webp";
import dogfood1 from "../Assets/Dog Products/Dog Food/dogfood_jinx.jpg";
import dogfood2 from "../Assets/Dog Products/Dog Food/dogfood_nomnom.jpg";
import dogfood3 from "../Assets/Dog Products/Dog Food/dogfood_ollie.jpg";
import dogfood4 from "../Assets/Dog Products/Dog Food/dogfood_purebalance.jpg";
import dogfood5 from "../Assets/Dog Products/Dog Food/dogfood_redbarn.jpg";
import dogfood6 from "../Assets/Dog Products/Dog Food/dogfood_farmer.jpg";
import dogtoys from "../Assets/Dog Products/Dog Toys/dog-toys.jpg";
import dogtoys1 from "../Assets/Dog Products/Dog Toys/dog-leash.jpg";
import dogtoys2 from "../Assets/Dog Products/Dog Toys/dog-collar.jpg";
import dogtoys3 from "../Assets/Dog Products/Dog Toys/dog-grooming-kit.jpg";
import dogtoys4 from "../Assets/Dog Products/Dog Toys/dog-potty.jpg";
import dogtoys5 from "../Assets/Dog Products/Dog Toys/dog-crate.jpg";
import dogtoys6 from "../Assets/Dog Products/Dog Toys/dog-toy.webp";
import Footer from "../Components/Footer";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openCatalog, setOpenCatalog] = useState(false);

  const carouselProductContent = [
    {
      name: "Dog Food",
      productName: [
        "Jinx Dogfood",
        "Nomnom Dogfood",
        "Ollie Dogfood",
        "Pure Balance Dogfood",
        "Red Barn Dogfood",
        "Farmer Dogfood",
      ],
      description:
        "Kami menyediakan berbagai jenis makanan anjing yang berkualitas",
      productDescription: ["1", "2", "3", "4", "5", "6"],
      image: dogfood,
      images: [dogfood1, dogfood2, dogfood3, dogfood4, dogfood5, dogfood6],
    },
    {
      name: "Dog Accessories, Toys, and Equipment",
      productName: [
        "Dog Leash",
        "Dog Collar",
        "Dog Grooming Kit",
        "Dog Potty",
        "Dog Cage",
        "Dog Toy",
      ],
      description:
        "Kami menjual asesoris, mainan dan peralatan untuk anjing anda",
      productDescription: ["1", "2", "3", "4", "5", "6"],
      image: dogtoys,
      images: [dogtoys1, dogtoys2, dogtoys3, dogtoys4, dogtoys5, dogtoys6],
    },
  ];

  const handleOpenCatalog = (product) => {
    setSelectedProduct(product);
    setOpenCatalog(true);
    console.log("ini isi product", product);
  };

  const handleCloseCatalog = () => {
    setOpenCatalog(false);
  };

  return (
    <>
      <Header />
      <Box sx={productPageStyle.container}>
        <Typography variant="h3" gutterBottom>
          Catalog
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {carouselProductContent.map((content, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={productPageStyle.card}
                  onClick={() => handleOpenCatalog(content)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={content.image}
                      alt={content.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {content.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {content.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {openCatalog && (
        <Catalog
          selectedProduct={selectedProduct}
          onClose={handleCloseCatalog}
        />
      )}
      <Footer />
    </>
  );
};

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
export default Product;
