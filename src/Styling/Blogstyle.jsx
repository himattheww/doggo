import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
  paddingTop: "50px",
  paddingBottom: "50px",
  backgroundImage: `url(${goldenretriever})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
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

export const blogPageStyle = {
  container,
  heading,
  card,
};
