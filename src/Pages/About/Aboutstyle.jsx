const container = {
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#5d4037",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const paper = {
  padding: "20px",
  backgroundColor: "#ffffff80",
  textAlign: "left", // Mengatur teks agar rata kiri
};

const heading = {
  fontWeight: 700,
  fontSize: "2rem",
  color: "#333333",
  "@media (max-width: 600px)": {
    fontSize: "1.5rem",
  },
};

const subheading = {
  fontWeight: 600,
  fontSize: "1.5rem",
  color: "#333333",
  marginTop: "20px",
  "@media (max-width: 600px)": {
    fontSize: "1.2rem",
  },
};

const text = {
  color: "#333333",
  marginBottom: "10px",
};

export const aboutPageStyle = {
  container,
  paper,
  heading,
  subheading,
  text,
};
