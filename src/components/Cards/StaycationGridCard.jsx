import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import gsap from "gsap";
// import AccomendationModal from "../../pages/AccomendationModal";

const StaycationGridCard = ({ image, heading, text }) => {
  
  // const [viewModalOpen, setViewModalOpen] = React.useState(false);
  // const handleCloseModal = () => {
  //   setViewModalOpen(false); // Close the modal
  // };
  // const handleOpenModal = () => {
  //   setViewModalOpen(true); // open the modal
  // };
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <>
      {/* <AccomendationModal open={viewModalOpen} handleClose={handleCloseModal} /> */}
      <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "3px solid #e0ba4b",
            overflow:"hidden",
            borderRadius: "1em",
          }}
          onMouseEnter={onEnter} onMouseLeave={onLeave}
        >
          <img
            src={image}
            alt="Staycation"
            style={{ width: "100%", height: "50vh" }}
            // borderRadius="1em"
          />
          <Box sx={{ padding: "5%" }}>
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
      </Box>
    </>
  );
};

export default StaycationGridCard;
