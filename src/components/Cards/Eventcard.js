import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({
  header1 = "",
  header2 = "",
  image = "",
  header3 = "",
}) {
  const cardContentStyle = {
    border: "1px solid blue",
    margin: "10px",
    height: 500,
    "&:hover": {
      border: "4px solid",
      borderColor: "#fcb817", // Remove the border color on hover
      margin: "0px",
      "& .MuiCardMedia-img": {
        transform: "scale(0.9)", // Reduce the image size on hover
      },
      "& .card-header2": {
        color: "#2596be",
      },
    },
  };

  return (
    <Card>
      <CardActionArea>
        <Box>
          <CardContent sx={cardContentStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="images"
                // style={{ padding: "5px" }}
              />
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                mt={3}
                sx={{ fontSize: "1.5em" }}
              >
                {header1}
              </Typography>
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{
                  fontSize: "2em",
                  textTransform: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  fontStyle: "italic", // Reset the text color to inherit
                }}
                // className="card-header2"
              >
                {header2}
              </Typography>
              <Typography variant="body1" component="h2">
                {header3}
              </Typography>
            </div>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}
