import { Grid } from "@mui/material";
import React from "react";
import StaycationGridCard from "../Cards/StaycationGridCard";

const StaycationGrid = () => {
  return (
    <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/premium-suites-min.jpg"}
          heading={"Premium Suites"}
          text={"Luxury Premium Suites to make your stay memorable!"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/Cinema (2)-min.jpg"}
          heading={"Cinema"}
          text={"Indoor Cinema for your entertainment"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/conferenceRoom-min.JPG"}
          heading={"Meeting Rooms"}
          text={"Boardrooms for the conferences and professional meetings"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"delux-min.jpg"}
          heading={"Deluxe Rooms"}
          text={"Standard Rooms for your comfortable stay"}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/Activities/BanquetHall-min.JPG"}
          heading={"Banquet Hall"}
          text={"Perfect place for your destination wedding, corporate events etc."}
        />
      </Grid>
      <Grid item md={4}>
        <StaycationGridCard
          image={"/PicturesForWebsite/SwimmingPool-min.JPG"}
          heading={"Swimming Pool"}
          text={"Outdoor and temperature control swimming pool for your refreshment"}
        />
      </Grid>
    </Grid>
  );
};

export default StaycationGrid;
