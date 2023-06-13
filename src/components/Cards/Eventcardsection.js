import React from "react";
import ActionAreaCard from "../Cards/Eventcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import parallaxBG from "../../Assets/bg_content/parallax-bg.jpg";

const Eventcardsection = () => {
  return (
    <Grid container xs={12}>
      <div
        maxWidth="xl"
        style={{
          display: "flex",
          backgroundImage: `url(${parallaxBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          // height: "70vh",
          // padding: 50,
          opacity: "0.8",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            // paddingTop: "7vh",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="pastevent.jpg"
                header1="PAST EVENT"
                header2="Food Fest"
                header3="Cusine from all over Pakistan and a Qawalli Night"
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="cycling.jpg"
                header1="UPCOMING EVENT"
                header2="Mountain Bike Race"
                header3="From Cyclists all over Pakistan"
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                image="futureevent.jpg"
                header1="FUTURE EVENT"
                header2="Ski and Snowboarding Competition"
                header3="To Promote local talent and provide a platform for winter sports"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grid>
  );
};

export default Eventcardsection;
