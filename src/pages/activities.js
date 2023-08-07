import React from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import "./activities.css";
import Background from "../Assets/bg_content/activities-header.jpg";
import WinterCards from "../components/Cards/WinterCards";
import BlogCards from "../components/Cards/BlogCards";

const Activities = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
      <Box className="activities">
        <ResponsiveAppBar />
        <Grid container md={12} xl={12} className="header-image-overlay">
          <Box
            sx={{
              backgroundImage: `url(${Background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
            }}
          >
            <Grid
              item
              className="text-box"
              color="white"
              sx={{ paddingBottom: "20em" }}
              display="flex"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Stack
                direction="column"
                display="flex"
                alignItems={{ xs: "center", md: "flex-start" }}
                ml={{ md: "20px" }}
                sx={{
                  marginTop: "20em",
                  background: "#938d8d47",
                  borderRadius: "20px",
                  padding: "10px",
                  color: "white",
                  filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 1.25))",
                  borderRadius: "10px",
                }}
              >
                <Typography
                  variant={smallScreen ? "h4" : "h6"}
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      // fontSize: "1.5rem",
                      textAlign: "start",
                    },
                    [theme.breakpoints.down("md")]: {
                      // fontSize: "1.5rem",
                      display: "flex",
                      textAlign: "start",
                    },
                  }}
                >
                  State-of-the-art infrastructure and <br /> Adventurous
                  Activities
                </Typography>
                {/* <Typography
                variant={smallScreen ? "h3" : "h5"}
                sx={{
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.5rem",
                    textAlign: "start",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "1.5rem",
                    textAlign: "start",
                  },
                }}
              >
                Nature Meets Adventure!
              </Typography> */}
                <Typography
                  variant={smallScreen ? "h6" : "h7"}
                  sx={{
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "1rem",
                      justifyContent: "center",
                      textAlign: "center",
                    },
                    [theme.breakpoints.down("md")]: { fontSize: "1.5rem" },
                  }}
                >
                  Plan your perfect getaway with family and friends
                </Typography>
              </Stack>
            </Grid>
          </Box>
        </Grid>

        <Container className="activites-cover-2-col">
          {/* <img src="outdoor.jpeg" alt="Activities" /> */}
          <Grid
            container
            display="flex !important"
            justifyContent="center !important"
          >
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                alt="Activities"
                src="outdoor.jpeg"
                sx={{
                  width: { xs: 250, sm: 400 },
                  height: { xs: 250, sm: 400 },
                }}
              />
            </Grid>
            <Grid
              Item
              md={6}
              mt={{ xs: 10, sm: 10, md: 10, lg: 5 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: {
                  xs: "Center",
                  sm: "Center",
                  md: "Center",
                  lg: "start",
                },
              }}
            >
              <Stack direction="column">
                <Typography variant="h4" color="#094e9d">
                  Adventurous yet Fun Activities <br /> at Malam Jabba Ski
                  Resort
                </Typography>
                <Typography variant="subtitle">
                  Our exhilarating Chairlift, Ziplining, Giant Swing, Human
                  Slingshot and kids activities made for fun and memorable
                  adventures. We strive to enhance the lives of our guests by
                  creating the best human-powered outdoor adventures available.{" "}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ mb: 10 }}>
          <Grid container gap={4} display="flex" justifyContent="center">
            <Grid Item xs={12} display="flex" justifyContent="center">
              <Typography variant="h3" color="#094e9d">
                Our Top Picks This Winter
              </Typography>
            </Grid>
            <Grid Item sm={12} md={3}>
              <WinterCards
                simage="/PicturesForWebsite/19.jpg"
                sheader="Skiing"
                stext="Ski through our magnificent slopes under the training of national and international experts"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <WinterCards
                simage="/PicturesForWebsite/13.png"
                sheader="Snow Boarding"
                stext="Enjoy Snowboarding at Malam Jabba and check your Wishlist of adventurous activities."
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <WinterCards
                simage="/PicturesForWebsite/12.JPG"
                sheader="Snow Tubing"
                stext="Perfect ride for all the fun lovers"
              />
            </Grid>

            <Grid Item xs={12} display="flex" justifyContent="center">
              <Typography variant="h3" color="#094e9d">
                Other Activities
              </Typography>
            </Grid>

            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="pastevent.jpg"
                sheader="Chairlift"
                stext="An 850 meters ride to the top station to enjoy scenic views of the valley"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="cycling.jpg"
                sheader="Zipline"
                stext="Zip through the clouds on one of the longest ziplines of Pakistan"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="futureevent.jpg"
                sheader="Giant Swing"
                stext="Swing your stress away, at the only Giant Swing of Pakistan"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="pastevent.jpg"
                sheader="Human Slingshot"
                stext="Are you daring enough to try the only slingshot of Pakistan"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="cycling.jpg"
                sheader="Grass Ski"
                stext="Ski is no longer for winters with our grass skiing, using the best equipment"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
              <BlogCards
                simage="futureevent.jpg"
                sheader="VR Rides"
                stext="VR Snowboarding and Skiing simulators to provide you the experience of its kind"
              />
            </Grid>
            <Grid Item sm={12} md={3}>
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
            </Grid>
          </Grid>
        </Container>

        {/* <Sponsors /> */}
        <Footer />
      </Box>
    </>
  );
};

export default Activities;
