import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../utils/theme";
import ImageWithOverlay from "../ImageWithOverlay";
import styles from "./serviceSection.module.css";

type ServiceSectionProps = {
  serviceImageText: string;
  serviceImageButtonText: string;
  serviceDescription: string;
  imageSrc: string;
  imageHeight?: number;
  imageWidth?: number;
  imageLeft?: boolean;
};

export const ServiceSection: React.FC<ServiceSectionProps> = ({
  serviceImageText,
  serviceImageButtonText,
  serviceDescription,
  imageSrc,
  imageHeight,
  imageWidth,
  imageLeft = true,
}: ServiceSectionProps) => {
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className={styles["service-section"]}>
      {matchesSmallScreen ? (
        <Grid
          container
          justifyContent={"center"}
          className={styles["service-content-container"]}
        >
          <ImageWithOverlay
            size={{ xs: 12, md: 8 }}
            imageSrc={imageSrc}
            imageHeight={imageHeight}
            imageWidth={imageWidth}
            text={serviceImageText}
            buttonProps={{ text: serviceImageButtonText }}
          />
          <Grid container size={{ xs: 12, md: 4 }} justifyContent={"center"}>
            <Grid container direction="column" justifyContent="center">
              <Typography>{serviceDescription}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <>
          {imageLeft ? (
            <Grid
              container
              justifyContent={"center"}
              className={styles["service-content-container"]}
            >
              <ImageWithOverlay
                size={{ xs: 12, md: 8 }}
                imageSrc={imageSrc}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                text={serviceImageText}
                buttonProps={{ text: serviceImageButtonText }}
              />
              <Grid
                container
                size={{ xs: 12, md: 4 }}
                justifyContent={"center"}
              >
                <Grid container direction="column" justifyContent="center">
                  <Typography>{serviceDescription}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              justifyContent={"center"}
              className={styles["service-content-container"]}
            >
              <Grid
                container
                size={{ xs: 12, md: 4 }}
                justifyContent={"center"}
              >
                <Grid container direction="column" justifyContent="center">
                  <Typography>{serviceDescription}</Typography>
                </Grid>
              </Grid>
              <ImageWithOverlay
                size={{ xs: 12, md: 8 }}
                imageSrc={imageSrc}
                imageHeight={imageHeight}
                imageWidth={imageWidth}
                text={serviceImageText}
                buttonProps={{ text: serviceImageButtonText }}
              />
            </Grid>
          )}
        </>
      )}
    </Box>
  );
};
