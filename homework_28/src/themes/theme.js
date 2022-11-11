import { createTheme } from "@mui/material/styles";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      fontSize: '16px',
      color: '#7C8DB0'
    },
    h6: {
      fontWeight: '700',
      fontSize: '24px',
      color: "#6E7491"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FAFAFA',
          background: "#605DEC",
          borderRadius: "4px",
          textTransform: "none"
        },
        sizeMedium: {
          width: "95px",
          height: "48px"
        },
        sizeLarge: {
          width: "100%",
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          alignItems: "center"
        },
        container: {
          padding: "35px",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: "Nunito Sans",
          fontSize: "16px",
          fontWeight: "400",
          color: '#7C8DB0',
          textDecoration: "none",
          '&:hover': {
            color: "#605DEC"
          }
        },
        button: {
          width: "50px",
          height: "50px",
          borderRadius: "50%"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          display: "inline-block",
          width: "527px",
          height: "48px",
          paddingBottom: "40px"
        }
      }
    },
  }
});

export default theme;