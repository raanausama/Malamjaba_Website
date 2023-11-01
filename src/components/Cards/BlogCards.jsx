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
      <Box sx={{ ml: "1em", mr: "1em" }}>
        <Card
          sx={{
            position: "relative",
            height: 200,
            borderRadius: "15px",
          }}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${simage})`,
              backgroundSize: "cover",
            }}
          />
        </Card>
        <Box flexDirection="column">
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={sxHeader}
            mt={1}
            color="#094e9d"
          >
            {sheader}
          </Typography>
          <Divider
            sx={{
              borderBottomWidth: "medium",
              borderColor: "#D9BD90",
              width: "50px",
            }}
          />
          <Typography variant="body1" sx={sxText} mt={1}>
            {stext}
          </Typography>
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
