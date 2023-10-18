import React from "react";
import SponsorImage from "./sponsorImage";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Grid from "@mui/material/Grid";
import { Container, TextField, Button, Stack, Typography, Link } from "@mui/material";
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import "./sponsorsFooter.css";

const Sponsors = () => {
  return (
    <div maxWidth="xl" className="sponsors">
      <Container
        maxWidth="xl"
        className="sponsors"
        display="flex"
        alignContent="center"
      >
        <Grid
          container
          spacing={2}
          display="flex"
          alignContent="center"
          alignItems="center"
          className="sponsors-grid"
        >
          <Grid item xs={12}>
          <Link
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
              </Link>{" "}
              </Grid>
          {/* <Grid item xs={12} sm={6} md={4} display="flex" alignContent="center">
            <Stack
              direction="column"
              color="white"
              sx={{ display: "flex", alignContent: "start" }}
            >
              <Stack direction="row">
                <Typography mb={1}>Sign up for our newsletter</Typography>
              </Stack>
              <Stack direction="row">
                <TextField
                  type="text"
                  label="Search"
                  // color="white"
                  InputLabelProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <Button
                  className="ab-button ab-emailSignup_submit"
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  Go
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={3} md={4}>
            <SponsorImage
              image="images/pc_logo-removebg-preview.png"
              alt="redbull"
            />
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
            <SponsorImage image="images/samsons-logo-png.png" alt="nescafe" />
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Sponsors;
