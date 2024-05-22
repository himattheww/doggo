import React, { useState } from "react";
import Header from "../../Components/Header";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { productPageStyle } from "../../Styling/Productstyle";
import Footer from "../../Components/Footer";
import Catalog from "./Catalog";
import { content } from "../../Importing/Content";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openCatalog, setOpenCatalog] = useState(false);

  const carouselProductContent = content.product_carouselContent;

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


export default Product;
