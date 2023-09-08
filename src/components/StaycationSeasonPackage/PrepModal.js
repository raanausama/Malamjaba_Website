import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";


export default function PrepModal({ open, handleClose, image }) {
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
    backgroundColor: "#F1F1FE",
    // backgroundImage: `url(${image})`,
    // backdropFilter: "blur(10px)",
    color: "black",

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
                  component="h2"
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                >
                  1. Weather and Clothing: Check the weather forecast before
                  traveling and pack appropriate clothing for the season. Make
                  sure to bring warm, waterproof clothing, gloves, and sturdy
                  snow boots (in winters).
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  2. Accommodation: Book your accommodation in advance to secure
                  the best options, especially during peak ski season.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  3. Physical Fitness: Skiing and snowboarding or other
                  adventurous activities can be physically demanding, so ensure
                  you are in good health.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  4. Altitude: Malam Jabba is at a higher altitude, so be
                  prepared for potential altitude sickness. Stay hydrated and
                  take it easy on your first day to acclimatize.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  5. Transportation: Arrange for transportation to and from the
                  resort in advance, as public transportation options may be
                  limited.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  6. Photography: Don't forget to bring a camera or smartphone
                  to capture the breathtaking scenery and memorable moments.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  7. Cash and Payment: Bring enough cash, as ATMs may be scarce
                  in the area. Additionally, inquire about payment options at
                  the resort for activities, food, and souvenirs.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  8. Respect Nature: Malam Jabba is an ecologically sensitive
                  area, so make sure to respect nature, follow designated
                  trails, and refrain from littering.
                </Typography>
                <Typography
                  sx={{ fontSize: "1.2em", mb: "0.5em" }}
                  component="h2"
                >
                  9. Local Customs: Familiarize yourself with local customs and
                  traditions to show respect for the local culture and people.
                </Typography>
                <Typography component="h4" marginTop="1em" textAlign={"center"}>
                  By keeping these tips in mind, you can make the most of your
                  trip to Malam Jabba Ski Resort and create unforgettable
                  memories in this stunning mountain paradise.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
