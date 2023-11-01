import React from "react";
import {
  Grid,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import "../../pages/activities.css";

const ActivitiesAvatar = ({activitiesData}) => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
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
              // src={`http://localhost:5000/${activitiesData.adventure_img}`}
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
              <Typography variant="h4" color="#094e9d" fontFamily={"Aktiv"}>
                Adventurous yet Fun Activities at<br /> Malam Jabba Ski Resort
                {/* {activitiesData?.adventure_title} */}
              </Typography>
              <Typography variant="subtitle" fontFamily={"Aktiv"}>
                Our exhilarating Chairlift, Ziplining, Giant Swing, Human
                Slingshot and kids activities made for fun and memorable
                adventures. We strive to enhance the lives of our guests by
                creating the best human-powered outdoor adventures available.{" "}
                                {/* {activitiesData?.adventure_txt} */}

              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ActivitiesAvatar;
