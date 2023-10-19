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
    // backgroundColor: "#F1F1FE",
    background: "linear-gradient(90deg,  rgba(255,255,255,1) 0%,rgba(230,230,210,1) 50%, rgba(255,255,255,1) 100%)",

    backgroundSize: "cover",
    // backgroundPosition: "0% 80%",
    backgroundRepeat: "no-repeat",
    height: "13em",
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
  
  return (
    <Box sx={boxStyle}>
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
        justifyContent={{ xs: "center", md: "flex-end" }}
      >
        <Grid item sx={12} md={12}>
          <PrepModal image={image} open={viewModalOpen} handleClose={handleCloseModal} />
          <Stack direction="column" alignItems="center">
            <Typography variant="h4" mt={4} color="#11357C" sx={{fontFamily: '"Allison", handwriting !important',}}>
              ARE YOU READY?
            </Typography>

            {/* <Typography variant="body1" fontStyle="bold" mt={5}>
              Check out our tips to help you prepare for everything you need
              before you hit the slopes.
            </Typography> */}
          </Stack>
        </Grid>
        <Divider />
        <Grid
          item
          mb={4}
          sx={12}
          md={12}
          display="flex"
          justifyContent="center"
        >
          <Button
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            sx={{ color: "black", borderColor: "black !important", background: 'rgb(118,152,255)' }}
            size="medium"
            variant="contained"
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
