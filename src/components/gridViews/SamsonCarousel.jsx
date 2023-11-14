import { Box } from "@mui/material";
import React from "react";
import StaycationGridCard from "../Cards/StaycationGridCard";
import OutDoor from "../../Assets/staycation/Picture2.png";
import NetCricket from "../../Assets/staycation/Picture3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SamsonsCarCard from "../Cards/SamsonCarCard";

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

const SamsonCarousel = ({ staycationData }) => {
  let card = [
    <SamsonsCarCard
      image={"/PicturesForWebsite/premium-suites-min.jpg"}
      heading={"Premium Suites"}
      text={"Luxury Premium Suites to make your stay memorable!"}
      // image={`http://localhost:5000/${staycationData.room1_img}`}
      // heading={staycationData.room1_title}
      // text={staycationData.room1_txt}
    />,
    <SamsonsCarCard
      image={"/PicturesForWebsite/premium-suites-min.jpg"}
      heading={"Delux Rooms"}
      text={"Luxury Premium Suites to make your stay memorable!"}
      // image={`http://localhost:5000/${staycationData.room1_img}`}
      // heading={staycationData.room1_title}
      // text={staycationData.room1_txt}
    />,
  ];
  return (
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

export default SamsonCarousel;
