import React from "react";
import { Box, Typography } from "@mui/material";
// import gsap from "gsap";
import "../components/imageWithTextOverlay/imageWithOverlay.css";

const CsrHero = ({ image, heading, heading2, text }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        // backgroundColor:"rgba(0,0,0,0.5)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0% 30%",
        width: "100%",
        height: "95vh",
        position:"relative" // Set the desired height for the box
      }}
    >
        
      <Box
        sx={{
          color: "white",
          width: "90%",
        //   position: "relative",
          paddingTop: "20%",
          paddingLeft: "5%",
          
          top: { xs: "60%", sm: "30%", md: "10%" },
        }}
      >
        <Box sx={{backgroundColor:"rgba(0, 0, 0, 0.25)", p:"1em", width:"56%", borderRadius:"1em"}}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.2em", md: "2.25em" },
                fontWeight: "600",
                // fontFamily: '"Allison", handwriting !important',
                fontFamily: "Aktiv",
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1em", md: "2.00em" },
                fontWeight: "400",
                // fontFamily: '"Allison", handwriting !important',
                fontFamily: "Aktiv",
              }}
            >
              {heading2}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "0.8em", md: "1.90em" },
                // fontFamily: '"Allison", handwriting !important',
                fontFamily: "Aktiv",
              }}
            >
              {text}
            </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CsrHero;
