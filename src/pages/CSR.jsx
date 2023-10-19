// import React from "react";
// // import Sponsors from "../components/sponsors/sponsorsFooter";
// import Footer from "../components/footer/footer";
// // import BlogGrid from "../components/gridViews/BlogGrid";
// import StaycationHero from "./StaycationHero";
// import { Box, Grid, Stack, Typography, Avatar, Container, Button } from "@mui/material";
// import ResponsiveAppBar from "../components/NavBar/NavBar";
// import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
// import NewFooter from "../components/footer/NewFooter";
// import PhotoAlbum from "react-photo-album";

// const photos = [
//   {
//     src: "CleanlinessDrive.jpeg",
//     width: 500,
//     height: 500,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "FirstAid.png",
//     width: 600,
//     height: 600,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "FreeAmbulanceService.png",
//     width: 400,
//     height: 400,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "Learning&DevelopmentofLocals.png",
//     width: 500,
//     height: 400,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "RehabilitationofMosque.png",
//     width: 600,
//     height: 400,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "RationDistribution.png",
//     width: 400,
//     height: 300,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
//   {
//     src: "WinterRoadClearance.png",
//     width: 400,
//     height: 300,
//     style: {
//       border: "10px solid white",
//       filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//       borderRadius: "10px",
//     },
//   },
// ];

// function CSRMain() {
//   return (
//     <div>
//       <ResponsiveAppBar />
//       <StaycationHero
//         image="/summer-activities.jpg"
//         heading="Empowering Communities, Enriching Lives:"
//         text="Our Commitment to Corporate Social Responsibility."
//       />
//       {/* <Box sx={{ padding: "5%" }}>
//         <Grid
//           container
//           display="flex !important"
//           justifyContent="center !important"
//           alignItems="center !important"
//         >
//           <Grid item md={6}>
//             <Avatar
//               alt="Activities"
//               src="/images/CSR/Picture1.jpg"
//               sx={{
//                 width: { xs: 350, sm: 400 },
//                 height: { xs: 350, sm: 400 },
//                 position: "bottom",
//               }}
//             />
//           </Grid>
//           <Grid
//             Item
//             md={6}
//             mt={{ xs: 10, sm: 10, md: 10, lg: 5 }}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textAlign: {
//                 xs: "Center",
//                 sm: "Center",
//                 md: "Center",
//                 lg: "start",
//               },
//             }}
//           >
//             <Stack direction="column">
//               <Typography variant="h3" color="#094e9d" sx={{ pb: "1em" }}>
//                 Our Contribution to society
//               </Typography>
//               <Typography sx={{ fontSize: "1.25em" }}>
//                 Corporate Social Responsibility (CSR) is an essential aspect of
//                 any business that aims to make a positive impact on society. At
//                 our company, we take CSR seriously, and we believe that it is
//                 our duty to give back to the community that has supported us
//                 throughout the years. Our CSR initiatives are geared towards
//                 creating a sustainable future by addressing the most pressing
//                 issues facing our communities. One of our most significant
//                 initiatives is our free medical camps, which we organize
//                 regularly in various communities. We understand that access to
//                 quality healthcare is a fundamental right of every individual,
//                 and our medical camps aim to provide medical aid to those who
//                 cannot afford it. Through these camps, we provide free medical
//                 checkups, consultations, and basic medication to the
//                 underprivileged, thereby improving their overall health and
//                 well-being. Another initiative that we take pride in is our
//                 plantation drive. We understand the importance of preserving the
//                 environment and ensuring that our planet remains green and
//                 healthy for future generations. As part of our plantation drive,
//                 we organize tree-planting campaigns in various areas, which not
//                 only help to reduce carbon emissions but also enhance the beauty
//                 of the environment. In addition to these initiatives, we also
//                 undertake the renovation of local schools and mosques. We
//                 believe that education is the key to a better future, and every
//                 child deserves access to quality education. As such, we identify
//                 schools that are in need of renovation and undertake the
//                 necessary repairs to ensure that the learning environment is
//                 conducive to the development of young minds. Similarly, we also
//                 identify local mosques that require repairs and undertake the
//                 necessary renovations to ensure that the local community has
//                 access to a clean and safe place of worship. In conclusion, we
//                 understand that businesses have a responsibility towards
//                 society, and we take this responsibility seriously. Our CSR
//                 initiatives are geared towards creating a sustainable future by
//                 addressing the most pressing issues facing our communities.
//                 Through our free medical camps, plantation drives, and
//                 renovation of local schools and mosques, we aim to make a
//                 positive impact on society and contribute to the overall
//                 well-being of our communities.
//               </Typography>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Box> */}

//       <Container maxWidth="lg" sx={{ mb: 3, mt: 3, }}>
//         <Grid
//           container
//           display="flex !important"
//           justifyContent="center !important"
//           gap={2}
//         >
//           {/* <Button sx={{ animation: 'pulse-border-2 1.5s linear infinite', fontFamily: 'font-family: "Allison", handwriting !important'}}> hi boi--- </Button> */}
//           <Grid item sx={6}>
//             <img
//               src="CleanlinessDrive.jpeg"
//               alt="img"
//               style={{
//                 width: 300,
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <img
//               src="FirstAid.png"
//               alt="img"
//               style={{
//                 width: 400,
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <img
//               src="FreeAmbulanceService.png"
//               alt="img"
//               style={{
//                 width: 300,
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>

//           <Grid item xs={6}>
//             <img
//               src="RationDistribution.png"
//               alt="img"
//               style={{
//                 width: 300,
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <img
//               src="WinterRoadClearance.png"
//               alt="img"
//               style={{
//                 width: 300,
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <img
//               src="Learning&DevelopmentofLocals.png"
//               alt="img"
//               style={{
//                 width: "100%",
//                 height: 300,
//                 border: "10px solid white",
//                 filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
//                 borderRadius: "10px",
//               }}
//             />
//           </Grid>

//         </Grid>
//       </Container>
//       {/* <PhotoAlbum
//         layout="rows"
//         photos={photos}
//         style={{
//           pb: "2em",
//         }}
//       /> */}
//       <NewFooter />
//     </div>
//   );
// }

// export default CSRMain;

import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Avatar,
  Container,
  Divider,
} from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import NewFooter from "../components/footer/NewFooter";

function CSRMain() {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image="/summer-activities.jpg"
        heading="Empowering Communities, Enriching Lives:"
        text="Our Commitment to Corporate Social Responsibility."
      />
      <Container fixed sx={{ mb: 10 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                Cleanliness Drive.
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: "medium",
                  borderColor: "#D9BD90",
                  width: "100px",
                  mb: "5",
                }}
              />
              <Typography
                mt={4}
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                {" "}
                To provide a pleasant and fresh experience to the tourists and
                also a way of giving back to nature, regular cleanliness drives
                for a soulful vacation.{" "}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="CleanlinessDrive.jpeg"
              alt="Cleanliness drives"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Grid item xs={12} sm={12} md={6} mt={5}>
              <img
                src="FirstAid.png"
                alt="First Aid"
                style={{
                  maxWidth: "90%",
                  height: 450,
                  borderRadius: "50px 0px 50px 0px",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Stack
                direction="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontSize: "25px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: '"Allison", handwriting !important',
                    marginTop: 5,
                  }}
                >
                  Quick Rescue Teams.
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "130px",
                    mb: "5",
                  }}
                />
                <Typography
                  mt={4}
                  sx={{
                    fontSize: "20px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  {" "}
                  Keeping in mind the safety of the tourists, we have rescue
                  teams on the ready 24/7 for any mishaps or unfortunate
                  incidents as safety is the utmost priority.{" "}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                Ration Distribution.
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: "medium",
                  borderColor: "#D9BD90",
                  width: "100px",
                  mb: "5",
                }}
              />
              <Typography
                mt={4}
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Jost", sans-serif',
                  mr: 2,
                }}
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="RationDistribution.png"
              alt="Ration Distribution drives"
              style={{
                maxWidth: "90%",
                height: 350,
                borderRadius: "50px 0px 50px 0px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          </Grid>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: { xs: "column-reverse", md: "row" },
            }}
          >
            <Grid item xs={12} sm={12} md={6} mt={5}>
              <img
                src="WinterRoadClearance.png"
                alt="Road Clearance"
                style={{
                  maxWidth: "90%",
                  height: 400,
                  borderRadius: "50px 0px 50px 0px",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Stack
                direction="column"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontSize: "25px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: '"Allison", handwriting !important',
                    marginTop: 5,
                  }}
                >
                  Road Clearance.
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "130px",
                    mb: "5",
                  }}
                />
                <Typography
                  mt={4}
                  sx={{
                    fontSize: "20px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: '"Jost", sans-serif',
                  }}
                >
                  {" "}
                  Keeping in mind the safety of the tourists, we have rescue
                  teams on the ready 24/7 for any mishaps or unfortunate
                  incidents as safety is the utmost priority.{" "}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                Ration Distribution.
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: "medium",
                  borderColor: "#D9BD90",
                  width: "80px",
                  mb: "5",
                }}
              />
              <Typography
                mt={4}
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="RationDistribution.png"
              alt="MarcoPolo"
              style={{
                maxWidth: "90%",
                height: 400,
                borderRadius: "50px 0px 50px 0px",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="WinterRoadClearance.png"
              alt="Summer Activities"
              style={{
                maxWidth: "90%",
                height: 400,
                borderRadius: "50px 0px 50px 0px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                Road Clearing
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: "medium",
                  borderColor: "#D9BD90",
                  width: "130px",
                  mb: "5",
                }}
              />
              <Typography
                mt={4}
                sx={{
                  fontSize: "20px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                {" "}
                To save any hassle or blockage. We have all the necessary
                equipment and workforce to clear the snow blocked roads or
                landslides whenever needed.{" "}
              </Typography>
            </Stack>
          </Grid> */}
        <Grid
          container
          // sx={{
          //     background:
          //       "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(230,230,230,1) 50%, rgba(255,255,255,1) 100%)",
          //   }}
        >
          <Grid
            item
            xs={12}
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Stack
              direction="column"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
            >
              <Typography
                mt={3}
                sx={{
                  fontSize: "25px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                Learning and Development.
              </Typography>
              <Divider
                sx={{
                  borderBottomWidth: "medium",
                  borderColor: "#D9BD90",
                  width: "130px",
                  mb: "5",
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="Learning&DevelopmentofLocals.png"
              alt="Summer Activities"
              style={{
                maxWidth: "93%",
                height: 300,
                borderRadius: "50px 50px 50px 50px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5} sx={{ padding: 3 }}>
            <Typography
              mt={3}
              mb={3}
              sx={{
                fontSize: "20px",
                lineHeight: "1.4",
                fontWeight: "400",
                letterSpacing: "2px",
                textTransform: "none",
                color: "#898989",
                fontFamily: '"Jost", sans-serif',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
          
        >
          <Grid item md={6}> */}
      {/* <Avatar
              alt="Activities"
              src="images/DineIn/_L1A7728.JPG"
              sx={{ width: { xs: 250, sm: 450 }, height: { xs: 250, sm: 450 } }}
            /> */}
      {/* <Grid
          container
          style={{ padding: "4px" }}
          spacing={2}
          display="flex"
          alignItems="center"
          padding="5%"
        >
          <Grid item xs={6}>
            <img
              src="images/DineIn/_L1A7728.JPG"
              alt="First Image"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  src="images/DineIn/_L1A7686.JPG"
                  alt="Second Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12}>
                <img
                  src="images/DineIn/IMG_3394.JPG"
                  alt="Third Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          </Grid>
          <Grid
            Item
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
            <Stack direction="column" padding="5%">
              <Typography variant="h3" color="#094e9d">
                Dine In with us:
              </Typography>
              <Typography>
                Welcome to our restaurant, where we specialize in the delicious
                flavors of Pakistani and Chinese cuisine. Our menu is carefully
                crafted to showcase the best of both worlds, with a range of
                dishes that are sure to satisfy any craving. From savory
                biryanis and succulent kebabs to spicy noodles and stir-fried
                vegetables, we offer a wide variety of options to tantalize your
                taste buds. Our chefs use only the freshest ingredients,
                combining traditional recipes with modern techniques to create
                dishes that are both authentic and innovative. Whether you're in
                the mood for a hearty meal or a quick snack, our restaurant has
                something for everyone. Our friendly and attentive staff are
                always on hand to help you choose from our extensive menu, and
                our cozy atmosphere is perfect for a relaxed meal with friends
                and family. So come and experience the flavors of Pakistan and
                China at our restaurant. We can't wait to share our love of food
                with you!In addition to our delicious Pakistani and Chinese
                cuisine, we also have ice cream and coffee kiosks for those
                looking for a sweet treat or a caffeine fix. Our ice cream is
                made with the freshest ingredients and comes in a variety of
                flavors to satisfy any craving. Whether you're in the mood for
                classic vanilla, rich chocolate, or something a bit more
                adventurous like mango or vanilla, our ice cream kiosk has got
                you covered. And for coffee lovers, our coffee kiosk serves up a
                range of specialty coffees, teas, and other beverages. From
                creamy lattes and bold espressos, we have something for
                everyone. We use only the highest quality coffee beans and
                ingredients to ensure that every cup is a true delight. So
                whether you're stopping by for a meal or just a quick snack, be
                sure to check out our ice cream and coffee kiosks for a little
                extra indulgence. We guarantee that you won't be disappointed!
                Don't forget to check out our Top Station where you can enjoy
                some classic Pakistani Chai and crispy fries. Our chai is made
                with a unique blend of spices and is the perfect accompaniment
                to any meal. And our fries are crispy on the outside and soft on
                the inside, making them the ideal snack to satisfy any craving.
                Whether you're taking a break from shopping or just looking for
                a quick snack, our Top Station is the perfect spot to relax and
                recharge. With its comfortable seating and welcoming atmosphere,
                you'll feel right at home as you enjoy your chai and fries. So
                make sure to stop by our Top Station during your visit to our
                restaurant. We promise that it will be an experience that you
                won't forget!
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box> */}
      {/* <StacationCover /> */}
      {/* <BlogGrid /> */}
      {/* <StaycationSeasonPackage
        image="images/DineIn/_L1A7808.JPG"
        buttonText={"Get Ready"}
      /> */}
      {/* <Sponsors /> */}
      {/* <Footer bgImage="footer1.jpg" /> */}
      <NewFooter />
    </div>
  );
}

export default CSRMain;
