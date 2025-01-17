import React, { useEffect, useState } from "react";
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
import axios from "axios";

function DineIn() {
  const [dineData, setDineData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDineData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/dine/getDinePageData?username=ranausama`
      );
      // Handle the response data here
      console.log("Data:", response.data);
      setLoading(true);
      setDineData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  // const footerRef = useRef(null);
  // const [data, setData] = useState([]);
  console.log("dineData", dineData);
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(`http://127.0.0.1:8000/api/homepage`);
    //     setData(response.data);
    //     console.log('yoodata', response.data.date.general[1]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchData();
    getDineData();
  }, [loading]);
  return (
    <div>
      <ResponsiveAppBar />
      <StaycationHero
        // image="/PicturesForWebsite/DineIn.JPG"
        image={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.hero_img}`}
        // heading="DineIn Services"
        heading={dineData?.hero_title}
        // text="Enjoy diverse culinary experiences with beautiful landscapes"

        text={dineData?.hero_txt}
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
                  fontFamily: "Aktiv",

                  // fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                {dineData?.rest1_title}
                {/* Marcopolo */}
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
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: "Aktiv",

                  // fontFamily: '"Jost", sans-serif',
                }}
              >
                {dineData?.rest1_txt}
                {/* Experience culinary excellence at its finest at MarcoPolo
                Restaurant, nestled within the luxurious Pearl Continental Malam
                Jabba. Indulge in a symphony of flavors as our talented chefs
                craft exquisite dishes that blend traditional Pakistani cuisine
                with international flair.{" "} */}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest1_img}`}
              // src="/DineIn/Marcopolo.png"
              alt="MarcoPolo"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
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
                // src="/DineIn/MarcopoloBistro.png"
                src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest2_img}`}
                alt="Marcopolo Bistro"
                style={{
                  maxWidth: "90%",
                  // height: 500,
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
                    fontFamily: "Aktiv",

                    // fontFamily: '"Allison", handwriting !important',
                    marginTop: 5,
                  }}
                >
                  {/* Marcopolo Bistro. */}
                  {dineData?.rest2_title}
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
                    fontSize: "17px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: "Aktiv",

                    // fontFamily: '"Jost", sans-serif',
                  }}
                >
                  {dineData?.rest2_txt}
                  {/* Indulge in a symphony of flavors crafted by our expert chefs,
                  surrounded by the stunning natural beauty of the Swat Valley.
                  From delectable local cuisine to international delights,
                  MarcoPolo Bistro promises a dining experience like no other. */}
                </Typography>
              </Stack>
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
                Tai Pan.
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
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                {" "}
                Treat yourself in an exquisite culinary journey at Tai Pan, the
                premier Chinese restaurant at Pearl Continental Malam Jabba.
                Savor the rich flavors of authentic Chinese cuisine prepared by
                our master chefs, all while enjoying breathtaking mountain
                views.{" "}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src="/DineIn/TaiPan.png"
              alt="MarcoPolo"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
              }}
            />
          </Grid> */}
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
                  fontFamily: "Aktiv",

                  // fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                {/* Tai Pan. */}
                {dineData?.rest3_title}
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
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: "Aktiv",

                  // fontFamily: '"Jost", sans-serif',
                }}
              >
                {dineData?.rest3_txt}
                {/* Treat yourself in an exquisite culinary journey at Tai Pan, the
                premier Chinese restaurant at Pearl Continental Malam Jabba.
                Savor the rich flavors of authentic Chinese cuisine prepared by
                our master chefs, all while enjoying breathtaking mountain
                views.{" "} */}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              // src="/DineIn/TaiPan.png"
              src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest3_img}`}
              alt="TaiPan"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
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
                src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest4_img}`}
                // src="/DineIn/lazeezRest.jpg"
                alt="Lazeez Restraunt"
                style={{
                  maxWidth: "90%",
                  // height: 500,
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
                    fontFamily: "Aktiv",

                    // fontFamily: '"Allison", handwriting !important',
                    marginTop: 5,
                  }}
                >
                  {/* Lazeez Restaurant. */}
                  {dineData?.rest4_title}
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
                    fontSize: "17px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: "Aktiv",

                    // fontFamily: '"Jost", sans-serif',
                  }}
                >
                  {dineData?.rest4_txt}
                  {/* Experience culinary excellence amidst the stunning
                  snow-covered slopes at Lazeez Restaurant, your ultimate dining
                  destination at Malam Jabba Ski Resort. Indulge in a delectable
                  fusion of local flavors, served with warm hospitality in a
                  cozy mountain setting.{" "} */}
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
                  fontFamily: "Aktiv",

                  // fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                {dineData?.rest5_title}
                {/* Gloria Jeans. */}
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
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: "Aktiv",

                  // fontFamily: '"Jost", sans-serif',
                }}
              >
                {dineData?.rest5_txt}
                {/* Get the perfect blend of warmth and flavor at Gloria Jeans,
                nestled in the heart of Malam Jabba Ski Resort. Indulge in our
                rich, aromatic coffees and delightful snacks as you take in the
                breathtaking mountain views. Whether you're hitting the slopes
                or simply seeking a cozy retreat, Gloria Jeans at Malam Jabba
                Ski Resort is your go-to destination for comfort and
                refreshment. views.{" "} */}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest5_img}`}
              // src="/DineIn/gloria.jpg"
              alt="TaiPan"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
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
                src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest6_img}`}
                // src="/DineIn/botFood.jpg"
                alt="Top Food Court"
                style={{
                  maxWidth: "90%",
                  // height: 500,
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
                    fontFamily: "Aktiv",

                    // fontFamily: '"Allison", handwriting !important',
                    marginTop: 5,
                  }}
                >
                  {/* Bottom Station Food Court */}
                  {dineData?.rest6_title}
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
                    fontSize: "17px",
                    lineHeight: "1.4",
                    fontWeight: "400",
                    letterSpacing: "2px",
                    textTransform: "none",
                    color: "#0a0a0a",
                    fontFamily: "Aktiv",

                    // fontFamily: '"Jost", sans-serif',
                  }}
                >
                  {dineData?.rest6_txt}
                  {/* Snack attack! Explore our diverse selection of tasty treats at
                  our resort's base station.{" "} */}
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
                  fontFamily: "Aktiv",

                  // fontFamily: '"Allison", handwriting !important',
                  marginTop: 5,
                }}
              >
                {dineData?.rest7_title}
                {/* Top Station Food Court */}
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
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#0a0a0a",
                  fontFamily: "Aktiv",

                  // fontFamily: '"Jost", sans-serif',
                }}
              >
                {dineData?.rest7_txt}
                {/* Snacking with a view: A feast for every craving.{" "} */}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} mt={5}>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${dineData?.rest7_img}`}
              // src="/DineIn/topFood.JPG"
              alt="Bottom Food Court"
              style={{
                maxWidth: "90%",
                // height: 500,
                borderRadius: "50px 0px 50px 0px",
              }}
            />
          </Grid>

          {/* <Grid
            item
            xs={12}
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            // sx={{
            //   background:
            //     "linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(230,230,230,1) 50%, rgba(255,255,255,1) 100%)",
            // }}
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
                Gloria Jeans.
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
                mt={3}
                mb={3}
                sx={{
                  fontSize: "17px",
                  lineHeight: "1.4",
                  fontWeight: "400",
                  letterSpacing: "2px",
                  textTransform: "none",
                  color: "#898989",
                  fontFamily: '"Jost", sans-serif',
                }}
              >
                Get the perfect blend of warmth and flavor at Gloria Jeans,
                nestled in the heart of Malam Jabba Ski Resort. Indulge in our
                rich, aromatic coffees and delightful snacks as you take in the
                breathtaking mountain views. Whether you're hitting the slopes
                or simply seeking a cozy retreat, Gloria Jeans at Malam Jabba
                Ski Resort is your go-to destination for comfort and
                refreshment.
              </Typography>
            </Stack>
          </Grid> */}
          {/* <Grid
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
                Gloria Jeans.
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
              src="/DineIn/gloria.jpg "
              alt="GloriaJeans"
              style={{
                maxWidth: "100%",
                height: 320,
                borderRadius: "50px 50px 50px 50px",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            mt={5}
            sx={{ padding: 2 }}
            justifyContent="center"
            textAlign="center"
            alignItems="center"
          >
            <Typography
              // mt={3}
              mb={3}
              sx={{
                fontSize: "17px",
                lineHeight: "1.4",
                fontWeight: "400",
                letterSpacing: "2px",
                textTransform: "none",
                color: "#0a0a0a",
                fontFamily: '"Jost", sans-serif',
              }}
            >
              Get the perfect blend of warmth and flavor at Gloria Jeans,
              nestled in the heart of Malam Jabba Ski Resort. Indulge in our
              rich, aromatic coffees and delightful snacks as you take in the
              breathtaking mountain views. Whether you're hitting the slopes or
              simply seeking a cozy retreat, Gloria Jeans at Malam Jabba Ski
              Resort is your go-to destination for comfort and refreshment.
            </Typography>
          </Grid> */}
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

export default DineIn;
