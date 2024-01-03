import { Box, Grid } from "@mui/material";
import React from "react";
import StaycationGridCard from "../Cards/StaycationGridCard";
import OutDoor from "../../Assets/staycation/Picture2.png";
import NetCricket from "../../Assets/staycation/Picture3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StaycationGrid = ({ staycationData }) => {
  console.log('staycationData',staycationData)
  let card = [
    <StaycationGridCard
      // image={"/PicturesForWebsite/premium-suites-min.jpg"}
      // heading={"Premium Suites"}
      // text={"Luxury Premium Suites to make your stay memorable!"}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room1_img}`}
      heading={staycationData.room1_title}
      text={staycationData.room1_txt}
    />,
    <StaycationGridCard
      // image={"delux-min.jpg"}
      // heading={"Deluxe Rooms"}
      // text={"Standard Rooms for your comfortable stay"}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room4_img}`}
      heading={staycationData.room4_title}
      text={staycationData.room4_txt}
    />,
    <StaycationGridCard
      // image={"/PicturesForWebsite/conferenceRoom-min.JPG"}
      // heading={"Meeting Rooms"}
      // text={"Boardrooms for the conferences and professional meetings"}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room3_img}`}
      heading={staycationData.room3_title}
      text={staycationData.room3_txt}
    />,
    <StaycationGridCard
      // image={"/PicturesForWebsite/Cinema (2)-min.jpg"}
      // heading={"Cinema"}
      // text={"Indoor Cinema for your entertainment"}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room2_img}`}
      heading={staycationData.room2_title}
      text={staycationData.room2_txt}
    />,

    <StaycationGridCard
      // image={"/Activities/BanquetHall-min.JPG"}
      // heading={"Banquet Hall"}
      // text={"Perfect place for your destination wedding, corporate events etc."}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room5_img}`}
      heading={staycationData.room5_title}
      text={staycationData.room5_txt}
    />,
    <StaycationGridCard
      // image={"/PicturesForWebsite/SwimmingPool-min.JPG"}
      // heading={"Swimming Pool"}
      // text={
      //   "Outdoor and temperature control swimming pool for your refreshment"
      // }
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room6_img}`}
      heading={staycationData.room6_title}
      text={staycationData.room6_txt}
    />,
    <StaycationGridCard
      // image={OutDoor}
      // heading={"Outdoor Wedding"}
      // text={"Plan your perfect wedding at the perfect location"}
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room7_img}`}
      heading={staycationData.room7_title}
      text={staycationData.room7_txt}
    />,
    // <StaycationGridCard
      // image="/netcric.jpg"
      // heading={"Net Cricket"}
      // text={
      //   "Through our Net Cricket, we ensure, Cricket stays with you no matter where you go. "
      // }
    //   image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room8_img}`}
    //   heading={staycationData.room8_title}
    //   text={staycationData.room8_txt}
    // />,
    <StaycationGridCard
      // image="/futsal.jpg"
      // heading={"Futsal"}
      // text={
      //   "Net Futsal at Malam Jabba Ski Resort offers an exciting blend of the small-sided football game, providing visitors with a unique sporting experience amidst the stunning mountain scenery of Malam Jabba in Pakistan. "
      // }
      image={`${import.meta.env.VITE_BACKEND_URL}/${staycationData.room8_img}`}
      heading={staycationData.room8_title}
      text={staycationData.room8_txt}
    />,
  ];
  return (
    // <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"/PicturesForWebsite/premium-suites-min.jpg"}
    //       heading={"Premium Suites"}
    //       text={"Luxury Premium Suites to make your stay memorable!"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"/PicturesForWebsite/Cinema (2)-min.jpg"}
    //       heading={"Cinema"}
    //       text={"Indoor Cinema for your entertainment"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"/PicturesForWebsite/conferenceRoom-min.JPG"}
    //       heading={"Meeting Rooms"}
    //       text={"Boardrooms for the conferences and professional meetings"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"delux-min.jpg"}
    //       heading={"Deluxe Rooms"}
    //       text={"Standard Rooms for your comfortable stay"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"/Activities/BanquetHall-min.JPG"}
    //       heading={"Banquet Hall"}
    //       text={"Perfect place for your destination wedding, corporate events etc."}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={"/PicturesForWebsite/SwimmingPool-min.JPG"}
    //       heading={"Swimming Pool"}
    //       text={"Outdoor and temperature control swimming pool for your refreshment"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={OutDoor}
    //       heading={"Outdoor Wedding"}
    //       text={"Plan your perfect wedding at the perfect location"}
    //     />
    //   </Grid>
    //   <Grid item md={4}>
    //     <StaycationGridCard
    //       image={NetCricket}
    //       heading={"Net Cricket"}
    //       text={"Through our Net Cricket, we ensure, Cricket stays with you no matter where you go. "}
    //     />
    //   </Grid>
    // </Grid>
    <Box sx={{ marginTop: "0em" }}>
      <Carousel
        // customDot={<CustomDot />}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={7000}
        keyBoardControl={true}
        customTransition="all 3s"
        transitionDuration={1000}
        arrows={true}
      >
        {card}
      </Carousel>
    </Box>
  );
};

export default StaycationGrid;
