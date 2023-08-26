import React from "react";
import "./sponsorImage.css";
import { Grid } from "@mui/material";

const SponsorImage = ({ image = "", altText = "" }) => {
  return (
    <>
      <img
        style={{ width: "7rem", height: "6rem" }}
        src={image}
        alt={altText}
      />
    </>
  );
};

export default SponsorImage;
