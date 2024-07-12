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
  marginBottom: "20px", // Memberikan jarak antara heading dan deskripsi
  "@media (max-width: 600px)": {
    fontSize: "1.5rem",
  },
};

const icon = {
  marginRight: "10px",
  color: "#333333",
  fontSize: "1.5rem",
};

const text = {
  color: "#333333",
  marginBottom: "10px",
};



export const aboutPageStyle = {
  container,
  paper,
  heading,
  icon,
  text,
};
