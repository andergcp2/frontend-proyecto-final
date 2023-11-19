import createTheme from "@mui/material/styles/createTheme";
import { Roboto } from "next/font/google";
import img from "/background.png"

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export enum ThemePalette {
  DARKER_BLUE = "#053B50",
  DARK_BLUE = "#176B87",
  BLUE = "#64CCC5",
  WHITE = "#FFFFFF",
  ERROR = "#FF9494",
  FONT_GLOBAL = "'Roboto', sans-serif",
}

export const theme = createTheme({
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         backgroundImage: `url(/background.png)`,
  //       }
  //     }
  //   }
  // },
  palette: {
    mode: "light",
    background: {
      default: ThemePalette.WHITE,
      paper: ThemePalette.WHITE,
    },
    primary: {
      main: ThemePalette.DARKER_BLUE,
    },
    secondary: {
      main: ThemePalette.WHITE,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontSize: "36px",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "36px",
      },
    },
    h2: {
      fontSize: "30px",
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
      fontSize: "16px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
});
