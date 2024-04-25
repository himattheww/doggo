import React from "react";
import Header from "../Components/Header";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { productPageStyle } from "../Styling/Productstyle";

const Product = () => {
  return (
    <>
      <Header />
      <Box maxWidth="lg" sx={productPageStyle.container}>
        <Typography variant="h3" sx={productPageStyle.heading} gutterBottom>
          Katalog Produk
        </Typography>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={productPageStyle.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Product;

const products = [
  {
    name: "Dog Food",
    description: "Premium quality dog food for a healthy diet.",
    image: "path/to/dog-food-image.jpg",
  },
  {
    name: "Dog Toys",
    description: "Interactive and durable toys to keep your dog entertained.",
    image: "path/to/dog-toys-image.jpg",
  },
  // Add more products as needed
];
