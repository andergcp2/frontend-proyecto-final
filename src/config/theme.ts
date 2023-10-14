import createTheme from "@mui/material/styles/createTheme";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export enum ThemePalette {
  BG = "#1d1d1d",
  BLACK = "#121212",
  GREEN = "#6ef96e",
  WHITE = "#fff",
  ERROR = "#FF9494",
  FONT_GLOBAL = "'Poppins', 'Roboto', sans-serif",
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.BLACK,
      paper: "#1d1d1d",
    },
    primary: {
      main: ThemePalette.GREEN,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
    h1: {
      fontSize: "48px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "36px",
      },
    },
    h2: {
      fontSize: "36px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },
    h3: {
      fontSize: "24px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    body1: {
      fontSize: "18px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "grey.900",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "capitalize",
          fontWeight: 600,
          boxShadow: "none",
        },
      },
    },
  },
});
