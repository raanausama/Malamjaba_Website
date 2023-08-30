import React, { useRef, useEffect, useState } from "react";
// import React, { useState } from "react";
import { Box, Grid, Stack, Typography, Button, Divider } from "@mui/material";
import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
import PrepModal from "./PrepModal";

// const [viewModalOpen, setViewModalOpen] = React.useState(false);

// const handleCloseModal = () => {
//   console.log("handleCloseModal");
//   setViewModalOpen(false); // Close the modal
// };
// const handleOpenModal = () => {
//   console.log("handleOpenModal");
//   setViewModalOpen(true); // open the modal #86796f
// };

const StaycationSeasonPackage = ({
  image,
  button = true,
  buttonText,
  buttonCallBack = () => {},
}) => {
  const boxStyle = {
    // backgroundImage: `url(${image})`,
    backgroundColor: "#F1F1FE",
    backgroundSize: "cover",
    backgroundPosition: "0% 80%",
    backgroundRepeat: "no-repeat",
    height: "11em",
    display: "flex",
    justifyContent: "center",
  };

  const [viewModalOpen, setViewModalOpen] = React.useState(false);

  const handleCloseModal = () => {
    console.log("handleCloseModal");
    setViewModalOpen(false); // Close the modal
  };
  const handleOpenModal = () => {
    console.log("handleOpenModal");
    setViewModalOpen(true); // open the modal
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1.05,
      // backgroundColor: "rgba(0, 0, 0, 0.3)",
    });
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
    <Box sx={boxStyle} >
      {/* <img src={image} alt='skii'></img> */}
      <Grid
        container
        // mt={{ xs: 25, md: 20 }}
        ml={{ xs: 0, md: -3 }}
        xs={{
          // height: "20%",
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        justifyContent="flex-end"
      >
        <Grid item sx={12} md={12}>
          <PrepModal open={viewModalOpen} handleClose={handleCloseModal} />
          <Stack direction="column" alignItems="center">
            <Typography variant="h4" mt={4}>
              ARE YOU READY?
            </Typography>

            {/* <Typography variant="body1" fontStyle="bold" mt={5}>
              Check out our tips to help you prepare for everything you need
              before you hit the slopes.
            </Typography> */}
          </Stack>
        </Grid>
        <Divider />
        <Grid item mb={4} sx={12} md={12}  display='flex' justifyContent="center">
          <Button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            // sx={{ color: "white", borderColor: "white !important" }}
            size="medium"
            variant="outlined"
            mt={4}
            onClick={handleOpenModal}
          >
            {buttonText}
          </Button>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default StaycationSeasonPackage;
