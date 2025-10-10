import {
  Grid,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";

import Content from "../components/Content";
import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import Layout from "../components/Layout";

const theme = responsiveFontSizes(
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
        main: "#e43d30",
      },
      secondary: {
        main: "#ffd040",
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

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout title="nextjs-typescript-template">
      <Grid
        className="app height-full"
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <HeaderBar />
        <Content />
        <Footer />
      </Grid>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
