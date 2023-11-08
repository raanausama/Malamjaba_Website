import React from "react";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import gsap from "gsap";
import { Divider } from "@mui/material";

export default function WinterCards({ simage = "", sheader = "", stext = "" }) {
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
            src={simage}
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
                fontFamily={"Aktiv"}
                sx={{
                  textDecoration: "none",
                  // fontFamily: '"Allison", handwriting !important',
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
                {sheader}
              </Typography>
            </a>
            <Divider
              sx={{
                borderBottomWidth: "medium",
                borderColor: "#D9BD90",
                width: "100px",
              }}
            />
            <Typography fontFamily={"Aktiv"}>{stext}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

// Define separate sx objects for each style group
const sxHeader = {
  fontFamily: "Aktiv",
  //   fontSize: "1.5em",
  /* Additional styles for the header typography */
};

const sxText = {
  /* Additional styles for the text typography */
  fontFamily: "Aktiv",

};
