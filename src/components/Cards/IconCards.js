import React from "react";
import Card from "@mui/material/Card";
import { Stack, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import "./servicecard.css";

export default function IconCards({
  simage = "",
  sheader = "",
  stext = "",
  icons,
  iconLinks,
}) {
  const iconComponents = {
    LinkedIn: (
      <img
        className=".rounded-circle"
        width="80"
        height="80"
        src="https://img.icons8.com/carbon-copy/100/linkedin.png"
        alt="linkedin"
      />
    ),
    Twitter: (
      <img
        className=".rounded-circle"
        
        width="80"
        height="80"
        src="https://img.icons8.com/carbon-copy/100/twitter.png"
        alt="twitter"
      />
    ),
    Facebook: (
      <img
        className=".rounded-circle"
        
        width="80"
        height="80"
        src="https://img.icons8.com/carbon-copy/100/facebook-new.png"
        alt="facebook-new"
      />
    ),
    Youtube: (
      <img
        className=".rounded-circle"
        
        width="80"
        height="80"
        src="https://img.icons8.com/carbon-copy/100/youtube-play--v1.png"
        alt="youtube-play--v1"
      />
    ),
    // Add more icons as needed
  };
  return (
    <Card sx={{ position: "relative", height: 350 }}>
      <Box
        className="service"
        sx={{
          backgroundImage: `url(${simage})`,
        }}
      />
      <CardContent className="content">
        <Box
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
        // textAlign="center"
        >
          <Stack direction="row">
            <Stack display="flex" alignItems="flex-start" className="InsufficientBalance">
              <Link sx={{ color: "white" }} href={iconLinks} rel="sponsored">
                {iconComponents[icons]}
              </Link>
              <div className="loader">
                <div className="loader-wheel"></div>
              </div>
            </Stack>
            <Stack display="flex" alignItems="center" flexGrow={1}>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={sxHeader}
                mt={3}
              >
                {sheader}
              </Typography>
            </Stack>

            {/* <Typography variant="body2" component="div" sx={sxText} mt={1}>
              {stext}
            </Typography> */}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

// Define separate sx objects for each style group
const sxHeader = {
  fontSize: "1.5em",
  /* Additional styles for the header typography */
};

const sxText = {
  /* Additional styles for the text typography */
};
