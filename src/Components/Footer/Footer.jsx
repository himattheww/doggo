import React from "react";
import { Box, Typography, Container, Grid, IconButton, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { footerStyle } from "./FooterStyle";

const Footer = () => {
  const socialMediaIcons = [
    { icon: faFacebook, link: "https://www.facebook.com/" },
    { icon: faInstagram, link: "https://www.instagram.com/himattheww" },
    { icon: faTwitter, link: "https://twitter.com/" },
  ];


  const handleSocialMediaClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Box component="footer" sx={footerStyle.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1">
              Jalan Matthew, Matthew city, Indonesia
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faPhoneAlt} /> +62 813-3393-0670
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Operational Hours
            </Typography>
            <Typography variant="body1">
              <FontAwesomeIcon icon={faClock} /> Mon - Fri: 9AM - 5PM
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={footerStyle.divider} />
        <Typography variant="body2" align="center" gutterBottom>
          Connect with us on social media:
        </Typography>
        <Box sx={footerStyle.socialMediaContainer}>
          {socialMediaIcons.map((item, index) => (
            <IconButton key={index} onClick={() => handleSocialMediaClick(item.link)} sx={footerStyle.iconButton}>
              <FontAwesomeIcon icon={item.icon} size="lg" />
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
