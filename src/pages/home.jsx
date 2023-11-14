import React, { lazy, Suspense, useState, useEffect } from "react";
// import VideoTextOverlay from "../components/textOverlay/TextOverlay";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import "./home.css";
import Footer from "../components/footer/footer";
// import ImageWithSummerActivities from "../components/imageWithTextOverlay/imageWithSummerActivities";
import ImageWithWinterActivities from "../components/imageWithTextOverlay/imageWithWinterActivities";
import axios from "axios";
// import ImageLists from "../components/carousel/ImageLists";
import Eventcardsection from "../components/Cards/Eventcardsection";
// import Servicecardsection from "../components/Cards/servicecardsection";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import { Box, CircularProgress } from "@mui/material";
import NewFooter from "../components/footer/NewFooter";
import AnnouncementBanner from "../components/announcementBanner/AnnouncementBanner";
// import GoogleMap from "./GoogleMap";

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
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log('env',import.meta.env.VITE_REACT_APP_SERVER_URL)
  // const [username,SetUserName] = useState('ranausama')

  const getHomeData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/home/getHomePageData?username=ranausama`
      );
      // Handle the response data here
      console.log("Data:", response.data);
      setLoading(true);
      setHomeData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  // const footerRef = useRef(null);
  // const [data, setData] = useState([]);
  console.log("homeData", homeData);
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
    getHomeData();
  }, [loading]);
  return (
    <>
      <AnnouncementBanner
        // text={homeData.header_txt}
        text={"Comming Soon"}
      />

      <ResponsiveAppBar />
      <Suspense
        fallback={
          <>
            <CircularProgress />
          </>
        }
      >
        <VideoTextOverlay
          // video="mjr.mp4"
          video="Final _Video.mp4"
          text="Plan your perfect getaway with family and friends"
          textHeading="Malam Jabba Ski Resort – "
          text1="Where Nature Meets Adventure!"
        />

        <ImageWithSummerActivities
          // image={`http://localhost:5000/${homeData.sa_img}`}
          image="SummerActivities.JPG"
          // text={homeData.sa_txt}
          text="The tourists can enjoy plethora of activities during Summers other than the scenic
                                beauty of green mountains of the Malam Jabba Valley. All the rides and their equipment conform to state-of-the-art safety and
                                quality procedures and are tested and reviewed by a team of foreign experts and engineers, multiple times a year."
          // textHeading="Summer Activities"
          textHeading={homeData.sa}
          button={true}
          buttonText="Book Activities"
          buttonCallBack={() => {
            console.log("testing");
          }}
          
        />
      </Suspense>
      <ImageWithWinterActivities
        // image={`http://localhost:5000/${homeData.wa_img}`}
        image="events.jpg"
        textHeading="Winter Activities"
        // text={homeData.wa_txt}
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
      <Eventcardsection homeData={homeData} />
      {/* </Suspense> */}
      {/* <Servicecardsection /> */}
      {/* <ImageLists /> */}
      {/* <Sponsors /> */}
      {/* <Footer /> */}
      {/* <GoogleMap/> */}
      <NewFooter />
    </>
  );
};

export default HomePage;
