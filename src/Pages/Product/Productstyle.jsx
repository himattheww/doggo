import goldenretriever from "../../Assets/GoldenRetriever.jpg";

const container = {
  backgroundImage: `url(${goldenretriever})`,
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#5d4037",
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

const card = {
  cursor: "pointer",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
};

export const productPageStyle = {
  container,
  card,
};
