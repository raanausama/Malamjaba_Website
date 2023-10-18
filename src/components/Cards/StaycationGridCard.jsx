import React from "react";
import { Typography, Box, Divider } from "@mui/material";
// import AccomendationModal from "../../pages/AccomendationModal";

const StaycationGridCard = ({ image, heading, text }) => {
  // const [viewModalOpen, setViewModalOpen] = React.useState(false);
  // const handleCloseModal = () => {
  //   setViewModalOpen(false); // Close the modal
  // };
  // const handleOpenModal = () => {
  //   setViewModalOpen(true); // open the modal
  // };

  return (
    <>
      {/* <AccomendationModal open={viewModalOpen} handleClose={handleCloseModal} /> */}
      <Box>
        <img
          src={image}
          alt="Staycation"
          style={{ width: "100%", height: "35vh" }}
        />
        <Box sx={{ padding: "5%", borderLeft: "3px solid #094e9d" }}>
          {/* <a href="">
          <Typography variant="h4">{heading}</Typography>
        </a> */}
          <a
            href="https://bookme.pk/events/activities-at-malam-jabba-swat
"
            target="_blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography
              variant="h4"
              sx={{
                textDecoration: "none",
                fontFamily: '"Allison", handwriting !important',
                color: "#11357C",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#BD9A5F";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#11357C";
              }}
              // onClick={handleOpenModal}
            >
              {heading}
            </Typography>
          </a>
          <Divider
            sx={{
              borderBottomWidth: "medium",
              borderColor: "#D9BD90",
              width: "100px",
            }}
          />

          <Typography>{text}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default StaycationGridCard;
