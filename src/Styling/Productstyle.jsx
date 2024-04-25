import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "rgba(255, 255, 255, 0.8)", // Background color with opacity
  padding: "80px",
  backgroundImage: `url(${goldenretriever})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const heading = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700,
  fontSize: "2.5rem",
  color: "#000000",
  marginBottom: "40px",
};

const card = {
  maxWidth: 345,
};

export const productPageStyle = {
  container,
  heading,
  card,
};