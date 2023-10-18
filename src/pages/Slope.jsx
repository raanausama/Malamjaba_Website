import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import NewFooter from "../components/footer/NewFooter";
import slope1 from "../Assets/bg_content/slope1.png";
import slope2 from "../Assets/bg_content/slope2.png";


function Slope() {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image="Images/Slope/dsfgfgg.jpg"
        heading="A Symphony of Serenity -"
        heading2="Malam Jabba's Magnificent Slopes Await you"
        text="The Identity of Malam Jabba Ski Resort"
      />
      <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
        >
          <Grid item md={6} padding="1%">
            <Grid
              container
              style={{ padding: "4px" }}
              spacing={2}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={6}>
                <img
                  src="/Images/Slope/IMG_9404-1-min.JPG"
                  alt="First Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    border: "10px solid white",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img
                      src="/Images/Slope/fghgfh-min.jpg"
                      alt="Second Image"
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "10px solid white",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        borderRadius: "10px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <img
                      src={slope1}
                      alt="Third Image"
                      style={{
                        width: "100%",
                        height: "auto",
                        border: "10px solid white",
                        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                        borderRadius: "10px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
                Malam Jabba Ski Resort - <br/> Where Nature Meets Adventure:
              </Typography>
              <Typography variant="subtitle">
                As you travel up the curvy roads of Swat, eyeing breathtaking
                views of the valley, the journey concludes with a sight that
                makes all the traveling worth it – Malam Jabba Ski Resort, a
                beautiful destination stationed amidst the Hindu Kush and
                Himalayan mountains. It is the only public alpine-style Ski
                Resort in Pakistan with state-of-the-art infrastructure and
                premium accommodations and world-class winter sports facilities.
                It is Pakistan's only public alpine-style Ski Resort with
                state-of-the-art infrastructure, premium accommodations, and
                world-class winter sports facilities. The resort commenced its
                operations in 2016.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        sx={{ width: "100%", height: "80%", alignItems: "center" }}
      >
        <Grid item md={6} xs={12} sm={12} lg={6}>
          <Box sx={{ padding: 5 }}>
            <Typography
              color="#094e9d"
              variant="h3"
              fontWeight={"400"}
              // fontSize={"3rem"}
            >
            Technicalities of the Slope
            </Typography>

            <Typography variant="subtitle">
              The slope at Malam Jabba is one of its kind, well-maintained and
              perfect for skiing and snowboarding. The management at Malam Jabba
              Ski Resort ensures that the snow is groomed to perfection,
              especially during our winter season. The top station elevation of
              the slope is 2656 Meters while the base elevation is 2472 Meters.
              The length of the slope is 720 Meters and its width is 60 Meters.
              Moreover, the average slope gradient is 28%, providing an
              exhilarating skiing experience for enthusiasts.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sm={12} lg={6}>
          <Grid
            container
            style={{ padding: "4px" }}
            spacing={2}
            display="flex"
            alignItems="center"
          >
            <Grid item xs={6}>
              <img
                src="/Images/Slope/sdfrr5fg1-min.jpg"
                alt="First Image"
                style={{
                  width: "100%",
                  height: "auto",
                  border: "10px solid white",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  borderRadius: "10px",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <img
                    src="/Images/Slope/dsfgfgg-min.jpg"
                    alt="Second Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      border: "10px solid white",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <img
                    src={slope2}
                    alt="Third Image"
                    style={{
                      width: "100%",
                      height: "auto",
                      border: "10px solid white",
                      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <StacationCover /> */}
      {/* <BlogGrid /> */}
      {/* <StaycationSeasonPackage
        image="/PicturesForWebsite/17.jpg"
        buttonText={"Get Ready"}
      /> */}
      {/* <Sponsors /> */}
      {/* <Footer bgImage="footer1.jpg" /> */}
      <NewFooter/>
    </div>
  );
}

export default Slope;
