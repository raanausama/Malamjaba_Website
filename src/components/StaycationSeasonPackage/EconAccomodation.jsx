import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import SamsonCarousel from "../gridViews/SamsonCarousel";
import gsap from "gsap";
import StaycationGridCard from "../Cards/StaycationGridCard";
import Carousel from "react-multi-carousel";
import EconCards from "../Cards/EconCards";

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

const EconAccomodation = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  let card = [
    <EconCards
      image={"/ExecutiveRoom.JPG"}
      heading={"Executive Rooms"}
      text={
        " Room space with a double bed, mini bar, inverter, geyser. Room rates may depend on seasonality. For bookings, contact Samsons Inn Manager Bawar Hussain +92-314-9735622."
      }
      // image={`http://localhost:5000/${staycationData.room1_img}`}
      // heading={staycationData.room1_title}
      // text={staycationData.room1_txt}
    />,
    <EconCards
      image={"/DeluxeRooms.JPG"}
      heading={"Deluxe Rooms"}
      text={
        "Room space with 4 single beds, inverter, geyser. Room rates may depend on seasonality. For bookings, contact Samsons Inn Manager Bawar Hussain +92-314-9735622."
      }
      // image={`http://localhost:5000/${staycationData.room4_img}`}
      // heading={staycationData.room4_title}
      // text={staycationData.room4_txt}
    />,
    <EconCards
      image={"/lawn.jpg"}
      heading={"Outdoor Dining"}
      text={
        "Enjoy a delicious meal with the best of views and peaceful environment. For bookings, contact Samsons Inn Manager Bawar Hussain +92-314-9735622."
      }
      // image={`http://localhost:5000/${staycationData.room3_img}`}
      // heading={staycationData.room3_title}
      // text={staycationData.room3_txt}
    />,
    <EconCards
      image={"/bonfireNew.jpg"}
      heading={"Bonfire"}
      text={
        "We arrange bonfires for your friends circle to enjoy amidst cool breeze. For bookings, contact Samsons Inn Manager Bawar Hussain +92-314-9735622."
      }
      // image={`http://localhost:5000/${staycationData.room2_img}`}
      // heading={staycationData.room2_title}
      // text={staycationData.room2_txt}
    />,

    // <EconCards
    //   image={"/Activities/BanquetHall-min.JPG"}
    //   heading={"Banquet Hall"}
    //   text={"Perfect place for your destination wedding, corporate events etc."}
    //   // image={`http://localhost:5000/${staycationData.room5_img}`}
    //   // heading={staycationData.room5_title}
    //   // text={staycationData.room5_txt}
    // />,
    // <EconCards
    //   image={"/PicturesForWebsite/SwimmingPool-min.JPG"}
    //   heading={"Swimming Pool"}
    //   text={
    //     "Outdoor and temperature control swimming pool for your refreshment"
    //   }
    // image={`http://localhost:5000/${staycationData.room6_img}`}
    // heading={staycationData.room6_title}
    // text={staycationData.room6_txt}
    // />,
    // <EconCards
    //   image={OutDoor}
    //   heading={"Outdoor Wedding"}
    //   text={"Plan your perfect wedding at the perfect location"}
    // image={`http://localhost:5000/${staycationData.room7_img}`}
    // heading={staycationData.room7_title}
    // text={staycationData.room7_txt}
    // />,
    // <EconCards
    //   image={NetCricket}
    //   heading={"Net Cricket"}
    //   text={
    //     "Through our Net Cricket, we ensure, Cricket stays with you no matter where you go. "
    //   }
    // image={`http://localhost:5000/${staycationData.room8_img}`}
    // heading={staycationData.room8_title}
    // text={staycationData.room8_txt}
    // />,
  ];

  return (
    // <Box display="flex" flexDirection="column" alignItems="center" py="2em">
    //   <Typography color="#094e9d" variant="h3" fontFamily={"Aktiv"}>
    //     Economical Accomodation at Samsons Inn.
    //   </Typography>
    //   {/* <SamsonCarousel /> */}
    //   <Grid container>
    //     <Grid item xs={6} md={3}>
    //       <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             flexDirection: "column",
    //             height: "100%",
    //             border: "3px solid #e0ba4b",
    //             overflow: "hidden",
    //             borderRadius: "1em",
    //           }}
    //           onMouseEnter={onEnter}
    //           onMouseLeave={onLeave}
    //         >
    //           <img
    //             src="/ExecutiveRoom.JPG"
    //             alt="Staycation"
    //             style={{ width: "100%", height: "50vh" }}
    //             // borderRadius="1em"
    //           />
    //           <Box sx={{ padding: "5%" }}>
    //             {/* <a href="">
    //         <Typography variant="h4">{heading}</Typography>
    //       </a> */}
    //             <a
    //               // href="https://bookme.pk/events/activities-at-malam-jabba-swat
    //               // href="https://www.pchotels.com/pcmalam-jabba"
    //               target="_blank"
    //               style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //               <Typography
    //                 variant="h4"
    //                 fontFamily={"Aktiv"}
    //                 sx={{
    //                   textDecoration: "none",
    //                   // fontFamily: '"Allison", handwriting !important',
    //                   color: "#11357C",
    //                   transition: "color 0.3s ease",
    //                 }}
    //                 onMouseOver={(e) => {
    //                   e.target.style.color = "#BD9A5F";
    //                 }}
    //                 onMouseOut={(e) => {
    //                   e.target.style.color = "#11357C";
    //                 }}
    //                 // onClick={handleOpenModal}
    //               >
    //                 Executive Rooms
    //               </Typography>
    //             </a>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               Room space with a double bed, mini bar, inverter, geyser. Room
    //               rates may depend on seasonality.
    //             </Typography>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               For bookings, contact Samsons Inn Manager Bawar Hussain +92
    //               314 9735622
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //       <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             flexDirection: "column",
    //             height: "100%",
    //             border: "3px solid #e0ba4b",
    //             overflow: "hidden",
    //             borderRadius: "1em",
    //           }}
    //           onMouseEnter={onEnter}
    //           onMouseLeave={onLeave}
    //         >
    //           <img
    //             src="/DeluxeRooms.JPG"
    //             alt="Staycation"
    //             style={{ width: "100%", height: "50vh" }}
    //             // borderRadius="1em"
    //           />
    //           <Box sx={{ padding: "5%" }}>
    //             {/* <a href="">
    //         <Typography variant="h4">{heading}</Typography>
    //       </a> */}
    //             <a
    //               // href="https://bookme.pk/events/activities-at-malam-jabba-swat
    //               // href="https://www.pchotels.com/pcmalam-jabba"
    //               target="_blank"
    //               style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //               <Typography
    //                 variant="h4"
    //                 fontFamily={"Aktiv"}
    //                 sx={{
    //                   textDecoration: "none",
    //                   // fontFamily: '"Allison", handwriting !important',
    //                   color: "#11357C",
    //                   transition: "color 0.3s ease",
    //                 }}
    //                 onMouseOver={(e) => {
    //                   e.target.style.color = "#BD9A5F";
    //                 }}
    //                 onMouseOut={(e) => {
    //                   e.target.style.color = "#11357C";
    //                 }}
    //                 // onClick={handleOpenModal}
    //               >
    //                 Deluxe Rooms
    //               </Typography>
    //             </a>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               Room space with 4 single beds, inverter, geyser. Room rates
    //               may depend on seasonality.
    //             </Typography>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               For bookings, contact Samsons Inn Manager Bawar Hussain +92
    //               314 9735622
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //       <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             flexDirection: "column",
    //             height: "100%",
    //             border: "3px solid #e0ba4b",
    //             overflow: "hidden",
    //             borderRadius: "1em",
    //           }}
    //           onMouseEnter={onEnter}
    //           onMouseLeave={onLeave}
    //         >
    //           <img
    //             src="/lawn.jpg"
    //             alt="Staycation"
    //             style={{ width: "100%", height: "50vh" }}
    //             // borderRadius="1em"
    //           />
    //           <Box sx={{ padding: "5%" }}>
    //             {/* <a href="">
    //         <Typography variant="h4">{heading}</Typography>
    //       </a> */}
    //             <a
    //               // href="https://bookme.pk/events/activities-at-malam-jabba-swat
    //               //         href="https://www.pchotels.com/pcmalam-jabba"

    //               target="_blank"
    //               style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //               <Typography
    //                 variant="h4"
    //                 fontFamily={"Aktiv"}
    //                 sx={{
    //                   textDecoration: "none",
    //                   // fontFamily: '"Allison", handwriting !important',
    //                   color: "#11357C",
    //                   transition: "color 0.3s ease",
    //                 }}
    //                 onMouseOver={(e) => {
    //                   e.target.style.color = "#BD9A5F";
    //                 }}
    //                 onMouseOut={(e) => {
    //                   e.target.style.color = "#11357C";
    //                 }}
    //                 // onClick={handleOpenModal}
    //               >
    //                 Outdoor Dining
    //               </Typography>
    //             </a>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               Enjoy a delicious meal with the best of views and peaceful
    //               environment.
    //             </Typography>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               For bookings, contact Samsons Inn Manager Bawar Hussain +92
    //               314 9735622
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={6} md={3}>
    //       <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
    //         <Box
    //           sx={{
    //             display: "flex",
    //             flexDirection: "column",
    //             height: "100%",
    //             border: "3px solid #e0ba4b",
    //             overflow: "hidden",
    //             borderRadius: "1em",
    //           }}
    //           onMouseEnter={onEnter}
    //           onMouseLeave={onLeave}
    //         >
    //           <img
    //             src="/bonfireNew.jpg"
    //             alt="Staycation"
    //             style={{ width: "100%", height: "50vh" }}
    //             // borderRadius="1em"
    //           />
    //           <Box sx={{ padding: "5%" }}>
    //             {/* <a href="">
    //         <Typography variant="h4">{heading}</Typography>
    //       </a> */}
    //             <a
    //               // href="https://bookme.pk/events/activities-at-malam-jabba-swat
    //               // href="https://www.pchotels.com/pcmalam-jabba"

    //               target="_blank"
    //               style={{ textDecoration: "none", color: "inherit" }}
    //             >
    //               <Typography
    //                 variant="h4"
    //                 fontFamily={"Aktiv"}
    //                 sx={{
    //                   textDecoration: "none",
    //                   // fontFamily: '"Allison", handwriting !important',
    //                   color: "#11357C",
    //                   transition: "color 0.3s ease",
    //                 }}
    //                 onMouseOver={(e) => {
    //                   e.target.style.color = "#BD9A5F";
    //                 }}
    //                 onMouseOut={(e) => {
    //                   e.target.style.color = "#11357C";
    //                 }}
    //                 // onClick={handleOpenModal}
    //               >
    //                 Bonfire
    //               </Typography>
    //             </a>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               We arrange bonfires for your friends circle to enjoy amidst
    //               cool breeze
    //             </Typography>
    //             <Divider
    //               sx={{
    //                 borderBottomWidth: "medium",
    //                 borderColor: "#D9BD90",
    //                 width: "100px",
    //               }}
    //             />
    //             <Typography fontFamily={"Aktiv"}>
    //               For bookings, contact Samsons Inn Manager Bawar Hussain +92
    //               314 9735622
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Box>
    <Box sx={{ marginTop: "0em" }}>
      <Box display="flex" flexDirection="column" alignItems="center" py="2em">
        <Typography color="#094e9d" variant="h3" fontFamily={"Aktiv"}>
          Economical Accomodation at Samsons Inn.
        </Typography>
      </Box>
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
  );
};

export default EconAccomodation;
