import React from "react";
import Header from "../Components/Header";
import { Container, Typography, Grid, TextField, Button } from "@mui/material";
import { contactPageStyle } from "../Styling/Contactstyle";

const Contact = () => {
    return (
        <>
            <Header />
            <Container maxWidth="md" sx={contactPageStyle.container}>
                <Typography variant="h3" sx={contactPageStyle.heading} gutterBottom>
                    Hubungi Kami
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={contactPageStyle.subHeading} gutterBottom>
                            Informasi Kontak:
                        </Typography>
                        <Typography variant="body1">
                            Alamat: Jalan Contoh No. 123, Kota Contoh, Indonesia
                        </Typography>
                        <Typography variant="body1">
                            Nomor Telepon: +62 123-456-789
                        </Typography>
                        <Typography variant="body1">
                            Email: info@contoh.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={contactPageStyle.subHeading} gutterBottom>
                            Formulir Kontak:
                        </Typography>
                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Nama"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Pesan"
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="primary">
                                        Kirim
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Contact;
