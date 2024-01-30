import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export default function TopPickModal({
  open,
  handleClose,
  subtext,
  hourlyPrice,
  halfDayPrice,
  fullDayPrice,
  twoDayPrice,
  description,
}) {
  // const [viewModalOpen, setViewModalOpen] = React.useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "1%",
    //   width: 600,
    maxHeight: "95vh",
    // Apply minWidth based on screen size
    minWidth: "50vw", // Default for larger screens
    "@media (max-width: 600px)": {
      minWidth: "90vw", // Adjusted for smaller screens
    },
    // backgroundColor: "#F1F1FE",
    background: "rgba(0,0,0,0.8)",
    // backgroundImage: `url(${image})`,
    // backdropFilter: "blur(10px)",
    color: "#ffffff",
    borderRadius: "20px",

    overflow: "auto",
    //   border: '0px solid #000',
    boxShadow: 24,
    //   width: isSmallscreen ? "80%" : "50%",
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                {/* <IconButton edge="end" color="inherit" onClick={handleClose}>
                  
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/arcade/64/multiply.png"
                    alt="multiply"
                  />
                </IconButton> */}
              </Grid>
              {/* <Grid item xs={12}>
                <img
                  src={image}
                  alt="images"
                  style={{ width: "100%", height: "100%" }}
                />
              </Grid> */}
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <IconButton edge="end" color="inherit" onClick={handleClose}>
                  {/* <CancelIcon sx={{color:"#11357C"}}  /> */}
                  <img
                    width="30"
                    height="30"
                    src="https://img.icons8.com/arcade/64/delete-sign.png"
                    alt="delete-sign"
                  />
                </IconButton>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: "1.2em",
                    m: "0em 0.5em 1.2em 0.5em",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Book your adventures at:
                  <a
                    href="https://bookme.pk/events/activities-at-malam-jabba-swat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://bookme.pk/events/activities-at-malam-jabba-swat
                  </a>{" "}
                </Typography>
                <Typography
                  component="h2"
                  sx={{
                    fontSize: "1.2em",
                    m: "0em 0.5em 1.2em 0.5em",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {subtext}
                </Typography>

                <Box
                  display="flex"
                  justifyContent={"center"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography
                    display={hourlyPrice ? "flex" : "none"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    Hourly: {hourlyPrice}
                  </Typography>
                  <Typography
                    display={halfDayPrice ? "flex" : "none"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    Half day: {halfDayPrice}
                  </Typography>
                  <Typography
                    display={fullDayPrice ? "flex" : "none"}
                    textAlign={"center"}
                    alignItems={"center"}
                  >
                    Full day: {fullDayPrice}
                  </Typography>
                  {/* <Typography
                    display={"flex"}
                    textAlign={"center"}
                    alignItems={"center"}
                    mb="1.5rem"
                  >
                    For PC guest 2 days package : {twoDayPrice}
                  </Typography> */}
                  <Typography
                    display={"flex"}
                    textAlign={"center"}
                    alignItems={"center"}
                    mt={2}
                  >
                    Note: {description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
