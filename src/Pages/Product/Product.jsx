import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import dogfood1 from "../../Assets/Dog Products/Dog Food/dogfood_jinx.jpg";
import dogfood2 from "../../Assets/Dog Products/Dog Food/dogfood_nomnom.jpg";
import dogfood3 from "../../Assets/Dog Products/Dog Food/dogfood_ollie.jpg";
import dogfood4 from "../../Assets/Dog Products/Dog Food/dogfood_purebalance.jpg";
import dogfood5 from "../../Assets/Dog Products/Dog Food/dogfood_redbarn.jpg";
import dogfood6 from "../../Assets/Dog Products/Dog Food/dogfood_farmer.jpg";
import dogtoys1 from "../../Assets/Dog Products/Dog Toys/dog-leash.jpg";
import dogtoys2 from "../../Assets/Dog Products/Dog Toys/dog-collar.jpg";
import dogtoys3 from "../../Assets/Dog Products/Dog Toys/dog-grooming-kit.jpg";
import dogtoys4 from "../../Assets/Dog Products/Dog Toys/dog-potty.jpg";
import dogtoys5 from "../../Assets/Dog Products/Dog Toys/dog-crate.jpg";
import dogtoys6 from "../../Assets/Dog Products/Dog Toys/dog-toy.webp";

const products = {
  dogFood: [
    { id: 1, imageUrl: dogfood1, name: "Jinx Dogfood" },
    { id: 2, imageUrl: dogfood2, name: "Nomnom Dogfood" },
    { id: 3, imageUrl: dogfood3, name: "Ollie Dogfood" },
    { id: 4, imageUrl: dogfood4, name: "Pure Balance Dogfood" },
    { id: 5, imageUrl: dogfood5, name: "Red Barn Dogfood" },
    { id: 6, imageUrl: dogfood6, name: "Farmer Dogfood" },
  ],
  dogToys: [
    { id: 1, imageUrl: dogtoys1, name: "Dog Leash" },
    { id: 2, imageUrl: dogtoys2, name: "Dog Collar" },
    { id: 3, imageUrl: dogtoys3, name: "Dog Grooming Kit" },
    { id: 4, imageUrl: dogtoys4, name: "Dog Potty" },
    { id: 5, imageUrl: dogtoys5, name: "Dog Cage" },
    { id: 6, imageUrl: dogtoys6, name: "Dog Toy" },
  ],
};

const styles = {
  container: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  sectionTitle: {
    marginBottom: '20px',
    color: '#333'
  },
  card: {
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: '180px',
  },
  cardContent: {
    textAlign: 'center',
  },
  productName: {
    fontWeight: 'bold',
    color: '#555',
  },
};

const ProductSection = ({ title, items }) => (
  <div id="products" style={styles.container}>
    <Typography variant="h4" component="h2" style={styles.sectionTitle}>
      {title}
    </Typography>
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}>
          <Card style={styles.card}>
            <CardMedia
              component="img"
              alt={item.name}
              style={styles.cardMedia}
              image={item.imageUrl}
            />
            <CardContent style={styles.cardContent}>
              <Typography variant="body2" style={styles.productName}>
                {item.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
);

function Product() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Product
      </Typography>
      <ProductSection title="Dog Food" items={products.dogFood} />
      <ProductSection title="Dog Toys" items={products.dogToys} />
    </Container>
  );
}

export default Product;

