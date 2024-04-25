import goldenretriever from "../Assets/GoldenRetriever.jpg";

const container = {
    paddingTop: "50px",
    paddingBottom: "50px",
    backgroundImage: `url(${goldenretriever})`, // Ganti dengan path sesuai dengan lokasi file gambar Anda
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
