import React from "react";
// import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
// import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import { Box, Grid, Stack, Typography, Avatar, Container } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";
import NewFooter from "../components/footer/NewFooter";
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: "CleanlinessDrive.jpeg", width: 500, height: 300 },
  { src: "FirstAid.png", width: 600, height: 300 },
  { src: "FreeAmbulanceService.png", width: 400, height: 300 },
  { src: "Learning&DevelopmentofLocals.png", width: 700, height: 400 },
  { src: "RehabilitationofMosque.png", width: 1190, height: 400 },
  { src: "RationDistribution.png", width: 900, height: 300 },
  { src: "WinterRoadClearance.png", width: 700, height: 300 },
];

function CSRMain() {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image="/summer-activities.jpg"
        heading="Empowering Communities, Enriching Lives:"
        text="Our Commitment to Corporate Social Responsibility."
      />
      <Box sx={{ padding: "5%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
          alignItems="center !important"
        >
          <Grid item md={6}>
            <Avatar
              alt="Activities"
              src="/images/CSR/Picture1.jpg"
              sx={{ width: { xs: 350, sm: 400 }, height: { xs: 350, sm: 400 }, position: "bottom" }}
            />
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
            <Stack direction="column">
              <Typography variant="h3" color="#094e9d" sx={{pb:"1em"}}>
                Our Contribution to society
              </Typography>
              <Typography sx={{fontSize:"1.25em"}}>
                Corporate Social Responsibility (CSR) is an essential aspect of
                any business that aims to make a positive impact on society. At
                our company, we take CSR seriously, and we believe that it is
                our duty to give back to the community that has supported us
                throughout the years. Our CSR initiatives are geared towards
                creating a sustainable future by addressing the most pressing
                issues facing our communities. One of our most significant
                initiatives is our free medical camps, which we organize
                regularly in various communities. We understand that access to
                quality healthcare is a fundamental right of every individual,
                and our medical camps aim to provide medical aid to those who
                cannot afford it. Through these camps, we provide free medical
                checkups, consultations, and basic medication to the
                underprivileged, thereby improving their overall health and
                well-being. Another initiative that we take pride in is our
                plantation drive. We understand the importance of preserving the
                environment and ensuring that our planet remains green and
                healthy for future generations. As part of our plantation drive,
                we organize tree-planting campaigns in various areas, which not
                only help to reduce carbon emissions but also enhance the beauty
                of the environment. In addition to these initiatives, we also
                undertake the renovation of local schools and mosques. We
                believe that education is the key to a better future, and every
                child deserves access to quality education. As such, we identify
                schools that are in need of renovation and undertake the
                necessary repairs to ensure that the learning environment is
                conducive to the development of young minds. Similarly, we also
                identify local mosques that require repairs and undertake the
                necessary renovations to ensure that the local community has
                access to a clean and safe place of worship. In conclusion, we
                understand that businesses have a responsibility towards
                society, and we take this responsibility seriously. Our CSR
                initiatives are geared towards creating a sustainable future by
                addressing the most pressing issues facing our communities.
                Through our free medical camps, plantation drives, and
                renovation of local schools and mosques, we aim to make a
                positive impact on society and contribute to the overall
                well-being of our communities.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
     <PhotoAlbum layout="rows" photos={photos} sx={{pb:"2em"}} />
      <NewFooter />
    </div>
  );
}

export default CSRMain;
