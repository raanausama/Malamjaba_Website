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

const ActivitiesTopPick = ({activitiesData}) => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");
  // console.log("THIS IS THE DATA", activitiesData)

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
                              // simage= {`http://localhost:5000/${activitiesData?.card1_img}`}

              sheader="Skiing"
              // sheader={activitiesData.card1_title}
              stext="Ski through our magnificent slopes under the training of national and international experts"
              // stext={activitiesData.card1_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards

simage="/Activities/Snowboarding-min.jpg"
// simage= {`http://localhost:5000/${activitiesData?.card2_img}`}
              // sheader={activitiesData.card2_title}

              // stext={activitiesData.card2_txt}
              sheader="Snow Boarding"
              stext="Enjoy Snowboarding at Malam Jabba and check your Wishlist of adventurous activities."
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <WinterCards
            // simage= {`http://localhost:5000/${activitiesData?.card3_img}`}
            // sheader={activitiesData?.card3_title}

            // stext={activitiesData?.card3_txt}
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
