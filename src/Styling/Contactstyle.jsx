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

const heading = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#000000",
    marginBottom: "40px",
};

const subHeading = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontSize: "1.5rem",
    color: "#000000",
    marginBottom: "20px",
};

export const contactPageStyle = {
    container,
    heading,
    subHeading,
};
