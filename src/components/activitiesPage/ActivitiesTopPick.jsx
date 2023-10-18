import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import "../../pages/activities.css";
import WinterCards from "../../components/Cards/WinterCards";
import BlogCards from "../../components/Cards/BlogCards";

const ActivitiesTopPick = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
      <Container sx={{ mb: 5 }}>
        <Grid container gap={4} display="flex" justifyContent="center">
          <Grid Item xs={12} display="flex" justifyContent="center">
            <Typography variant="h3" color="#094e9d" sx={{ fontFamily: '"Allison", handwriting !important', }}>
              Our Top Picks This Winter
            </Typography>
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="/Activities/Sking-min.JPG"
              sheader="Skiing"
              stext="Ski through our magnificent slopes under the training of national and international experts"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="/Activities/Snowboarding-min.jpg"
              sheader="Snow Boarding"
              stext="Enjoy Snowboarding at Malam Jabba and check your Wishlist of adventurous activities."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
              simage="/Activities/Snowtubing-min.jpg"
              sheader="Snow Tubing"
              stext="Perfect ride for all the fun lovers"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ActivitiesTopPick;
