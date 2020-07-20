import { createMuiTheme } from "@material-ui/core/styles";

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0081CF",
    },
    secondary: {
      main: "#00C9A7",
    },
    white: "#fff",

    whiteSeconary: "#cbd5e0",

    black: "#1a202c",

    blackSecondary: "#718096",
  },
});

// const innerTheme = createMuiTheme({
//   palette: {
//     secondary: {
//       main: green[500],
//     },
//   },
// });
