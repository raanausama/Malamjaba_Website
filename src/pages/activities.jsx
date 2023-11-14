import React, { useEffect, useState } from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
// import Footer from "../components/footer/footer";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import { useTheme } from "@mui/material";
import "./activities.css";
import NewFooter from "../components/footer/NewFooter";
import ActivitiesTop from "../components/activitiesPage/ActivitiesTop";
import ActivitiesAvatar from "../components/activitiesPage/ActivitiesAvatar";
import ActivitiesTopPick from "../components/activitiesPage/ActivitiesTopPick";
import OtherActivities from "../components/activitiesPage/OtherActivities";
import axios from "axios";

const Activities = () => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");

  const [activitiesData, setActivitiesData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log('env',import.meta.env.VITE_REACT_APP_SERVER_URL)
  // const [username,SetUserName] = useState('ranausama')

  const getActivitiesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/activities/getActivitiesPageData?username=ranausama`
      );
      // Handle the response data here
      console.log("Data:", response.data);
      setLoading(true);
      setActivitiesData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  // const footerRef = useRef(null);
  // const [data, setData] = useState([]);
  console.log("activitiesData", activitiesData);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`http://127.0.0.1:8000/api/homepage`);
    //     setData(response.data);
    //     console.log('yoodata', response.data.date.general[1]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
    getActivitiesData();
  }, [loading]);

  return (
    <>
      <ResponsiveAppBar />
      <ActivitiesTop activitiesData={activitiesData} />
      <ActivitiesAvatar activitiesData={activitiesData} />
      <ActivitiesTopPick activitiesData={activitiesData} id="tp" />
      <OtherActivities activitiesData={activitiesData} id="oa" />

      {/* <Sponsors /> */}
      {/* <Footer /> */}
      <NewFooter />
    </>
  );
};

export default Activities;
