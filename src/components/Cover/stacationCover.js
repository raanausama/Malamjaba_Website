import React, { useRef } from "react";
import "./StacationCover.css";
import { Grid, Box, Typography } from "@mui/material";
import gsap from "gsap";

const StacationCover = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const gridRef = useRef(null);
  return (
    <Grid
      container
      sx={{ width: "100%", height: "80%", alignItems: "center" }}
      ref={gridRef}
    >
      <Grid item md={6} xs={12} sm={12} lg={6} sx={{ padding: "50px" }}>
        <Typography
          color="#094e9d"
          variant="h3"
          fontFamily="TrajanPro3Black"
          // fontWeight={"400"}
          // fontSize={"3rem"}
        >
          Welcome To <br /> Malam Jabba Resort
        </Typography>
        <Typography variant="h5" color="#094e9d">
          The First Ski Resort In Pakistan
        </Typography>
        <Typography variant="subtitle">
          Nestled in a landscape that offers all natural wonders of Swat, the
          resort is a complete bliss for thrill seekers. Apart from being one of
          the top ski resorts in the country, it also aims to provide
          exclusively exquisite standards of staycation amidst the mountains.
          <br />
          The resort is located in a meticulously beautiful location amidst
          snow-covered peaks and underneath clear blue sky. An exclusive area
          aimed to provide the perfect adrenaline shot through adventure and
          thrill activities.
        </Typography>
      </Grid>
      <Grid item md={6} xs={12} sm={12} lg={6} padding="2%">
        {/* <div className="image-container">
          <img src="accommodation-cover.png" alt="" style={{ width: "100%" }} />
        </div> */}
        <Grid
          container
          style={{ padding: "4px" }}
          spacing={2}
          display="flex"
          alignItems="center"
        >
          <Grid item xs={6} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <img
              src="/PicturesForWebsite/1.jpg"
              alt="First Image"
              style={{
                width: "100%",
                height: "auto",
                border: "10px solid white",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                borderRadius: "10px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img
                  src="PicturesForWebsite/Malam-Jabba-pix.JPG"
                  alt="Second Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    border: "10px solid white",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <img
                  src="PicturesForWebsite/Marcopolo.JPG"
                  alt="Third Image"
                  style={{
                    width: "100%",
                    height: "auto",
                    border: "10px solid white",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StacationCover;
