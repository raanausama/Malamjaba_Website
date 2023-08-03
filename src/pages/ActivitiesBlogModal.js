import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1%",
  //   width: 600,
  maxHeight: "100vh",
  height: "50vh",
  maxWidth: "50vw",
  backgroundColor: "white",
  overflow: "auto",
  //   border: '0px solid #000',
  boxShadow: 24,
  //   width: isSmallscreen ? "80%" : "50%",
  borderRadius:"2em"
};

export default function ActivitiesBlogModal({ open, handleClose, image }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 3000,
        //   },
        // }}
      >
        <Fade in={open}>
          
          <Box sx={style}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                opacity: "0.5",
                backgroundSize: "cover",
                
              }}
            />
            <Grid
              container
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              
              <Grid
                container
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  zIndex: "1", // Now zIndex should work as expected
                }}
              >
                <Grid item xs={6}>
                  <Typography variant="h6" component="h2">
                    <b>Long Description:</b> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </Typography>
                  <Typography variant="h6" component="h2">
                    <b>PreReqs:</b> Lorem ipsum dolor sit amet.
                  </Typography>
                  <Typography variant="h6" component="h2">
                    <b>Date:</b> June 30, 2023
                  </Typography>
                  <Typography variant="h6" component="h2">
                    <b>Duration:</b> 3 hours
                  </Typography>
                  <Typography variant="h6" component="h2">
                    <b>Disclaimer:</b> Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                </Grid>
              </Grid>
              {/* Add your button and other content here */}
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
