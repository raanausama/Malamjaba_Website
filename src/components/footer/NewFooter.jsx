import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Background from "../../Assets/bg_content/footer1.jpg";
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import { Box, Container, Grid, Stack, Typography, Link } from "@mui/material";
import SponsorImage from "../sponsors/sponsorImage";
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const NewFooter = ({ bgImage = "", text = "", textHeading = "" }) => {
  return (
    <Box
      maxWidth="100%"
      id="footer"
      sx={{
        // backgroundImage: `url(${Background})`,
        // background: 'linear-gradient(to top, #003366 0%, #0033cc 100%)',
        // background: 'linear-gradient(to bottom right, #003300 0%, #ccff99 100%)',
        background:
          "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 100%)",
        padding: "2em 0em 1em 0em",
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
              <a
                href="https://maps.app.goo.gl/vgMu5DNN9b2t42gX7"
                target="_blank"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontFamily: "Times New Roman, Times, serif" }}
                >
                  LOCATION
                </Typography>
              </a>
              <Typography variant="body1 " sx={{ fontFamily: "Didot, serif" }}>
                Hill station,
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                Malam Jabba Road,
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                Malam Jabba, Swat.
              </Typography>
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
              <Typography
                variant="h5"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                QUICK LINKS
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                <Link
                  href="/activities"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  Activites
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                <Link
                  href="/staycation"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  Staycation
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                <Link
                  href="/dinein"
                  rel="sponsored"
                  title="Flaticon"
                  sx={{ color: "white" }}
                >
                  Dinning inn
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
              <Typography
                variant="h5"
                sx={{ fontFamily: "Times New Roman, Times, serif" }}
              >
                CONTACT US
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                info@malamjabbaresort.com
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                +92-302-6575400
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: "Didot, serif" }}>
                +92-333-2342342
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <hr style={{ color: "white" }} />
        <Grid
          container
          color="white"
          display="flex"
          spacing={3}
          alignItems="center"
          justifyContent="center"
          sx={{
            padding: "3em 0em 3em 0em ",
            width: { xs: "100%", md: "50%" },
            margin: "0 auto",
          }}
        >
          <Grid
            item
            gap={{ xs: 1, md: 1 }}
            sx={12}
            sm={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <img
              src={logo}
              alt="footer-logo-mjr"
              // style={{ height: "25vh", width: "25vh" }}
            />
          </Grid>
          
          <Grid
            item
            gap={{ xs: 1, md: 1 }}
            sx={12}
            sm={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <SponsorImage
              image="/Images/footer-logo-pc.png"
              alt="redbull"
            />
          </Grid>
          <Grid
            item
            gap={{ xs: 1, md: 1 }}
            sx={12}
            sm={12}
            md={4}
            display="flex"
            justifyContent="center"
          >
            <SponsorImage image="/Images/samsons-logo-png.png" alt="nescafe" />
          </Grid>
          {/* <Grid item sx={12} sm={12} md={4} display="flex" justifyContent="center">
                <SponsorImage
                  image="images/samsons-logo-png.png"
                  alt="nescafe"
                />
                </Grid>
                <Grid item sx={12} sm={12} md={4} display="flex" justifyContent="center">
                <SponsorImage
                  image="images/pc_logo-removebg-preview.png"
                  alt="redbull"
                />
              </Grid> */}
        </Grid>
        <Grid
          container
          color="white"
          gap={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={12} md={12} align="center">
            <hr />
            {/* <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ color: "white" }}
            > */}
            <Typography variant="h6" sx={{fontFamily: 'Times New Roman,Times,serif'}}>FOLLOW US</Typography>
            <Link
              sx={{ color: "white" }}
              href="https://www.facebook.com/MjSkiResort"
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-facebook.svg"
                alt="facebook-new"
              />
            </Link>{" "}
            <Link
              sx={{ color: "white" }}
              href="https://instagram.com/malamjabbaskiresortofficial?igshid=MzRlODBiNWFlZA=="
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-instagram.svg"
                alt="instagram"
              />
            </Link>{" "}
            <Link
              sx={{ color: "white" }}
              href="https://www.tiktok.com/@mjskiresort?_t=8eUt9nOB3wX&_r=1"
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-tik-tok.svg"
                alt="tiktok"
              />
            </Link>{" "}
            <Link
              sx={{ color: "white" }}
              href="https://www.youtube.com/@malamjabbaskiresort4928"
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-youtube.svg"
                alt="youtube-squared"
              />
            </Link>{" "}
            <Link
              sx={{ color: "white" }}
              href="https://twitter.com/Mjskiresort"
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-twitter.svg"
                alt="twitter-circled"
              />
            </Link>{" "}
            <Link
              sx={{ color: "white" }}
              href="https://www.linkedin.com/company/malam-jabba-ski-resort/?viewAsMember=true"
              rel="sponsored"
              title="Flaticon"
            >
              <img
                width="60"
                height="60"
                src="/SocialIcons/icons8-linkedin.svg"
                alt="linkedin"
              />
            </Link>{" "}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewFooter;
