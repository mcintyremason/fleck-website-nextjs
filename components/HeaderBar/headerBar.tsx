import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { AppBar, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuDrawer from "../../components/MenuDrawer";
import { ListMenuLink } from "../../models/ListMenu";
import Hamburger from "../Hamburger";
import styles from "./index.module.css";

export const HeaderBar: React.FC = (_) => {
  const DEAULT_MENU_LINKS: Array<ListMenuLink> = [
    {
      text: "Home",
      href: "/",
      icon: <HomeOutlinedIcon color="primary" />,
      isExpanded: false,
    },
    {
      text: "Roof Replacement",
      href: "/roof-replacement",
      icon: <AccountBalanceWalletOutlinedIcon color="primary" />,
      isExpanded: false,
    },
  ];

  const [hambugerActive, setHambugerActive] = useState(false);
  const [menuLinks, setMenuLinks] = useState<Array<ListMenuLink>>([
    ...DEAULT_MENU_LINKS,
  ]);

  const hamburgerOnClick = () => {
    setHambugerActive((hambugerActive) => !hambugerActive);
  };

  const resetMenuLinks = () => {
    const updatedListMenuLinks = menuLinks.map((_link) => {
      _link.isExpanded = false;
      return _link;
    });

    setMenuLinks(updatedListMenuLinks);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      className={styles["header-bar-container"]}
    >
      <Grid container justifyContent={"flex-end"}>
        <Grid size={{ xs: 3, md: 3 }} className={styles["menu-title"]}>
          <Grid container direction="column" justifyContent="center">
            <Link href="/" className={styles["logo-link"]}>
              <img
                className={styles["logo"]}
                src="/img/logo/logo-2.png"
                alt="Fleck Roofing & Construction Logo"
              />
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 7, md: 6 }}
          direction="column"
          justifyContent="center"
          className={styles["header-title-container"]}
        >
          <Grid container justifyContent={"center"}>
            <Typography variant="h1" className={styles["header-title"]}>
              Fleck Roofing & Construction
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            className={styles["header-subtitle"]}
          >
            <Typography variant="h2">
              We're the Guys that Keep You Dry
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 2, md: 3 }}
          className={styles["hamburger-nav-container"]}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Hamburger active={hambugerActive} onClick={hamburgerOnClick} />
        </Grid>
        <Grid>
          <MenuDrawer
            links={menuLinks}
            open={hambugerActive}
            hamburgerOnClick={hamburgerOnClick}
            onClose={() => {
              hamburgerOnClick();
              resetMenuLinks();
            }}
            onOpen={hamburgerOnClick}
          />
        </Grid>
      </Grid>
    </AppBar>
  );
};
