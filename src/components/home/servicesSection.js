import React, { useState } from "react";
//mui
import { Grid, Paper, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// images
import FoodIcon from "../../assets/images/foodIcon.png";
import DiscountIcon from "../../assets/images/discountIcon.png";
import DeleveryIcon from "../../assets/images/deleveryIcon.png";
import ShopIcon from "../../assets/images/shopIcon.png";
//animation

import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  cardsGrid: {
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "1000px",
    },
  },
  servicesHeader: {
    fontSize: "30px",
    fontWeight: "600",
    lineHeight: "1.3",

    color: [theme.palette.black],
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
    },
  },
  servicesparagraph: {
    paddingBottom: "20px",
    [theme.breakpoints.up("md")]: {
      paddingRight: "20px",
    },
  },
  servicesText: {
    paddingBottom: "20px",
    margin: "40px 0px",
    [theme.breakpoints.up("md")]: {
      margin: "0 30px",
    },
  },
}));

const ServicesSection = () => {
  const classes = useStyle();
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Delicious food",
      image: FoodIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
    {
      id: 2,
      title: "Fast delevery",
      image: DeleveryIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
    {
      id: 3,
      title: "Discounts",
      image: DiscountIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
    {
      id: 4,
      title: "Various branches",
      image: ShopIcon,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting ",
    },
  ]);

  return (
    <div
      style={{
        maxWidth: "1500px",
        margin: "50px auto",
        padding: "20px",
      }}
      id="servicesSec"
    >
      <Grid container spacing={2} justify="center">
        <Fade left>
          <Grid
            item
            md={6}
            justify="center"
            alignItems="center"
            className={classes.cardsGrid}
            container
            spacing={3}
          >
            {services.map((services) => (
              <Grid item sm={6} key={services.id}>
                <Paper
                  elevation={0}
                  style={{
                    boxShadow:
                      "0 2px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <Box px={2} py={3}>
                    <div>
                      <Box mb={1}>
                        <img src={services.image} width="70px" height="70px" />
                      </Box>
                      <Typography gutterBottom variant="h6">
                        <b>{services.title}</b>
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        style={{ lineHeight: "2" }}
                        color="textSecondary"
                      >
                        {services.description}
                      </Typography>
                    </div>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Fade>

        <Grid item md={6} alignItems="center" container>
          <Box className={classes.servicesText}>
            <Fade down delay={500}>
              <Typography className={classes.servicesHeader}>
                Our service would
              </Typography>
            </Fade>
            <Fade down delay={600}>
              <Typography
                gutterBottom
                className={classes.servicesHeader}
                style={{ marginBottom: "30px" }}
              >
                be your best fit
              </Typography>
            </Fade>
            <Fade down delay={800}>
              <Typography
                className={classes.servicesparagraph}
                variant="h6"
                color="textSecondary"
                gutterBottom
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the you can imagine industry's
                standard dummy text.
              </Typography>
            </Fade>
            <Fade down delay={1000}>
              <Button variant="contained" className="primaryButton">
                All Services
              </Button>
            </Fade>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
