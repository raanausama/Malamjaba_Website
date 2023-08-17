import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Background from "../../Assets/bg_content/footer1.jpg";
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";
import SponsorImage from "../sponsors/sponsorImage";
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const Footer = ({ bgImage = "", text = "", textHeading = "" }) => {
  return (
    <Box
      maxWidth="100%"
      id="footer"
      sx={{
        backgroundImage: `url(${Background})`,
        padding: "0em 0em 0em 0em",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="100%">
        <Grid
          container
          color="white"
          gap={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack direction="column" display="flex" alignItems="center">
              <img
                src={logo}
                alt="footer-logo-mjr"
                // style={{ height: "25vh", width: "25vh" }}
              />
              <Stack direction="row" spacing={10}>
                <SponsorImage
                  image="images/samsons-logo-png.png"
                  alt="nescafe"
                />
                <SponsorImage
                  image="images/pc_logo-removebg-preview.png"
                  alt="redbull"
                />
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">LOCATION</Typography>
              <Typography variant="body1">Hill station,</Typography>
              <Typography variant="body1">Malam Jabba Road,</Typography>
              <Typography variant="body1">Malam Jabba, Swat.</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2.5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">QUICK LINKS</Typography>
              <Typography variant="body1">
                <Link
                  href="/"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  shop
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link
                  href="/activities"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  Activites
                </Link>
              </Typography>
              <Typography variant="body1">
                <Link
                  href="/"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  Workshop
                </Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Stack
              direction="column"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h5">CONTACT</Typography>
              <Typography variant="body1">info@malamjabbaresort.com</Typography>
              <Typography variant="body1">+92-302-6575400</Typography>
              <Typography variant="body1">+92-333-2342342</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <hr />

            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ color: "white" }}
            >
              {/* <Link
                sx={{ color: "white" }}
                href="https://www.assuretrust.asia"
                rel="sponsored"
                title="Flaticon"
              >
                <FacebookIcon color="blue" />
              </Link>{" "}
              <Link
                sx={{ color: "white" }}
                href="https://instagram.com/malamjabbaskiresortofficial?igshid=MzRlODBiNWFlZA=="
                rel="sponsored"
                title="Flaticon"
              >
                <InstagramIcon color="blue" />
              </Link>{" "}
              <Link
                sx={{ color: "white" }}
                href="https://www.youtube.com/@malamjabbaskiresort4928"
                rel="sponsored"
                title="Flaticon"
              >
                <YouTube color="blue" />
              </Link>{" "}
              <Link
                sx={{ color: "white" }}
                href="https://twitter.com/Mjskiresort"
                rel="sponsored"
                title="Flaticon"
              >
                <Twitter color="blue" />
              </Link>{" "}
              <Link
                sx={{ color: "white" }}
                href="https://www.linkedin.com/company/malam-jabba-ski-resort/?viewAsMember=true"
                rel="sponsored"
                title="Flaticon"
              >
                <LinkedIn color="blue" />
              </Link>{" "} */}
              © {new Date().getFullYear()}&nbsp;
              <Link
                sx={{ color: "white" }}
                href="https://www.assuretrust.asia"
                rel="sponsored"
                title="Flaticon"
              >
                www.malamjabba.asia
              </Link>{" "}
              All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
