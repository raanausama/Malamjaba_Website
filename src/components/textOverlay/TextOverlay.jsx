import React, { useRef, useEffect } from "react";
import "./TextOverlay.css"; // Import the CSS file for styling
import { Box, Grid, Stack, Typography, useTheme, useMediaQuery, } from "@mui/material";
// import mjr from "../../Assets/bg_content/mjr.gif";
import gsap from "gsap";

const VideoTextOverlay = ({
  video = "",
  textHeading = "",
  text = "",
  text1,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const gridRef = useRef(null);
  // gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline({ repeatDelay: 1, yoyo: true });
    // const tF = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
    tl.fromTo(
      ".grid-item-1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-3",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    // tF.to(".green", { rotation: 360 });
    // tF.to(".purple", { rotation: 360 });
    // tF.to(".orange", { rotation: 360 });
    // ScrollTrigger.create({
    //   trigger: gridRef.current,
    //   start: "top center",
    //   animation: tl,
    // Uncomment the line below if you want the animation to play every time the trigger area is reached during scrolling
    // scrub: true,
    // });

    return () => {
      tl.kill();
      // ScrollTrigger.kill();
    };
  }, []);

  return (
    <Box
      className="bg-video-wrap"
      // sx={{
      //   backgroundImage: "url(" + mjr + ")",
      //   backgroundSize: "cover",
      //   height: "100vh",
      // }}
    >
      <video src={video} loop muted autoPlay></video>
      <Grid container>
        <Grid
          item
          xs={12}
          ref={gridRef}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          // mt={50}
          sx={{
            position: "absolute",
            bottom: { xs: "1%", md: "10em", lg: "16em" },
            left: { xs: "1%", md: "1em", lg: "1em" },
            zIndex: 1,
            // textAlign: "center",
            background: "#938d8d47",
            borderRadius: "20px",
            padding: "10px",
            color: "white",
            filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 1.25))",
            // borderRadius: "10px",
          }}
        >
          <Stack
            // mt={50}
            direction="column"
            display="flex"
            alignItems="flex-start"
          >
            <Typography
              variant="h4"

              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1.3rem" } ,fontFamily: "TrajanPro3Black" }}
            >
              {textHeading}
            </Typography>
            <Typography
              variant="h4"
              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1rem" } ,fontFamily: "TrajanPro3Black" }}
            >
              {text1}
            </Typography>
            {!isSmallScreen ?
            <Typography
              variant="h6"
              sx={{ [theme.breakpoints.down("sm")]: { fontSize: "1rem" } ,fontFamily: "TrajanPro3Black" }}
            >
              {text}
            </Typography>
            : null }

          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoTextOverlay;
