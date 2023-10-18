import React from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
// import Footer from "../components/footer/footer";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import {
  useTheme,
} from "@mui/material";
import "./activities.css";
import NewFooter from "../components/footer/NewFooter";
import ActivitiesTop from "../components/activitiesPage/ActivitiesTop";
import ActivitiesAvatar from "../components/activitiesPage/ActivitiesAvatar";
import ActivitiesTopPick from "../components/activitiesPage/ActivitiesTopPick";
import OtherActivities from "../components/activitiesPage/OtherActivities";

const Activities = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  return (
    <>
      <ResponsiveAppBar />
      <ActivitiesTop />
      <ActivitiesAvatar />
      <ActivitiesTopPick />
      <OtherActivities />

      {/* <Sponsors /> */}
      {/* <Footer /> */}
      <NewFooter />
    </>
  );
};

export default Activities;
