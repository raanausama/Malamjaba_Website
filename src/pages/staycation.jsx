import React, { useState,useEffect } from "react";
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
import axios from "axios";

const Staycation = () => {
  const [staycationData, setStaycationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getStaycationData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/staycation/getStaycationPageData?username=ranausama`);
      // Handle the response data here
      console.log('Data:', response.data);
      setLoading(true);
      setStaycationData(response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error:', error);
    }
  };
  console.log('staycationData', staycationData)
    useEffect(() => {
    getStaycationData()

  }, [loading]);
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
