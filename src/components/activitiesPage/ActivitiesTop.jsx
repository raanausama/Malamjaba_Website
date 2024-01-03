import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import "../../pages/activities.css";
import Background from "../../assets/bg_content/Picture4.png";

const ActivitiesTop = ({activitiesData}) => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
      <Grid container md={12} xl={12}>
        <Box
          sx={{
            backgroundImage: `url(${Background})`,
            // backgroundImage:`url(http://localhost:5000/${activitiesData.hero_img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            item
            color="white"
            sx={{ paddingBottom: "45em" }}
            display="flex"
            alignItems={{ xs: "center", md: "flex-start" }}
          >
            {/* <Stack
              direction="column"
              display="flex"
              alignItems={{ xs: "center", md: "flex-start" }}
              ml={{ md: "20px" }}
              sx={{
                marginTop: "20em",
                background: "#938d8d47",
                // borderRadius: "20px",
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
                State of the Art Infrastructure and <br /> Adventurous
                Activities
              </Typography> */}
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
              {/* <Typography
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
            </Stack> */}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ActivitiesTop;
