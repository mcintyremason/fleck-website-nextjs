import { Grid, SwipeableDrawer } from "@mui/material";
import ListMenu from "../../components/ListMenu";
import { ListMenuLink } from "../../models/ListMenu";
import Hamburger from "../Hamburger";
import styles from "./menuDrawer.module.css";

type MenuDrawerProps = {
  links: Array<ListMenuLink>;
  open: boolean;
  hamburgerOnClick: () => void;
  onClose: () => void;
  onOpen: () => void;
};

export const MenuDrawer: React.FC<MenuDrawerProps> = (
  props: MenuDrawerProps,
) => {
  const { links, open, hamburgerOnClick, onClose, onOpen } = props;

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      className={styles["menu-drawer"]}
      onClose={onClose}
      onOpen={onOpen}
      keepMounted={true}
    >
      <Grid
        container
        justifyContent={"flex-end"}
        className={styles["hamburger-nav-container"]}
      >
        <Hamburger active={open} onClick={hamburgerOnClick} />
      </Grid>
      <Grid
        className={styles["list-menu-container"]}
        container
        justifyContent="center"
        size={{ xs: 12 }}
      >
        <ListMenu links={links} justifyText={"flex-start"} />
      </Grid>
    </SwipeableDrawer>
  );
};
