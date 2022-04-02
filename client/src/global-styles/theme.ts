import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#67ecd0",
      dark: "#000000",
      contrastText: "#F9F9F9",
      light: "#C7C7C7",
    },
  },
  typography: {
    fontFamily: ["Raleway", "sans-serif", "Arial"].join(","),
    h2: {
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "29px",
    },
    body1: {
      fontSize: "15px",
      lineHeight: "20.1px",
      color: "rgba(0, 0, 0, 0.56)",
    },
  },
  spacing: 4,
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          MuiFilledInput: {
            styleOverrides: {
              root: {
                // borderBottom: "none",
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                  borderBottom: "none",
                },
                "&:before": {
                  // borderBottom: "none",
                },
                // "&:hover:not('.Mui-disabled'):before": {
                //   borderBottom: "none !important",
                //   backgroundColor: "#000",
                //   "&:not('.Mui-disabled')": {
                //     "&:before": {
                //       backgroundColor: "#000",
                //       borderBottom: "none",
                //     },
                //   },
                // },
              },
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {},
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          // backgroundColor: "#f9f9f9",
          border: "1.5px solid #C7C7C7",
          borderRadius: "2px",
          backgroundColor: "#f9f9f9",
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "&:hover": {
            backgroundColor: "#f9f9f9",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        },
        input: {
          fontSize: "1.2rem",
          "&:focus": {
            backgroundColor: "#f9f9f9",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: "0px",
        },
      },
    },
  },
});

export default theme;

