import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import BlogGrid from "../components/gridViews/BlogGrid";
import StaycationHero from "./StaycationHero";
import { Box, Grid, Stack, Typography, Avatar } from "@mui/material";
import ResponsiveAppBar from "../components/NavBar/NavBar";
import StaycationSeasonPackage from "../components/StaycationSeasonPackage/StaycationSeasonPackage";

function DineIn() {
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        image="/PicturesForWebsite/DineIn.JPG"
        heading="The Magnificient Slope"
        text="Rewind from work and reconnect with Nature"
      />
      <Box sx={{ padding: "10%" }}>
        <Grid
          container
          display="flex !important"
          justifyContent="center !important"
          
        >
          <Grid item md={6}>
            {/* <Avatar
              alt="Activities"
              src="images/DineIn/_L1A7728.JPG"
              sx={{ width: { xs: 250, sm: 450 }, height: { xs: 250, sm: 450 } }}
            /> */}
            <Grid
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
      </Box>
      {/* <StacationCover /> */}
      {/* <BlogGrid /> */}
      {/* <StaycationSeasonPackage
        image="images/DineIn/_L1A7808.JPG"
        buttonText={"Get Ready"}
      /> */}
      {/* <Sponsors /> */}
      <Footer bgImage="footer1.jpg" />
    </div>
  );
}

export default DineIn;
