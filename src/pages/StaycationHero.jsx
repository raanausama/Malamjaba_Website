import React from "react";
import { Box, Typography } from "@mui/material";
// import gsap from "gsap";
import "../components/imageWithTextOverlay/imageWithOverlay.css";

const StaycationHero = ({ image, heading,heading2, text }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "90vh", // Set the desired height for the box
      }}
    >
      <Box
        sx={{
          color: "white",
          width: "90%",
          position: "relative",
          paddingTop: "20%",
          paddingLeft: "3%",
          top:{xs:"60%", sm:"30%", md:"10%"}
        }}
      >
        <Typography variant="h3" sx={{ fontSize: {xs:"1em",md:"2.25em"}, fontWeight: "400" }}>
          {heading}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: {xs:"1em",md:"2.25em"}, fontWeight: "400" }}>
          {heading2}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "1.5em" }}>{text}</Typography>
      </Box>
    </Box>
  );
};

export default StaycationHero;
