import React from "react";
// imprt VideoTextOverlay from "../components/videoTextOverlay/videoTextOverlay";
import VideoTextOverlay from "../components/textOverlay/TextOverlay";
import ImageWithOverlay from "../components/imageWithTextOverlay/imageWithOverlay";
import Card from "../components/Cards/card";
import SocailCard from "../components/Cards/socialCards";
import Sponsors from "../components/sponsors/sponsorsFooter";
import "./home.css";
import Footer from "../components/footer/footer";
import parallaxBG from "../Assets/bg_content/parallax-bg.jpg";
import Swiper from "../components/swiper/swiper";
import { Carousel } from "react-responsive-carousel";
import HeaderText from "../components/header/HeaderText";
import ImageWithSummerActivities from "../components/imageWithTextOverlay/imageWithSummerActivities";
import ImageWithWinterActivities from "../components/imageWithTextOverlay/imageWithWinterActivities";
import Slider from "../components/carousel/Slider";
import Slider1 from "../components/carousel/Slider1";
import { Box } from "@mui/material";
import ImageLists from "../components/carousel/ImageLists";
import Eventcardsection from "../components/Cards/Eventcardsection";
import Servicecardsection from "../components/Cards/servicecardsection";
import CarouselSection from "../components/carousel/CarouselSection";
// import Item form "../components/swiper/swiper";

// import Swiper from "../components/swiper/swiper";
// import {swiper-container} from "swiper";

const HomePage = () => {
  return (
    <>
      <VideoTextOverlay
        video="mjr.mp4"
        text="Plan your perfect getaway with family and friends"
        textHeading="The Magnificent Where"
        text1="Nature Meets Adventure!"
      />
      <ImageWithOverlay
        image="passes.jpg"
        button={true}
        buttonText="Buy Now"
        buttonCallBack={() => {
          console.log("buttonPressed");
        }}
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
      <Eventcardsection />
      <Servicecardsection />
      {/* <CarouselSection/> */}
      <ImageLists />
      <Sponsors />
      <Footer />
      
    </>
  );
};

export default HomePage;
