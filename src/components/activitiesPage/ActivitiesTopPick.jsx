import React from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useTheme,
  Avatar,
  Container,
} from "@mui/material";
import "../../pages/activities.css";
import WinterCards from "../../components/Cards/WinterCards";
import BlogCards from "../../components/Cards/BlogCards";
import AcitivitySinglePriceCards from "../Cards/ActivitySinglePriceCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
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

const ActivitiesTopPick = ({ activitiesData }) => {
  const theme = useTheme();
  const smallScreen = theme.breakpoints.down("md");
  let card = [
    <WinterCards
      // simage="/Activities/Sking-min.JPG"
      simage={`${import.meta.env.VITE_BACKEND_URL}/${activitiesData?.card1_img}`}
      // sheader="Skiing"
      sheader={activitiesData.card1_title}
      // stext="Ski through our magnificent slopes under the training of national and international experts"
      stext={activitiesData.card1_txt}
      // hourlyPrice={2000}
      hourlyPrice={activitiesData?.card1_hourlyrate}
      // halfDayPrice={3900}
      halfDayPrice={activitiesData?.card1_halfdayrate}
      // fullDayPrice={5900}
      fullDayPrice={activitiesData?.card1_fulldayrate}
      // twoDayPrice={7500}
      description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
    />,
    <WinterCards
      // simage="/Activities/Snowboarding-min.jpg"
      simage={`${import.meta.env.VITE_BACKEND_URL}/${activitiesData?.card2_img}`}
      sheader={activitiesData.card2_title}
      stext={activitiesData.card2_txt}
      // sheader="Snow Boarding"
      // stext="Enjoy Snowboarding at Malam Jabba and check your Wishlist of adventurous activities."
      hourlyPrice={activitiesData?.card2_hourlyrate}
      halfDayPrice={activitiesData?.card2_halfdayrate}
      fullDayPrice={activitiesData?.card2_fulldayrate}
      // hourlyPrice={2000}
      // halfDayPrice={3900}
      // fullDayPrice={5900}
      // twoDayPrice={7500}
      description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
    />,
    <AcitivitySinglePriceCards
      simage={`${import.meta.env.VITE_BACKEND_URL}/${activitiesData?.card3_img}`}
      sheader={activitiesData?.card3_title}
      stext={activitiesData?.card3_txt}
      price={activitiesData?.card3_ticketRate}
      // simage="/Activities/Snowtubing-min.jpg"
      // sheader="Snow Tubing"
      // stext="Perfect ride for all the fun lovers"
      // price="400"
      description="Enjoy The Ride"
    />,
    //   <AcitivitySinglePriceCards
    //   // simage= {`http://localhost:5000/${activitiesData?.card3_img}`}
    //   // sheader={activitiesData?.card3_title}

    //   // stext={activitiesData?.card3_txt}
    //   simage="/Activities/SkiRentalMin.jpg"
    //   sheader="Ski-Rental"
    //   stext="Get yourself well-equipped with high quality skis and snowboards to experience thrilling experience of a lifetime"
    //   price=""
    //   description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
    // />,
    <WinterCards
      // simage="/Activities/SkiRentalMin.jpg"
      simage={`${import.meta.env.VITE_BACKEND_URL}/${activitiesData?.card4_img}`}
      sheader={activitiesData.card4_title}
      stext={activitiesData.card4_txt}
      // sheader="Ski-Rental"
      // stext="Get yourself well-equipped with high quality skis and snowboards to experience thrilling experience of a lifetime"
      // hourlyPrice={2000}
      // halfDayPrice={3900}
      // fullDayPrice={5900}
      hourlyPrice={activitiesData?.card4_hourlyrate}
      halfDayPrice={activitiesData?.card4_halfdayrate}
      fullDayPrice={activitiesData?.card4_fulldayrate}
      // twoDayPrice={7500}
      description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
    />,
  ];

  return (
    <>
      <Grid container display="flex" justifyContent="center">
        <Grid Item xs={12} display="flex" justifyContent="center">
          <Typography variant="h3" color="#094e9d" sx={{ fontFamily: "Aktiv" }}>
            Our Top Picks This Winter
          </Typography>
        </Grid>
        <Grid Item xs={12} sm={12} md={12}>
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
            transitionDuration={3000}
            arrows={true}
          >
            {card}
          </Carousel>
        </Grid>
        {/* <WinterCards
              simage="/Activities/Sking-min.JPG"
              // simage= {`http://localhost:5000/${activitiesData?.card1_img}`}

              sheader="Skiing"
              // sheader={activitiesData.card1_title}
              stext="Ski through our magnificent slopes under the training of national and international experts"
              // stext={activitiesData.card1_txt}
              hourlyPrice={2000}
              halfDayPrice={3900}
              fullDayPrice={5900}
              twoDayPrice={7500}
              description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
            />
          </Grid>
          <Grid Item xs={12} sm={4} md={2}>
            <WinterCards
              simage="/Activities/Snowboarding-min.jpg"
              // simage= {`http://localhost:5000/${activitiesData?.card2_img}`}
              // sheader={activitiesData.card2_title}

              // stext={activitiesData.card2_txt}
              sheader="Snow Boarding"
              stext="Enjoy Snowboarding at Malam Jabba and check your Wishlist of adventurous activities."
              hourlyPrice={2000}
              halfDayPrice={3900}
              fullDayPrice={5900}
              twoDayPrice={7500}
              description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
            />
          </Grid>
          <Grid Item xs={12} sm={4} md={2}>
            <AcitivitySinglePriceCards
              // simage= {`http://localhost:5000/${activitiesData?.card3_img}`}
              // sheader={activitiesData?.card3_title}

              // stext={activitiesData?.card3_txt}
              simage="/Activities/Snowtubing-min.jpg"
              sheader="Snow Tubing"
              stext="Perfect ride for all the fun lovers"
              price="400"
              description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
            />
          </Grid>
          <Grid Item xs={12} sm={4} md={2}>
            <AcitivitySinglePriceCards
              // simage= {`http://localhost:5000/${activitiesData?.card3_img}`}
              // sheader={activitiesData?.card3_title}

              // stext={activitiesData?.card3_txt}
              simage="/Activities/SkiRentalMin.jpg"
              sheader="Ski-Rental"
              stext="Get yourself well-equipped with high quality skis and snowboards to experience thrilling experience of a lifetime"
              price=""
              description="Activity Prices Per Person: (All prices include 200PKR worth of food voucher which can be redeemed at our Food Court)"
            />
          </Grid> */}
      </Grid>
    </>
  );
};

export default ActivitiesTopPick;
