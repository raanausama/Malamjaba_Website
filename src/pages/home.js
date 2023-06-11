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

      <ImageLists />
      {/* <Slider1 /> */}
      {/* <Slider /> */}
      {/* <div className="cardsParallaxBG">
        <div
          style={{ backgroundImage: `url(${parallaxBG})` }}
          className="header-image-overlay"
        >
          <div className="card-wrapper">
            <Card
              image="pastevent.jpg"
              header="Food Fest"
              text="Cusine from all over Pakistan and a Qawalli Night"
              url="/activities"
            />
            <Card
              image="cycling.jpg"
              header="Mountain Bike Race"
              text="From Cyclists all over Pakistan"
              url="/activities"
            />
            <Card
              image="futureevent.jpg"
              header="Ski and Snowboarding Competition"
              text="To Promote local talent and provide a platform for winter sports"
              url="/activities"
            />
          </div>
        </div>
      </div>
      <div className="card-wrapper-no-space">
        <Card
          image="accomodation.jpg"
          header="Accomodation"
          text="A stay you will never forget"
          url="/staycation"
        />
        <Card
          image="activities.jpg"
          header="Packages"
          text="All our services for all of your needs"
          url="/packages"
        />
        <Card
          image="events.jpg"
          header="Offers"
          text="Experience luxury like never before with our exclusive resort offers, including discounted rates, complimentary amenities, and personalized service tailored to your every need."
          url="/events"
        />
      </div>

      <div class="split-half">
        <div class="left">
          <Carousel
            axis="vertical"
            verticalSwipe="natural"
            infiniteLoop={true}
            showArrows={true}
          >
            <div>
              <img src="pastevent.jpg" />
            </div>
            <div>
              <img src="cycling.jpg" />
            </div>
            <div>
              <img src="futureevent.jpg" />
            </div>
          </Carousel>
        </div>

        <div class="right">
          <div class="grid-2-2">
            <SocailCard
              image="instagram.jpg"
              iconURL="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
              targetURL="https://www.instagram.com/malamjabbaskiresortofficial/"
            />
            <SocailCard
              image="facebook.jpg"
              iconURL="https://www.facebook.com/images/fb_icon_325x325.png"
              targetURL="https://www.facebook.com/MjSkiResort/"
            />
            <SocailCard
              image="youtube.jpg"
              iconURL="https://www.youtube.com/s/desktop/5f762ff5/img/favicon_144.png"
              targetURL="https://www.youtube.com/@malamjabbaskiresort4928"
            />
            <SocailCard
              image="facebook.jpg"
              iconURL="https://www.tiktok.com/favicons/apple-touch-icon.png"
              targetURL="https://www.tiktok.com/@mjskiresort"
            />
          </div>
        </div>
      </div> */}
      {/*
                <Sponsors />
                <Footer /> */}
    </>
  );
};

export default HomePage;
