import React, { useState } from "react";
import Header from "../Components/Header";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { contactPageStyle } from "../Styling/Contactstyle";
import goldenretriever from "../Assets/GoldenRetriever.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {
      name: false,
      email: false,
      message: false,
    };

    if (!formData.name.trim()) {
      errors.name = true;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = true;
    }

    if (!formData.message.trim()) {
      errors.message = true;
    }

    setFormErrors(errors);

    // Jika ada kesalahan, jangan kirim
    if (Object.values(errors).some((error) => error)) {
      return;
    }

    // Kirim pesan ke WhatsApp jika semua valid
    const whatsappMessage = `Nama: ${formData.name}%0AEmail: ${formData.email}%0APesan: ${formData.message}`;
    const whatsappUrl = `https://wa.me/628123456789?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    // Reset form setelah pengiriman
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setFormErrors({
      name: false,
      email: false,
      message: false,
    });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          ...contactPageStyle.container,
          backgroundImage: `url(${goldenretriever})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
          padding: "50px 0",
        }}
      >
        <Container maxWidth="lg">
          <Paper
            sx={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Contact us
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={contactPageStyle.subHeading}
                  gutterBottom
                >
                  Informasi Kontak:
                </Typography>
                <Typography variant="body1">
                  Alamat: Jalan Contoh No. 123, Kota Contoh, Indonesia
                </Typography>
                <Typography variant="body1">
                  Nomor Telepon: +62 123-456-789
                </Typography>
                <Typography variant="body1">Email: info@contoh.com</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  sx={contactPageStyle.subHeading}
                  gutterBottom
                >
                  Formulir Kontak:
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Nama"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={formErrors.name}
                        helperText={formErrors.name && "Nama harus diisi"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={formErrors.email}
                        helperText={
                          formErrors.email && "Email harus valid (contoh: example@example.com)"
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Pesan"
                        variant="outlined"
                        multiline
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        error={formErrors.message}
                        helperText={formErrors.message && "Pesan harus diisi"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Kirim
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
