import React, { lazy, Suspense, useState } from "react";
import "./AnnouncementBanner.css";
import { Typography } from "@mui/material";

const AnnouncementBanner = () => {
  // const footerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className={`announcement-banner ${isHovered ? "paused" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Typography variant="body1" className="moving-text moving-text.paused " color='white'>Something's New Cooking...</Typography>
      </div>
    </>
  );
};

export default AnnouncementBanner;
