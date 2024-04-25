import React from "react";
import Header from "../Components/Header";
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { blogPageStyle } from "../Styling/Blogstyle";

const Blog = () => {
    return (
        <>
            <Header />
            <Container maxWidth="lg" sx={blogPageStyle.container}>
                <Typography variant="h3" sx={blogPageStyle.heading} gutterBottom>
                    Blog & Artikel
                </Typography>
                <Grid container spacing={3}>
                    {/* Artikel tentang kesehatan dan perawatan anjing */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={blogPageStyle.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/path/to/health-article-image.jpg"
                                    alt="Artikel Kesehatan Anjing"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Artikel Kesehatan Anjing
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tips perawatan bulu, pencegahan penyakit, dan panduan pemilihan makanan untuk anjing.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Cerita-cerita menghibur tentang anjing */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={blogPageStyle.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/path/to/funny-dog-stories-image.jpg"
                                    alt="Cerita Menghibur Anjing"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Cerita Menghibur Anjing
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Pengalaman lucu dan menghibur dari pemilik anjing serta kejadian-kejadian unik yang melibatkan anjing.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* Tinjauan produk dan rekomendasi */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={blogPageStyle.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="/path/to/product-review-image.jpg"
                                    alt="Tinjauan Produk Anjing"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Tinjauan Produk Anjing
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Tinjauan produk makanan, mainan, dan perlengkapan anjing serta rekomendasi untuk merawat anjing dengan lebih baik.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Blog;
