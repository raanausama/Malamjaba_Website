import React from "react";
import { Grid, Typography, useTheme, Container, Box } from "@mui/material";
import "../../pages/activities.css";
import BlogCards from "../../components/Cards/BlogCards";
import vrRides from "../../Assets/bg_content/Picture5.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WinterCards from "../Cards/WinterCards";
import AcitivitySinglePriceCards from "../Cards/ActivitySinglePriceCards";

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
const OtherActivities = ({ activitiesData }) => {
  // const theme = useTheme();
  // const smallScreen = theme.breakpoints.down("md");
  // console.log("THIS IS OTHER DATA", activitiesData)
  let card = [
    <AcitivitySinglePriceCards
      simage="/Activities/ChairliftCropped-min.png"
      sheader="Chairlift"
      stext="An 850 meters ride to the top station to enjoy scenic views of the valley"
      price="1400"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,

    // <BlogCards
    //   simage="/Activities/ChairliftCropped-min.png"
    //   sheader="Chairlift"
    //   stext="An 850 meters ride to the top station to enjoy scenic views of the valley"
    // simage={`http://localhost:5000/${activitiesData?.ac1_img}`}
    // sheader={activitiesData?.ac1_title}
    // stext={activitiesData?.ac1_txt}
    // />,
    <AcitivitySinglePriceCards
      simage="/Activities/Zipline-min.png"
      sheader="Zipline"
      stext="Zip through the clouds on one of the longest ziplines of Pakistan"
      price="3500"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,
    // <BlogCards
    //   simage="/Activities/Zipline-min.png"
    //   sheader="Zipline"
    //   stext="Zip through the clouds on one of the longest ziplines of Pakistan"
    // simage={`http://localhost:5000/${activitiesData?.ac2_img}`}
    // sheader={activitiesData?.ac2_title}
    // stext={activitiesData?.ac2_txt}
    // />,
    <AcitivitySinglePriceCards
      simage="/Activities/GiantSwing-min.jpg"
      sheader="Giant Swing"
      stext="Swing your stress away, at the only Giant Swing of Pakistan"
      price="3500"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,
    // <BlogCards
    //   simage="/Activities/GiantSwing-min.jpg"
    //   sheader="Giant Swing"
    //   stext="Swing your stress away, at the only Giant Swing of Pakistan"
    // simage={`http://localhost:5000/${activitiesData?.ac3_img}`}
    // sheader={activitiesData?.ac3_title}
    // stext={activitiesData?.ac3_txt}
    // />,
    <AcitivitySinglePriceCards
      simage="/Activities/HumanSlingshot-min.JPG"
      sheader="Human Slingshot"
      stext="Are you daring enough to try the only slingshot of Pakistan"
      price="5000"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,
    // <BlogCards
    //   simage="/Activities/HumanSlingshot-min.JPG"
    //   sheader="Human Slingshot"
    //   stext="Are you daring enough to try the only slingshot of Pakistan"
    // simage={`http://localhost:5000/${activitiesData?.ac4_img}`}
    // sheader={activitiesData?.ac4_title}
    // stext={activitiesData?.ac4_txt}
    // />,
    <AcitivitySinglePriceCards
      simage="/Activities/GrassSki-min.jpg"
      sheader="Grass Ski"
      stext="Ski is no longer for winters with our grass skiing, using the best equipment"
      price="1000"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,
    // <BlogCards
    //   simage="/Activities/GrassSki-min.jpg"
    //   sheader="Grass Ski"
    //   stext="Ski is no longer for winters with our grass skiing, using the best equipment"
    // simage={`http://localhost:5000/${activitiesData?.ac5_img}`}
    // sheader={activitiesData?.ac5_title}
    // stext={activitiesData?.ac5_txt}
    // />,
    <AcitivitySinglePriceCards
      simage={vrRides}
      sheader="VR Rides"
      stext="VR Snowboarding and Skiing simulators to provide you the experience of its kind"
      price="500"
      description="Entry 1,100 per person If you buy an activity ticket entry will be free. Activity Prices Per Person All prices include 200PKR worth of food voucher which can be redeemed at our Food Court"
    />,
    // <BlogCards
    //   simage={vrRides}
    //   sheader="VR Rides"
    //   stext="VR Snowboarding and Skiing simulators to provide you the experience of its kind"
    // simage={`http://localhost:5000/${activitiesData?.ac6_img}`}
    // sheader={activitiesData?.ac6_title}
    // stext={activitiesData?.ac6_txt}
    // />,
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            mb: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="#094e9d" sx={{ fontFamily: "Aktiv" }}>
            Other Activities
          </Typography>
        </Box>
        <Box
          sx={{
            mb: "5em",
            // mx: "8em"
          }}
        >
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
        </Box>
        {/* <Grid Item sm={12} md={3}>
            <BlogCards
              // simage="/Activities/ChairliftCropped-min.png"
              // sheader="Chairlift"
              // stext="An 850 meters ride to the top station to enjoy scenic views of the valley"
              simage= {`http://localhost:5000/${activitiesData?.ac1_img}`}
              sheader={activitiesData?.ac1_title}
  
              stext={activitiesData?.ac1_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              // simage="/Activities/Zipline-min.png"
              // sheader="Zipline"
              // stext="Zip through the clouds on one of the longest ziplines of Pakistan"
              simage= {`http://localhost:5000/${activitiesData?.ac2_img}`}
              sheader={activitiesData?.ac2_title}
  
              stext={activitiesData?.ac2_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              // simage="/Activities/GiantSwing-min.jpg"
              // sheader="Giant Swing"
              // stext="Swing your stress away, at the only Giant Swing of Pakistan"
              simage= {`http://localhost:5000/${activitiesData?.ac3_img}`}
              sheader={activitiesData?.ac3_title}
  
              stext={activitiesData?.ac3_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              // simage="/Activities/HumanSlingshot-min.JPG"
              // sheader="Human Slingshot"
              // stext="Are you daring enough to try the only slingshot of Pakistan"
              simage= {`http://localhost:5000/${activitiesData?.ac4_img}`}
              sheader={activitiesData?.ac4_title}
  
              stext={activitiesData?.ac4_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              // simage="/Activities/GrassSki-min.jpg"
              // sheader="Grass Ski"
              // stext="Ski is no longer for winters with our grass skiing, using the best equipment"
              simage= {`http://localhost:5000/${activitiesData?.ac5_img}`}
              sheader={activitiesData?.ac5_title}
              stext={activitiesData?.ac5_txt}
            />
          </Grid>
          <Grid Item sm={12} md={3}>
            <BlogCards
              // simage={vrRides}
              // sheader="VR Rides"
              // stext="VR Snowboarding and Skiing simulators to provide you the experience of its kind"
              simage= {`http://localhost:5000/${activitiesData?.ac6_img}`}
              sheader={activitiesData?.ac6_title}
              stext={activitiesData?.ac6_txt}
            />
          </Grid> */}
        {/* <Grid Item sm={12} md={3}>
                <BlogCards
                simage="pastevent.jpg"
                sheader="Wall Climbing"
                stext="Test your stamina through our wall climbing"
                />
                </Grid>
                <Grid Item sm={12} md={3}>
                <BlogCards
                simage="cycling.jpg"
                sheader="Leap of faith"
                stext="Take a leap of faith at Malam Jabba Ski Resort"
                />
                </Grid>
                <Grid Item sm={12} md={3}>
                <BlogCards
                simage="futureevent.jpg"
                sheader="Jumping Castle"
                stext="Kids play area for your young ones!"
                />
            </Grid> */}
      </Box>
    </>
  );
};

export default OtherActivities;
