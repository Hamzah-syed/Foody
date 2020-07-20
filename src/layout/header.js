import React, { useState } from "react";

//css
import "../assets/css/main.css";
//Mui
import { Grid, Box, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
//logo
import Logo from "../assets/images/LogoLight.png";
//animation
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

const Header = () => {
  const { ref: navanum } = useWebAnimations({
    ...fadeIn,
  });
  const { ref: navHumanum } = useWebAnimations({
    ...fadeIn,
  });
  // const { keyframes: humNavkey, timing: navTiming } = fadeInDown;
  // const { ref: navanum } = useWebAnimations({
  //   keyframes: humNavkey,
  //   timing: {
  //     ...navTiming,

  //   },
  // });

  const [Humdisplay, setHumdisplay] = useState("none");
  const useStyle = makeStyles((theme) => ({
    primaryColor: {
      color: [theme.palette.primary.main],
    },
    NavParent: {
      width: "100%",
      height: "70px",
      position: "relative",
      zIndex: "200",

      [theme.breakpoints.up("md")]: {
        height: "auto",
      },
    },
    Nav: {
      position: "absolute",
      zIndex: 100,
    },
    Logo: {
      width: "90px",
      height: "50px",
    },
    btnSpacing: {
      margin: "0 20px",
    },
    LinksParent: {
      [theme.breakpoints.down("sm")]: {
        zIndex: "10",
        position: "absolute",

        left: 0,
        width: "100%",
        background: [theme.palette.white],
        top: 70,
        display: Humdisplay,
        transition: ".5s",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
        backgroundOpacity: 0.5,
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
    LinksStyling: {
      textDecoration: "none",
      margin: "0 10px",
      color: [theme.palette.white],
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        display: "block",
        color: [theme.palette.blackSecondary],
        margin: "0 0px",
        padding: "10px 0",
        "&:hover": {
          background: [theme.palette.whiteSeconary],
        },
      },
    },
    humIcon: {
      fontSize: "30px",
      paddingRight: "8px",
      cursor: "pointer",
    },
  }));
  const classes = useStyle();
  return (
    <div style={{ position: "relative" }}>
      <Grid container className={`${classes.NavParent}`} ref={navanum}>
        <Grid
          item
          container
          md={12}
          justify="space-between"
          alignItems="center"
          className={classes.Nav}
        >
          <Box p={1}>
            <img src={Logo} className={classes.Logo} alt="logo" />
          </Box>
          <Box>
            <Hidden mdUp>
              {Humdisplay === "none" ? (
                <MenuIcon
                  onClick={() => setHumdisplay("flex")}
                  className={classes.humIcon}
                />
              ) : (
                <ClearIcon
                  onClick={() => setHumdisplay("none")}
                  className={classes.humIcon}
                />
              )}
            </Hidden>
            <Box px={2} className={classes.LinksParent} ref={navHumanum}>
              <a className={classes.LinksStyling} href="#">
                Home
              </a>
              <a href="#servicesSec" className={classes.LinksStyling}>
                Services
              </a>
              <a href="#contactSec" className={classes.LinksStyling}>
                Contact
              </a>
              <Hidden smDown>
                <Button
                  variant="contained"
                  color="primary"
                  className={`primaryButton ${classes.btnSpacing}`}
                >
                  Order Now
                </Button>
              </Hidden>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item container md={6}></Grid> */}
        {/* </Box> */}
      </Grid>
    </div>
  );
};

export default Header;
