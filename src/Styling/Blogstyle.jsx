import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
  backgroundImage: `url(${goldenretriever})`,
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#5d4037",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px",
  minHeight: "100vh", // Biar layar penuh
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};



const card = {
  maxWidth: 345,
};

export const blogPageStyle = {
  container,
  card,
};
