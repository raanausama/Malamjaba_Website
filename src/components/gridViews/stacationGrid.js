import { Grid } from "@mui/material";
import React from "react";
import StaycationGridCard from "../Cards/StaycationGridCard";

const StaycationGrid = () => {
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/Malam-Jabba-pix.JPG"}
          heading={"Premium Rooms"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/cinema.jpg"}
          heading={"Cinema"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"meeting.jpg"}
          heading={"Meeting Rooms"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"delux.jpg"}
          heading={"Delux Rooms"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"weddings.jpg"}
          heading={"Wedding and event halls"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"pool.jpg"}
          heading={"Swimming Pool"}
          text={"Luxury Premium rooms to make your stay memorable"}
        />
      </Grid>
    </Grid>
  );
};

export default StaycationGrid;
