import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#5d4037",
    backgroundImage: `url(${goldenretriever})`,
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
const heading = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "3rem",
    color: "#ffffff",
    marginBottom: "20px",
  }
const  description = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: "1.2rem",
    color: "#ffffff",
    marginBottom: "40px",
  }  


const button = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    color: "white",
    margin: "5px",
    padding: "10px 20px",
    backgroundColor: "#6d4c41",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#4e342e",
    },
  }

export const homepageStyle = {
  container,
  heading,
  description,
  button,
};
