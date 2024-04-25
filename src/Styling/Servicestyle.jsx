import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#FFFFFF", // Warna latar belakang
  padding: "50px 20px",
  backgroundImage: `url(${goldenretriever})`, // Gambar latar belakang
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh", // Biar layar penuh
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const heading = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700,
  fontSize: "3rem",
  color: "#000000",
  marginBottom: "20px",
};

const description = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "1.2rem",
  color: "#000000",
  marginBottom: "40px",
};

const paper = {
  padding: "30px",
};

export const servicePageStyle = {
  container,
  heading,
  description,
  paper,
};
