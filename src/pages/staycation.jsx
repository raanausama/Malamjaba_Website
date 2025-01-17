import React, { useState, useEffect } from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import StacationCover from "../components/Cover/stacationCover";
// import Footer from "../components/footer/footer";
import StaycationGrid from "../components/gridViews/stacationGrid";
import StaycationHero from "./StaycationHero";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import NewFooter from "../components/footer/NewFooter";
import axios from "axios";
import EconAccomodation from "../components/StaycationSeasonPackage/EconAccomodation";

const Staycation = () => {
  const [staycationData, setStaycationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStaycationData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/staycation/getStaycationPageData?username=ranausama`
      );
      // Handle the response data here
      console.log("Data:", response.data);
      setLoading(true);
      setStaycationData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };
  console.log("staycationData", staycationData);
  useEffect(() => {
    getStaycationData();
  }, [loading]);
  console.log("__________Staycation Data_______________", staycationData);
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.hero_img}`}
        // image={header}
      />
      <StacationCover staycationData={staycationData} />
      <StaycationGrid staycationData={staycationData} />
      
      <EconAccomodation/>
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
