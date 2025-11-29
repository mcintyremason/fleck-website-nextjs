import { Box, Grid, Typography } from "@mui/material";
import { GridSize, ResponsiveStyleValue } from "@mui/system";
import styles from "./imageWithOverlay.module.css";

type ImageWithOverlayProps = {
  size: ResponsiveStyleValue<GridSize>;
  imageSrc: string;
  imageHeight: number;
  imageWidth: number;
  text?: string;
  buttonProps?: {
    text: string;
    onClick?: () => void;
  };
};

export const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  size,
  imageSrc,
  imageHeight,
  imageWidth,
  text,
  buttonProps,
}: ImageWithOverlayProps) => {
  return (
    <Grid
      size={size}
      className={styles["image-with-overlay-container"]}
      maxHeight={imageHeight}
      maxWidth={imageWidth}
    >
      <Grid
        className={styles["media"]}
        maxHeight={imageHeight}
        maxWidth={imageWidth}
      >
        <Box
          component="img"
          alt="Roof Replacement"
          src={imageSrc}
          height={imageHeight}
          width={imageWidth}
        />

        <Grid className={styles["overlay"]}>
          <Typography variant="h3">{text}</Typography>
          <button className={styles["overlay-button"]}>
            {buttonProps?.text}
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
};
