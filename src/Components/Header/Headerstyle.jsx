const header = {
  position: "fixed",
  width: "100%",
  zIndex: 1000,
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#5d4037",
};

const logo = {
  justifyContent: "flex-start",
  marginRight: "10px",
  height: "40px",
};

const typhographyx = {
  justifyContent: "flex-start",
  flexGrow: 1,
  fontFamily: "Roboto, sans-serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#ffffff",
  marginLeft: "10px",
};

const buttonn = {
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  color: "white",
  "&:hover": {
    backgroundColor: "#6d4c41",
  },
  marginLeft: "10px",
};

const toolbar = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  
};

export const headerStyle = {
  header,
  typhographyx,
  buttonn,
  logo,
  toolbar,
};
