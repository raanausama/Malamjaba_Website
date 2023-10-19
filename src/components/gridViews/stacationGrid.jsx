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

let card = [
  <StaycationGridCard
    image={"/PicturesForWebsite/premium-suites-min.jpg"}
    heading={"Premium Suites"}
    text={"Luxury Premium Suites to make your stay memorable!"}
  />,
  <StaycationGridCard
    image={"/PicturesForWebsite/Cinema (2)-min.jpg"}
    heading={"Cinema"}
    text={"Indoor Cinema for your entertainment"}
  />,
  <StaycationGridCard
    image={"/PicturesForWebsite/conferenceRoom-min.JPG"}
    heading={"Meeting Rooms"}
    text={"Boardrooms for the conferences and professional meetings"}
  />,
  <StaycationGridCard
    image={"delux-min.jpg"}
    heading={"Deluxe Rooms"}
    text={"Standard Rooms for your comfortable stay"}
  />,
  <StaycationGridCard
    image={"/Activities/BanquetHall-min.JPG"}
    heading={"Banquet Hall"}
    text={"Perfect place for your destination wedding, corporate events etc."}
  />,
  <StaycationGridCard
    image={"/PicturesForWebsite/SwimmingPool-min.JPG"}
    heading={"Swimming Pool"}
    text={"Outdoor and temperature control swimming pool for your refreshment"}
  />,
  <StaycationGridCard
    image={OutDoor}
    heading={"Outdoor Wedding"}
    text={"Plan your perfect wedding at the perfect location"}
  />,
  <StaycationGridCard
    image={NetCricket}
    heading={"Net Cricket"}
    text={
      "Through our Net Cricket, we ensure, Cricket stays with you no matter where you go. "
    }
  />,
];
const StaycationGrid = () => {
  
  
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
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        arrows={true}
        
        
      >
        {card}
      </Carousel>
    </Box>
  );
};

export default StaycationGrid;
