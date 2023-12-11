import React, { useEffect, useState } from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import { Box, Grid, Stack, Typography, Avatar, Divider } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import NewFooter from "../components/footer/NewFooter";
import slope1 from "../Assets/bg_content/slope1.png";
import slope2 from "../Assets/bg_content/slope2.png";
import axios from "axios";
import gsap from "gsap";

function Slope() {
  const [slopeData, setSlopeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getSlopePageData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/slope/getSlopePageData?username=ranausama`
      );
      // Handle the response data here
      console.log("Data:", response.data);
      setLoading(true);
      setSlopeData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };
  console.log("slopeData", slopeData);
  useEffect(() => {
    getSlopePageData();
  }, [loading]);
  console.log("__________Slope Data_______________", slopeData);
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image="Images/Slope/dsfgfgg.jpg"
        // image={`http://localhost:5000/${slopeData.hero_img}`}
        heading="A Symphony of Serenity -"
        heading2="Malam Jabba's Magnificent Slopes Await you"
        text="The Identity of Malam Jabba Ski Resort"
        // heading={slopeData.hero_title}
        // text={slopeData.hero_txt}
      />
      <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
        >
          <Grid item xs={12} mb={10} display={"flex"}>
            <Stack direction="column">
              <Typography
                textAlign={"center"}
                variant="h4"
                color="#094e9d"
                sx={{ fontFamily: "Aktiv", m: 2 }}
              >
                About the Resort
                {/* {slopeData.ski_title1}<br/> */}
                {/* {slopeData.ski_title2} */}
              </Typography>
              <Typography
                textAlign={"center"}
                variant="subtitle"
                sx={{ fontFamily: "Aktiv", m: 2 }}
              >
                Malam Jabba Ski Resort, a beautiful destination stationed amidst
                the Hindu Kush and Himalayan mountains. It is an all-season
                destination, home to a variety of exhilarating activities such
                as Skiing, Snowboarding, Snow Tubbing, Ski Rental in our winter
                season as well as chairlift, zipline, human slingshot, giant
                swing, VR rides, and a couple of games for kids to enjoy as
                well. All the rides and their equipment conform to
                state-of-the-art safety and quality procedures and are tested
                and reviewed by a team of foreign experts and engineers,
                multiple times a year. The resort is also accompanied by a
                5-star hotel – PC Malam Jabba, offering premium accommodation to
                visitors.
                {/* {slopeData.ski_txt} */}
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} padding="1%">
            <Grid
              container
              style={{ padding: "4px" }}
              spacing={2}
              display="flex"
              alignItems="center"
            >
              <Grid item xs={6}>
                <img
                  src="/Images/Slope/IMG_9404-1-min.JPG"
                  // src={`http://localhost:5000/${slopeData.ski_img1}`}
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
                  <Grid item xs={12}>
                    <img
                      src="/Images/Slope/fghgfh-min.jpg"
                      // src={`http://localhost:5000/${slopeData.ski_img2}`}
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
                  <Grid item xs={12}>
                    <img
                      src={slope1}
                      // src={`http://localhost:5000/${slopeData.ski_img3}`}
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
          <Grid
            item
            md={6}
            mt={{ xs: 10, sm: 10, md: 10, lg: 5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: {
                xs: "Center",
                sm: "Center",
                md: "Center",
                lg: "start",
              },
            }}
          >
            <Stack direction="column">
              <Typography
                variant="h4"
                color="#094e9d"
                sx={{ fontFamily: "Aktiv", m: 2 }}
              >
                Malam Jabba Ski Resort - <br /> Where Nature Meets Adventure:
                {/* {slopeData.ski_title1}<br/> */}
                {/* {slopeData.ski_title2} */}
              </Typography>
              <Typography variant="subtitle" sx={{ fontFamily: "Aktiv", m: 2 }}>
                As you travel up the curvy roads of Swat, eyeing breathtaking
                views of the valley, the journey concludes with a sight that
                makes all the traveling worth it – Malam Jabba Ski Resort, a
                beautiful destination stationed amidst the Hindu Kush and
                Himalayan mountains. It is the only public alpine-style Ski
                Resort in Pakistan with state-of-the-art infrastructure and
                premium accommodations and world-class winter sports facilities.
                It is Pakistan's only public alpine-style Ski Resort with
                state-of-the-art infrastructure, premium accommodations, and
                world-class winter sports facilities. The resort commenced its
                operations in 2016.
                {/* {slopeData.ski_txt} */}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        sx={{ width: "100%", height: "80%", alignItems: "center" }}
      >
        <Grid item md={6} xs={12} sm={12} lg={6}>
          <Box sx={{ padding: 5 }}>
            <Typography
              color="#094e9d"
              variant="h4"
              fontWeight={"400"}
              // textAlign={'center'}
              sx={{ fontFamily: "Aktiv", m: 1, textAlign: "center" }}
              // fontSize={"3rem"}
            >
              Technicalities of the Slope
              {/* {slopeData.tech_title} */}
            </Typography>

            <Typography variant="subtitle" sx={{ fontFamily: "Aktiv" }}>
              The slope at Malam Jabba is one of its kind, well-maintained and
              perfect for skiing and snowboarding. The management at Malam Jabba
              Ski Resort ensures that the snow is groomed to perfection,
              especially during our winter season. The top station elevation of
              the slope is 2656 Meters while the base elevation is 2472 Meters.
              The length of the slope is 720 Meters and its width is 60 Meters.
              Moreover, the average slope gradient is 28%, providing an
              exhilarating skiing experience for enthusiasts.
              {/* {slopeData.tech_txt} */}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sm={12} lg={6}>
          <Grid
            container
            style={{ padding: "4px" }}
            spacing={2}
            display="flex"
            alignItems="center"
          >
            <Grid item xs={6}>
              <img
                src="/Images/Slope/sdfrr5fg1-min.jpg"
                // src={`http://localhost:5000/${slopeData.tech1_img}`}
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
                <Grid item xs={12}>
                  <img
                    src="/Images/Slope/dsfgfgg-min.jpg"
                    // src={`http://localhost:5000/${slopeData.tech2_img}`}
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
                <Grid item xs={12}>
                  <img
                    src={slope2}
                    // src={`http://localhost:5000/${slopeData.tech3_img}`}
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
      <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
        >
          <Grid item md={6} padding="1%">
          <img
                  src="/piston_bully.jpg"
                  // src={`http://localhost:5000/${slopeData.ski_img1}`}
                  alt="First Image"
                  style={{
                    width: "50%",
                    height: "50vh",
                    border: "10px solid white",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "10px",
                  }}
                />
                <img
                  src="/Picture2.jpg"
                  // src={`http://localhost:5000/${slopeData.ski_img1}`}
                  alt="First Image"
                  style={{
                    width: "50%",
                    height: "50vh",
                    border: "10px solid white",
                    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    borderRadius: "10px",
                  }}
                />
          </Grid>
          <Grid
            item
            md={6}
            mt={{ xs: 10, sm: 10, md: 10, lg: 5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: {
                xs: "Center",
                sm: "Center",
                md: "Center",
                lg: "start",
              },
            }}
          >
            <Stack direction="column">
              <Typography
                variant="h4"
                color="#094e9d"
                sx={{ fontFamily: "Aktiv", m: 2 }}
              >
                Piston Bully:
                {/* {slopeData.ski_title1}<br/> */}
                {/* {slopeData.ski_title2} */}
              </Typography>
              <Typography variant="subtitle" sx={{ fontFamily: "Aktiv", m: 2 }}>
                The Piston Bully machine at Malam Jabba Ski Resort is a
                specialized snow grooming vehicle designed to meticulously
                maintain and shape the ski slopes, ensuring optimal skiing
                conditions by smoothing and packing the snow for a safe and
                enjoyable experience for skiers and snowboarders.
                {/* {slopeData.ski_txt} */}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* <StacationCover /> */}
      {/* <BlogGrid /> */}
      {/* <StaycationSeasonPackage
        image="/PicturesForWebsite/17.jpg"
        buttonText={"Get Ready"}
      /> */}
      {/* <Sponsors /> */}
      {/* <Footer bgImage="footer1.jpg" /> */}
      <Box display="flex" flexDirection="column" alignItems="center" py="2em">
        <Typography color="#094e9d" variant="h3" fontFamily={"Aktiv"}>
          Meet the Team
        </Typography>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              sx={{ p: "2em", height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  width: "60%",
                  border: "3px solid #e0ba4b",
                  overflow: "hidden",
                  borderRadius: "1em",
                }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <img
                  src="/team.JPG"
                  alt="Staycation"
                  style={{ width: "100%", height: "40vh" }}
                  // borderRadius="1em"
                />
                {/* <Box sx={{ padding: "5%" }}> */}
                {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}

                {/* <Typography
                    variant="h4"
                    fontFamily={"Aktiv"}
                    sx={{
                      textDecoration: "none",
                      // fontFamily: '"Allison", handwriting !important',
                      color: "#11357C",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#BD9A5F";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#11357C";
                    }}
                    // onClick={handleOpenModal}
                  >
                    Martin Schultz
                  </Typography> */}

                {/* <Divider
                    sx={{
                      borderBottomWidth: "medium",
                      borderColor: "#D9BD90",
                      width: "100px",
                    }}
                  /> */}
                {/* <Typography fontFamily={"Aktiv"}>GeneralManager</Typography> */}
                {/* </Box> */}
              </Box>
            </Box>
          </Grid>

          {/* <Grid item xs={6} md={3}>
            <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "3px solid #e0ba4b",
                  overflow: "hidden",
                  borderRadius: "1em",
                }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <img
                  src="/ShahzadAlam-DeputyGeneralManager.jpg"
                  alt="Staycation"
                  style={{ width: "100%", height: "50vh" }}
                  // borderRadius="1em"
                />
                <Box sx={{ padding: "5%" }}> */}
          {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}

          {/* <Typography
                    variant="h4"
                    fontFamily={"Aktiv"}
                    sx={{
                      textDecoration: "none",
                      // fontFamily: '"Allison", handwriting !important',
                      color: "#11357C",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#BD9A5F";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#11357C";
                    }} */}
          {/* // onClick={handleOpenModal} */}
          {/* >
                    Shahzad Alam
                  </Typography>

                  <Divider
                    sx={{
                      borderBottomWidth: "medium",
                      borderColor: "#D9BD90",
                      width: "100px",
                    }}
                  />
                  <Typography fontFamily={"Aktiv"}>
                    Deputy General Manager
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "3px solid #e0ba4b",
                  overflow: "hidden",
                  borderRadius: "1em",
                }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <img
                  src="/AshfaqMalik-AssistantManagerAdmin.jpeg"
                  alt="Staycation"
                  style={{ width: "100%", height: "50vh" }}
                  // borderRadius="1em"
                />
                <Box sx={{ padding: "5%" }}>
                  {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}

          {/* <Typography
                    variant="h4"
                    fontFamily={"Aktiv"}
                    sx={{
                      textDecoration: "none",
                      // fontFamily: '"Allison", handwriting !important',
                      color: "#11357C",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#BD9A5F";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#11357C";
                    }} */}
          {/* // onClick={handleOpenModal}
                  >
                    Ashfaq Malik
                  </Typography>

                  <Divider
                    sx={{
                      borderBottomWidth: "medium",
                      borderColor: "#D9BD90",
                      width: "100px",
                    }}
                  />
                  <Typography fontFamily={"Aktiv"}>
                    Assitant Manager Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{ p: "1em", height: "100%", mb: "1em" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  border: "3px solid #e0ba4b",
                  overflow: "hidden",
                  borderRadius: "1em",
                }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <img
                  src="/BilalTariq-TechnicalManager.jpeg"
                  alt="Staycation"
                  style={{ width: "100%", height: "50vh" }} */}
          {/* // borderRadius="1em"
                />
                <Box sx={{ padding: "5%" }}>
                  {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}

          {/* <Typography
                    variant="h4"
                    fontFamily={"Aktiv"}
                    sx={{
                      textDecoration: "none",
                      // fontFamily: '"Allison", handwriting !important',
                      color: "#11357C",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#BD9A5F";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#11357C";
                    }} */}
          {/* //         // onClick={handleOpenModal}
            //       >
            //         Bilal Tariq
            //       </Typography>

            //       <Divider */}
          {/* //         sx={{ */}
          {/* //           borderBottomWidth: "medium",
            //           borderColor: "#D9BD90",
            //           width: "100px",
            //         }}
            //       />
            //       <Typography fontFamily={"Aktiv"}>
            //         Technical Manager
            //       </Typography>
            //     </Box>
            //   </Box>
            // </Box> */}
          {/* // </Grid> */}
        </Grid>
      </Box>
      <NewFooter />
    </div>
  );
}

export default Slope;
