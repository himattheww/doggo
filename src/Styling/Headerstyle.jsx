const header = {
  fontFamily: "Roboto, sans-serif",
  //   backgroundColor: "black",
  backgroundColor: "#5d4037", // Warna cokelat hangat
};

const typhographyx = {
  flexgrow: 1,
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700, // Ketebalan font yang lebih kuat
  fontSize: "1.5rem", // Ukuran font yang lebih besar untuk menonjolkan merek
  color: "#ffffff", // Teks berwarna putih agar kontras dengan latar belakang
  marginLeft: "10px", // Jarak antara logo dan teks
};

const buttonn = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  color: "white",
  "&:hover": {
    // backgroundColor: "#1565c0",
    backgroundColor: "#6d4c41",
  },
};


export const headerStyle = {
  header,
  typhographyx,
  buttonn,
};
