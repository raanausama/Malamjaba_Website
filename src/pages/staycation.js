import React from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import StacationCover from "../components/Cover/stacationCover";
import Footer from "../components/footer/footer";
import StaycationGrid from "../components/gridViews/stacationGrid";
import StaycationHero from "./StaycationHero";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import NewFooter from "../components/footer/NewFooter";
const Staycation = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero image="accomodation.jpg" />
      <StacationCover />
      <StaycationGrid />
      {/* <StaycationSeasonPackage
        image="/PicturesForWebsite/17.jpg"
        buttonText={"Get Ready"}
      /> */}
      {/* <Sponsors /> */}
      {/* <Footer bgImage="footer1.jpg" /> */}
      <NewFooter />
    </div>
  );
};

export default Staycation;
