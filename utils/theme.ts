import { createTheme, responsiveFontSizes } from "@mui/material";

export const theme = responsiveFontSizes(
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 425,
        md: 769,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      primary: {
        main: "#ff0000",
      },
      secondary: {
        main: "#ffd700",
      },
    },
  }),
);

theme.typography.h1 = {
  fontSize: "1.2em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: "2em",
  },
};

theme.typography.h2 = {
  fontSize: ".9em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5em",
  },
};

theme.typography.h3 = {
  fontSize: ".7em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.17em",
  },
};

theme.typography.h4 = {
  fontSize: ".6em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: "1em",
  },
};

theme.typography.h5 = {
  fontSize: ".5em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: ".83em",
  },
};

theme.typography.h6 = {
  fontSize: ".4em",
  margin: 0,
  [theme.breakpoints.up("lg")]: {
    fontSize: ".67em",
  },
};
