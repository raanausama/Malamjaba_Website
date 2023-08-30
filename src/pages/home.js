import React, {  lazy, Suspense, useState, useEffect } from "react";
// import VideoTextOverlay from "../components/textOverlay/TextOverlay";
import Sponsors from "../components/sponsors/sponsorsFooter";
import "./home.css";
import Footer from "../components/footer/footer";
// import ImageWithSummerActivities from "../components/imageWithTextOverlay/imageWithSummerActivities";
import ImageWithWinterActivities from "../components/imageWithTextOverlay/imageWithWinterActivities";
import axios from 'axios';
import ImageLists from "../components/carousel/ImageLists";
import Eventcardsection from "../components/Cards/Eventcardsection";
import Servicecardsection from "../components/Cards/servicecardsection";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import { CircularProgress } from "@mui/material";
import NewFooter from "../components/footer/NewFooter";
import AnnouncementBanner from "../components/announcementBanner/AnnouncementBanner";
import GoogleMap from "./GoogleMap";

const VideoTextOverlay = lazy(() =>
  import("../components/textOverlay/TextOverlay")
);
const ImageWithSummerActivities = lazy(() =>
  import("../components/imageWithTextOverlay/imageWithSummerActivities")
);
// const Eventcardsection = lazy(() =>
//   import("../components/Cards/Eventcardsection")
// );

const HomePage = () => {
  // const footerRef = useRef(null);
  // const [data, setData] = useState([]);
  // console.log('env', process.env.REACT_APP_BACKEND_URL)
  //   useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`http://127.0.0.1:8000/api/homepage`);
  //       setData(response.data);
  //       console.log('yoodata', response.data.date.general[1]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
    {/* <AnnouncementBanner /> */}
      <ResponsiveAppBar />
      <Suspense
        fallback={
          <>
            <CircularProgress />
          </>
        }
      >
        <VideoTextOverlay
          video="mjr.mp4"
          text="Plan your perfect getaway with family and friends"
          textHeading="Malam Jabba Ski Resort – "
          text1="Where Nature Meets Adventure!"
        />

        <ImageWithSummerActivities
          image="summer-activities.jpg"
          text="The tourists can enjoy plethora of activities during Summers other than the scenic
                                beauty of green mountains of the Malam Jabba Valley. All the rides and their equipment conform to state-of-the-art safety and
                                quality procedures and are tested and reviewed by a team of foreign experts and engineers, multiple times a year."
          textHeading="Summer Activities"
          button={true}
          buttonText="Book Activities"
          buttonCallBack={() => {
            console.log("testing");
          }}
        />
      </Suspense>
      <ImageWithWinterActivities
        image="events.jpg"
        textHeading="Winter Activities"
        text="Malam Jabba Ski Resort is the only Public Ski Resort in Pakistan accessible throughout the year, even in heavy snowfall. 
                                We offer a range of exciting and fun activities to our visitors that are guaranteed to make you feel refreshed and inspire you to live fully and freely in the moment.
                                The equipment used for these activities is of premium quality as we can never compromise on the safety of our tourists. "
        button={true}
        buttonText="Book Acitvites"
        buttonCallBack={() => {
          console.log("testing");
        }}
      />
      {/* <Suspense
        fallback={
          <>
            <CircularProgress />
          </>
        }
      > */}
        <Eventcardsection />
      {/* </Suspense> */}
      <Servicecardsection />
      {/* <ImageLists /> */}
      {/* <Sponsors /> */}
      {/* <Footer /> */}
      {/* <GoogleMap/> */}
      <NewFooter />

    </>
  );
};

export default HomePage;
