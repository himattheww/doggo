import goldenretriever from "../../Assets/GoldenRetriever.jpg";

const container = {
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#5d4037",
  backgroundImage: `url(${goldenretriever})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#ffffff",
};

const heading = {
  fontWeight: 700,
  fontSize: "3rem",
  marginBottom: "20px",
  "@media (max-width: 600px)": {
    fontSize: "2rem",
  },
};

const description = {
  fontWeight: 400,
  fontSize: "1.2rem",
  marginBottom: "20px",
  "@media (max-width: 600px)": {
    fontSize: "1rem",
  },
};

const slogan = {
  fontWeight: 300,
  fontSize: "1.5rem",
  marginBottom: "40px",
  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
  },
};

const ctaButton = {
  fontWeight: 500,
  fontSize: "1.2rem",
  color: "white",
  padding: "10px 20px",
  backgroundColor: "#6d4c41",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#4e342e",
  },
  "@media (max-width: 600px)": {
    fontSize: "1rem",
    padding: "8px 16px",
  },
};

const section = {
  padding: "50px",
  // minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

export const homepageStyle = {
  container,
  heading,
  description,
  slogan,
  ctaButton,
  section,
};
