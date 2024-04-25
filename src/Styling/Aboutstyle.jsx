import goldenretriever from "../Assets/GoldenRetriever.jpg";

const header = {
  backgroundColor: "#5d4037",
  padding: "20px 0", // Sesuaikan dengan kebutuhan Anda
};

const container = {
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#333333", // Ganti dengan warna putih
  backgroundImage: `url(${goldenretriever})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const heading = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700,
  fontSize: "2.5rem",
  color: "#333333",
  marginBottom: "20px",
};

const description = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "1.1rem",
  color: "#555555",
  marginBottom: "20px",
};

export const aboutPageStyle = {
  header,
  container,
  heading,
  description,
};
