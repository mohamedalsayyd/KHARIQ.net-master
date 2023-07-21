import { createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const theme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    text: {
      primary: "#f8f8f8",
    },
    backgroundColor: {
      default: "rgb(32, 32, 36)",
    },
  },
  typography: {
    fontFamily: [
      '"Noto Sans Arabic"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowY: "scroll",
          backgroundColor: "rgb(0, 0, 0)",
          minHeight: "100vh",
        },
      },
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export { theme, cacheRtl };
