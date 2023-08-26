import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "1%",
  //   width: 600,
  maxHeight: "100vh",
  backgroundColor: "white",
  overflow: "auto",
  //   border: '0px solid #000',
  boxShadow: 24,
  //   width: isSmallscreen ? "80%" : "50%",
};

export default function EventModal({ open, handleClose, image, description }) {
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
            <Grid container>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <IconButton edge="end" color="inherit" onClick={handleClose}>
                  {/* <CancelIcon sx={{color:"#11357C"}}  /> */}
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/arcade/64/multiply.png"
                    alt="multiply"
                  />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <img
                  src={image}
                  alt="images"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" component="h2">
                  {/* <b>Description:</b> */}
                  {description}
                </Typography>
                {/* <Typography variant="h6" component="h2">
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
                </Typography> */}
              </Grid>
              {/* <Grid item xs={12} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
                  sx={{ padding: "20px" }}
                >
                  Register
                </Button>
              </Grid> */}
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
