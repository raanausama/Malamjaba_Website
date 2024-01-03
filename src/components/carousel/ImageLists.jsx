import React from "react";
import { Grid } from "@mui/material";

export default function ImageLists() {
  

  return (
    <>
      {/* <Grid item xs={12} md={6} sx={{ height: "100%" }}>
        <div style={{ position: "relative" }}>
          <Carousel
            axis="vertical"
            verticalSwipe="natural"
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            selectedItem={0}
            emulateTouch={true}
            autoPlay={true}
            stopOnHover={true}
            swipeable={false}
            dynamicHeight={true}
            transitionTime={500}
            interval={5000}
            showIndicators={true}
            swipeScrollTolerance={false}
            style={{ height: "100%" }}
          >
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="pastevent.jpg"
                alt="pastevent"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="cycling.jpg"
                alt="cycling"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
            <div style={{ height: "100%", position: "relative" }}>
              <img
                src="futureevent.jpg"
                alt="futureevent"
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </Carousel>
        </div>
      </Grid> */}

      {/* <ImageList sx={{ overflow: "hidden" }}>
          <ImageListItem >
            <div className="hover-overlay" />
            <img src={Limage1} alt={"instagram"} loading="lazy" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage3} alt={"youtube"} loading="lazy" />
            <div className="hover-overlay" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton sx={{ color: "white", fontSize: "large" }}>
                  <InstagramIcon
                    onClick={() =>
                      navigate(
                        "/https://www.instagram.com/malamjabbaskiresort/"
                      )
                    }
                  />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              sx={{ background: "transparent" }}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
        </ImageList> */}
      {/* <Grid item xs={12} md={12}> */}
      <Grid container>
        <Grid item sx={12} sm={12} md={6}>
          <IconCards
            simage="/assets/sliderimage/instagram.jpg"
            sheader="malamjabbaskiresort"
            icons="Facebook"
            icons2="Instagram"
            iconLinks2="https://instagram.com/malamjabbaskiresortofficial?igshid=MzRlODBiNWFlZA=="
            iconLinks="https://www.facebook.com/MjSkiResort"
            // stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
            // sit amet metus eu, vestibulum placerat mi"
          />
        </Grid>
        <Grid item sx={12} sm={12} md={6}>
          <IconCards
            simage="/assets/sliderimage/facebook.jpg"
            sheader="malamjabbaskiresort"
            icons="Youtube"
            icons2="Tiktok"
            iconLinks2="https://www.tiktok.com/@mjskiresort?_t=8eUt9nOB3wX&_r=1"
            iconLinks="https://www.youtube.com/@malamjabbaskiresort4928"
            // stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
            // sit amet metus eu, vestibulum placerat mi"
          />
        </Grid>

        <Grid item sx={12} sm={12} md={6}>
          <IconCards
            simage="/assets/sliderimage/youtube.jpg"
            sheader="malamjabbaskiresort"
            icons='Twitter'
            iconLinks="https://twitter.com/Mjskiresort"
            // stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
            // sit amet metus eu, vestibulum placerat mi"
          />
        </Grid>
        <Grid item sx={12} sm={12} md={6}>
          <IconCards
            simage="/assets/sliderimage/facebook.jpg"
            sheader="malamjabbaskiresort"
            icons="LinkedIn"
            iconLinks="https://www.linkedin.com/company/malam-jabba-ski-resort/?viewAsMember=true"
            // stext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quam elit, interdum
            // sit amet metus eu, vestibulum placerat mi"
          />
        </Grid>
      </Grid>
    </>
  );
}
