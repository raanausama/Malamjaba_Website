import React from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import StacationCover from "../components/Cover/stacationCover";
// import Footer from "../components/footer/footer";
import StaycationGrid from "../components/gridViews/stacationGrid";
import StaycationHero from "./StaycationHero";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import { CircularProgress } from "@mui/material";
import NewFooter from "../components/footer/NewFooter";
import header from "../Assets/staycation/Picture1-min.png"

const Staycation = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero image={header} />
      <StacationCover />
      <StaycationGrid />
      <StaycationSeasonPackage
        image="/familyfest.webp"
        buttonText={"Tips before your trip"}
      />
      {/* <Sponsors /> */}
      {/* <Footer bgImage="footer1.jpg" /> */}
      <NewFooter />
    </div>
  );
};

export default Staycation;
