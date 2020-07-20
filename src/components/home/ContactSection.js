import React from "react";
//mui
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// images
import FacebookIcon from "../../assets/images/facebook.png";
import TwitterIcon from "../../assets/images/twitter.png";
import GmailIcon from "../../assets/images/google-plus.png";
//adnimation
import Fade from "react-reveal/Fade";
const useStyle = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    // justifyContent: "center",
    AlignItems: "center",
    margin: "60px 0",
  },
  contactBackground: {
    position: "absolute",
    height: "300px",
    width: "100%",

    zIndex: "-1",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
      clipPath: "polygon(0 0, 100% 0, 100% 86%, 0 100%)",
    },
  },
  bgparent: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
    },
  },
  formGrid: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  contactForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  contactFormChild: {
    maxWidth: "350px",
    width: "100%",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    background: "white",
  },
  submitBtn: {
    margin: "30px 0 0 0",
    width: "12  0px",
  },
  cFormContent: {
    width: "100%",
    maxWidth: "900px",
    zIndex: "2",
    [theme.breakpoints.down("sm")]: {
      padding: "50px 0",
    },
  },
  ContactMainHeader: {
    fontSize: "40px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: "white",
  },
  Contactpragraph: {
    fontSize: "17px",

    color: "#f3f3f3",
  },
  socialIcons: {
    height: "30px",
    width: "30px",
    marginLeft: "14px",
    paddingTop: "20px",
    cursor: "pointer",
  },
}));
const ContactSection = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.root} id="contactSec">
        <div className={classes.bgparent}>
          <div
            className={`colorPrimaryPattern ${classes.contactBackground}`}
          ></div>
        </div>
        <Grid container spacing={2}>
          <Grid item md={7} container alignItems="center" justify="flex-end">
            <div className={classes.cFormContent}>
              <Box px={2}>
                <Fade down delay={500} cascade>
                  <div>
                    <Typography
                      gutterBottom
                      className={classes.ContactMainHeader}
                    >
                      Get in touch
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.Contactpragraph}
                      gutterBottom
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur possimus quaerat vitae rerum reprehenderit
                      laudantium, eveniet nesciunt quis. Omnis, blanditiis!
                    </Typography>
                  </div>
                </Fade>
              </Box>
              <Fade down delay={800}>
                <img
                  className={classes.socialIcons}
                  src={FacebookIcon}
                  alt="facebook"
                  width="30px"
                  height="30px"
                />
                <img
                  className={classes.socialIcons}
                  src={TwitterIcon}
                  alt="facebook"
                  width="30px"
                  height="30px"
                />
                <img
                  className={classes.socialIcons}
                  src={GmailIcon}
                  alt="facebook"
                  width="30px"
                  height="30px"
                />
              </Fade>
            </div>
          </Grid>
          <Grid item md={5} container className={classes.formGrid}>
            <Fade right>
              <Box mx={2} p={4} className={classes.contactFormChild}>
                <Box py={2}>
                  <Typography align="center" variant="h5" color="primary">
                    <b>Contact Us</b>
                  </Typography>
                </Box>
                <TextField
                  style={{ width: "100%", margin: "5px 0" }}
                  id="standard-basic"
                  label="Name"
                  color="primary"
                />
                <TextField
                  style={{ width: "100%", margin: "5px 0" }}
                  id="standard-basic1"
                  label="Email"
                  color="primary"
                />

                <TextField
                  style={{ width: "100%", margin: "5px 0" }}
                  id="standard-multiline-static"
                  label="Comment"
                  multiline
                  rows={4}
                />

                <Button
                  variant="contained"
                  className={`primaryButton ${classes.submitBtn}`}
                >
                  Submit
                </Button>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ContactSection;
