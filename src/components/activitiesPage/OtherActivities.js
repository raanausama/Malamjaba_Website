import React from "react";
import {
  Grid,
  Typography,
  useTheme,
  Container,
} from "@mui/material";
import "../../pages/activities.css";
import BlogCards from "../../components/Cards/BlogCards";

const OtherActivities = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
      <Container sx={{ mb: 5 }}>
        <Grid container gap={4} display="flex" justifyContent="center">
          <Grid Item xs={12} display="flex" justifyContent="center">
            <Typography variant="h3" color="#094e9d">
              Other Activities
            </Typography>
          </Grid>

          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/Activities/ChairliftCropped-min.png"
              sheader="Chairlift"
              stext="An 850 meters ride to the top station to enjoy scenic views of the valley"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/Activities/Zipline-min.png"
              sheader="Zipline"
              stext="Zip through the clouds on one of the longest ziplines of Pakistan"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/Activities/GiantSwing-min.jpg"
              sheader="Giant Swing"
              stext="Swing your stress away, at the only Giant Swing of Pakistan"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/Activities/HumanSlingshot-min.JPG"
              sheader="Human Slingshot"
              stext="Are you daring enough to try the only slingshot of Pakistan"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/Activities/GrassSki-min.jpg"
              sheader="Grass Ski"
              stext="Ski is no longer for winters with our grass skiing, using the best equipment"
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              simage="/PicturesForWebsite/11-min.JPG"
              sheader="VR Rides"
              stext="VR Snowboarding and Skiing simulators to provide you the experience of its kind"
            />
          </Grid>
          {/* <Grid Item sm={12} md={3}>
                <BlogCards
                simage="pastevent.jpg"
                sheader="Wall Climbing"
                stext="Test your stamina through our wall climbing"
                />
                </Grid>
                <Grid Item sm={12} md={3}>
                <BlogCards
                simage="cycling.jpg"
                sheader="Leap of faith"
                stext="Take a leap of faith at Malam Jabba Ski Resort"
                />
                </Grid>
                <Grid Item sm={12} md={3}>
                <BlogCards
                simage="futureevent.jpg"
                sheader="Jumping Castle"
                stext="Kids play area for your young ones!"
                />
            </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default OtherActivities;
