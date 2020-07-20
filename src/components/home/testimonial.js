import React, { useState } from "react";
//mui
import { Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//icons
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
//images
import Mantesto from "../../assets/images/testoman.png";
import Wonmentesto from "../../assets/images/testowomen.png";
//adnimation
import Fade from "react-reveal/Fade";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "1300px",
    margin: "0px auto 80px auto",
  },
  testoHeader: {
    fontSize: "40px",
    fontWeight: "600",
    lineHeight: "1.3",
    color: [theme.palette.black],
  },
  testocard: {
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    maxWidth: "600px",
    margin: "0 10px",
  },
  quoteIcon: {
    color: [theme.palette.blackSecondary],
    fontSize: "50px",
  },
  personImgSec: {
    display: "flex",
  },
}));

const Testimonial = () => {
  const [testo, setTesto] = useState([
    {
      id: 1,
      name: "Hamzah Syed",
      image: Mantesto,
      description:
        "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown",
    },
    {
      id: 2,
      name: "Sarah ",
      image: Wonmentesto,
      description:
        "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown",
    },
  ]);

  const classes = useStyle();
  return (
    <div>
      <Box mt={12} pb={4}>
        <Fade delay={100} cascade>
          <Typography className={classes.testoHeader} align="center">
            Testimonial
          </Typography>
        </Fade>
      </Box>
      <Grid container className={classes.root} spacing={2}>
        {testo.map((persons) => (
          <Grid key={persons.id} item md={6} xs={12} justify="center" container>
            <Fade up fraction={1} cascade>
              <div>
                <div className={classes.testocard}>
                  <Box p={2}>
                    <Box>
                      <FormatQuoteIcon className={classes.quoteIcon} />
                    </Box>
                    <Box pl={2}>
                      <Typography variant="subtitle1" color="textSecondary">
                        {persons.description}
                      </Typography>
                    </Box>
                    <Box pt={2} pl={6}>
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={1}
                          container
                          alignItems="center"
                          justify="flex-end"
                        >
                          <img
                            src={persons.image}
                            width="60px"
                            height="60px"
                            alt="user"
                          />
                        </Grid>
                        <Grid item xs={10} container alignItems="center">
                          <Typography>{persons.name}</Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </div>
              </div>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Testimonial;
