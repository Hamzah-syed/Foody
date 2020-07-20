import React from "react";
//mui
import { Grid, Box, Typography, Button, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//image
import LandingMobile from "../../assets/images/Landingmobile.png";
// import MobileLayout from "../../assets/images/mobileLayout.png";
//animation
import useWebAnimations, {
  fadeInRight,
  fadeInDown,
} from "@wellyshen/use-web-animations";

const useStyle = makeStyles((theme) => ({
  primaryColor: {
    color: [theme.palette.primary.main],
  },
  Landing: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  tagline: {
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: [theme.palette.black],
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
  },
  paragraph: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "20px",
    },
  },
  orderButton: {
    backgroundImage:
      "linearGradient(to right top, #00c9a7, #00bbbe, #00aad0, #0097d6, #0081cf)",
  },

  landingMorphParent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: -10,
  },
  landingMorph: {
    width: "100%",
    height: "100%",
  },
  responsiveDive: {
    height: "500px",
    width: "100%",
    backgroundImage:
      "linear-gradient(to right top,#00c9a7,#00bbbe,#00aad0,#0097d6,#0081cf)",
    zIndex: "-1",
  },

  landingmobileParent: {
    width: "250px",
    height: "500px",

    position: "absolute",
    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "300px",
    },
  },
  landingmobile: {
    width: "250px",
    height: "500px",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "300px",
    },
  },
  laningMobt: {
    padding: "10px 15px",

    position: "absolute",
    background: [theme.palette.secondary.main],
    zIndex: "-1",
    color: "white",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    backgroundImage:
      "linear-gradient(to right top,#00c9a7,#00bbbe,#00aad0,#0097d6,#0081cf)",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px",
      fontSize: "10px",
    },
  },
  laningtextmob: {
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  laningMobt1: {
    transform: "translate(-80px, -150px)" /* Standard syntax */,
    backgroundImage:
      "linear-gradient(to right top,#00c9a7,#00bbbe,#00aad0,#0097d6,#0081cf)",
    [theme.breakpoints.down("sm")]: {
      transform: "translate(-60px, -70px)" /* Standard syntax */,
    },
  },
  laningMobt2: {
    transform: "translate(100px, 50px)" /* Standard syntax */,

    backgroundImage:
      "linear-gradient(to right top,#0081cf,#0097d6,#00aad0,#00bbbe,#00c9a7)",
    [theme.breakpoints.down("sm")]: {
      transform: "translate(80px, 50px)" /* Standard syntax */,
    },
  },
  // laningMobtDiv: {},
  //   mobileLayout: {
  //     width: "240px",
  //     height: "490px",
  //     position: "absolute",
  //   },
  //   landingmobileParent2: {
  //     width: "250px",
  //     height: "500px",
  //     transform:
  //       " rotate(-30deg) skew(30deg ) translate(30px, -20px)" /* Standard syntax */,
  //     position: "absolute",
  //     opacity: 0.4,
  //     zIndex: "-1",
  //   },
  //   landingmobileParent3: {
  //     width: "250px",
  //     height: "500px",
  //     transform:
  //       " rotate(-30deg) skew(30deg ) translate(60px, -40px)" /* Standard syntax */,
  //     position: "absolute",
  //     opacity: 0.6,
  //     zIndex: "-1",
  //   },
  //   landingmobileParent4: {
  //     width: "250px",
  //     height: "500px",
  //     transform:
  //       " rotate(-30deg) skew(30deg ) translate(90px, -60px)" /* Standard syntax */,
  //     position: "absolute",
  //     opacity: 0.8,
  //     zIndex: "-1",
  //   },
  //   landingmobileParent5: {
  //     width: "250px",
  //     height: "500px",
  //     transform:
  //       " rotate(-30deg) skew(30deg ) translate(120px, -80px)" /* Standard syntax */,
  //     position: "absolute",
  //     opacity: 1,
  //     zIndex: "-1",
  //   },
}));
const LaningSection = () => {
  const { keyframes: mainTitle, timing: timagemainTitle } = fadeInDown;
  const { ref: mainTitleanum } = useWebAnimations({
    keyframes: mainTitle,
    timing: {
      ...timagemainTitle,
      iterations: 1,
      easing: "ease",
    },
  });
  const { keyframes: mainTitledesKey, timing: mainTitledesTime } = fadeInDown;
  const { ref: mainTitledes } = useWebAnimations({
    keyframes: mainTitledesKey,
    timing: {
      ...mainTitledesTime,
      iterations: 1,
      delay: "500",
      easing: "ease",
    },
  });
  const { keyframes: mainBtnkey, timing: mainBtnTime } = fadeInDown;
  const { ref: mainBtn } = useWebAnimations({
    keyframes: mainBtnkey,
    timing: {
      ...mainBtnTime,
      iterations: 1,
      delay: "1000",
      easing: "ease",
    },
  });
  //Phoner animation
  const { keyframes: phoneAnumkey, timing: phoneAnumTime } = fadeInRight;
  const { ref: phoneAnum } = useWebAnimations({
    keyframes: phoneAnumkey,
    timing: {
      ...phoneAnumTime,
      iterations: 1,
      delay: "1000",
      easing: "ease",
    },
  });
  //Phone text animation

  // const { keyframes: Phonekey, timing: PhoneTime } = fadeInRight;

  const classes = useStyle();
  return (
    <div>
      <Grid
        container
        spacing={1}
        className={classes.Landing}
        style={{ zIndex: 1, position: "relative" }}
      >
        <Grid
          item
          container
          md={6}
          alignItems="center"
          justify="center"
          style={{ zIndex: -1 }}
        >
          <Box px={4} style={{ maxWidth: "700px" }}>
            <div ref={mainTitleanum}>
              <Typography className={classes.tagline}>Faster than</Typography>
              <Typography className={classes.tagline}>
                you can imagine
              </Typography>
              <Typography gutterBottom className={classes.tagline}>
                always on time
              </Typography>
            </div>
            <Box py={1}>
              <Typography
                variant="h6"
                color="textSecondary"
                gutterBottom
                className={classes.paragraph}
                ref={mainTitledes}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the you can imagine industry's
                standard dummy text.
              </Typography>
            </Box>
            <Box my={2}>
              <Button
                variant="contained"
                className="primaryButton"
                ref={mainBtn}
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          md={6}
          style={{ position: "relative ", zIndex: -1 }}
          alignItems="center"
          justify="center"
        >
          {/* morph */}
          <Hidden mdUp>
            <div className={classes.responsiveDive}></div>
          </Hidden>
          <Hidden smDown>
            <div className={classes.landingMorphParent}>
              <svg
                className={classes.landingMorph}
                viewBox="0 0 1003.303 1079.781"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="1.17"
                    y1="-0.184"
                    x2="0.061"
                    y2="1.014"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stopColor="#0081cf" />
                    <stop offset="1" stopColor="#00c9a7" />
                  </linearGradient>
                </defs>
                <path
                  class="a"
                  d="M1140.1,1243s-430.708,511.208-96.981,904.836,876.531,0,876.531,0V1243Z"
                  transform="translate(-916.343 -1243)"
                />
              </svg>
            </div>
          </Hidden>
          {/* <div>
            Hamzah Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis deleniti itaque vel ducimus minus. Nostrum, dicta.
            Quaerat facilis at suscipit! Ut tempore officiis quod, quasi
            assumenda distinctio a sed laboriosam?
          </div> */}

          <div className={classes.landingmobileParent} ref={phoneAnum}>
            <img
              src={LandingMobile}
              className={classes.landingmobile}
              alt="mobile"
            />
          </div>
          {/* <div
            className={`${classes.laningMobt1} ${classes.laningMobt} `}
            ref={mobiletextAnum}
          >
            <CheckCircleIcon style={{ padding: "0 10" }} />
            <Typography className={classes.laningtextmob}>
              Order With 1 Click{" "}
            </Typography>
          </div> */}
          {/* <div className={`${classes.laningMobt2} ${classes.laningMobt} `}>
            <CheckCircleIcon style={{ padding: "0 10" }} />
            <Typography className={classes.laningtextmob}>
              Enjoy Delicious Food
            </Typography>
          </div> */}

          {/* <div className={classes.landingmobileParent2}>
            <img
              src={MobileLayout}
              className={classes.mobileLayout}
              alt="mobile"
            />
          </div>
          <div className={classes.landingmobileParent3}>
            <img
              src={MobileLayout}
              className={classes.mobileLayout}
              alt="mobile"
            />
          </div>
          <div className={classes.landingmobileParent4}>
            <img
              src={MobileLayout}
              className={classes.mobileLayout}
              alt="mobile"
            />
          </div>
          <div className={classes.landingmobileParent5}>
            <img
              src={MobileLayout}
              className={classes.mobileLayout}
              alt="mobile"
            />
          </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default LaningSection;
