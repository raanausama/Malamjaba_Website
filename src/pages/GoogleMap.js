import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import BingMapsReact from "bingmaps-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const GoogleMap = () => {
  const mapStyles = {
    width: "100%",
    height: "400px",
  };
  const pushpinCoordinates = { latitude: 34.7999, longitude: 72.5722 };


  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <BingMapsReact
            bingMapsKey="Ah76HTpzx2K1Bc-v-2HYhT5avQE3pLyLv_k_MH57pozl9QvzUYSvv05qQcGkCPZC"
            center = {[34.7999, 72.5722]}
            height="500px"
            width="100%"
            navigationBarMode = {"compact"}
            mapOptions={{
              navigationBarMode: "square",
            }}
            viewOptions={{
              center: {latitude: 34.7999, longitude: 72.5722},
              mapTypeId: "Aerial",
            }}
           
          >
          </BingMapsReact>
        </Grid>
      </Grid>
    </>
  );
};

export default GoogleMap;
