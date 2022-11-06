import { createTheme } from "@mui/material/styles";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

const formTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Nunito Sans',
      fontWeight: '400',
      fontSize: '16px',
      color: '#7C8DB0'
    },
    h2: {
      paddingTop: '55px',
      paddingBottom: '15px',
      fontWeight: '700',
      fontSize: '24px',
      color: '#605DEC'
    },
    h3: {
      paddingTop: '35px',
      fontWeight: '600',
      fontSize: '18px',
      color: '#6E7491'
    }
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#7C8DB0',
          fontSize: '18px',
          width: "300px",
          height: "48px"
        },
        sizeSmall: {
          width: "200px"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          paddingTop: "25px",
          paddingBottom: "25px"
        }
      }
    }
  }
});

export default formTheme;