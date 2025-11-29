import { Grid, ThemeProvider, Typography } from "@mui/material";

import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import Layout from "../components/Layout";
import ServiceSection from "../components/ServiceSection";
import styles from "../public/css/homePage.module.css";
import { theme } from "../utils/theme";

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout title="nextjs-typescript-template">
      <Grid
        className="app height-full"
        itemScope
        itemType="http://schema.org/LocalBusiness"
      >
        <HeaderBar />
        <Grid className={styles["services"]} id="services">
          <Grid
            className={styles["services-header"]}
            container
            justifyContent={"center"}
          >
            <Grid size={{ xs: 12 }}>
              <Typography variant="h1" className={styles["service-title"]}>
                Roofing &amp; Exterior Services
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography className={styles["service-title-subtext"]}>
                Family-owned &amp; trusted in Easton and the Greater Lehigh
                Valley for 35+ years. <strong>Quality</strong> workmanship at a
                fair price — from small <strong>repairs</strong> to full{" "}
                <strong>replacements</strong>.
              </Typography>
            </Grid>
          </Grid>

          <Grid>
            <ServiceSection
              serviceImageText="Roof Replacement"
              serviceDescription="Durable, manufacturer-certified installs for asphalt shingles, metal, and flat roofing systems."
              serviceImageButtonText="Learn More 🔍"
              imageSrc="/img/assets/landing-page/roof-replacement/roof-replacement-2.JPG"
              imageHeight={420}
              imageWidth={764}
            />
            <ServiceSection
              imageLeft={false}
              serviceImageText="Roof Repair"
              serviceDescription="Leak diagnostics, storm damage, missing shingles, flashing, & chimney repairs - we keep you dry."
              serviceImageButtonText="Learn More 🔍"
              imageSrc="/img/assets/landing-page/roof-repair/roof-repair.jpg"
              imageHeight={420}
              imageWidth={764}
            />
            <ServiceSection
              serviceImageText="Siding"
              serviceDescription="Vinyl, fiber cement, and composite siding - full installations and expert repairs to protect and beautify your home."
              serviceImageButtonText="Learn More 🔍"
              imageSrc="/img/assets/landing-page/siding/siding-2.jpg"
              imageHeight={420}
              imageWidth={764}
            />
            <ServiceSection
              imageLeft={false}
              serviceImageText="Gutters"
              serviceDescription="Seamless aluminum gutters, downspouts, and leaf guards - plus leak fixes, pitch corrections, and repairs to keep water flowing away from your home."
              serviceImageButtonText="Learn More 🔍"
              imageSrc="/img/assets/landing-page/gutters/gutters-1.jpg"
              imageHeight={420}
              imageWidth={764}
            />
            <ServiceSection
              serviceImageText="Soffit & Fascia"
              serviceDescription="Ventilated soffit and protective fascia board solutions - with repair services to maintain proper airflow and roof edge protection."
              serviceImageButtonText="Learn More 🔍"
              imageSrc="/img/assets/landing-page/soffit-fascia/soffit-fascia-1.jpg"
              imageHeight={420}
              imageWidth={764}
            />
            <Grid>
              <Grid>✔️ Family-Owned &amp; Operated</Grid>
              <Grid>✔️ 35+ Years Serving the Lehigh Valley</Grid>
              <Grid>✔️ Licensed • Insured • Local</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
