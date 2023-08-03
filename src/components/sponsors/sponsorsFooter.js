import React from "react";
import SponsorImage from "./sponsorImage";
import Grid from "@mui/material/Grid";
import { Container, TextField, Button, Stack, Typography } from "@mui/material";
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
          // alignItems="center"
          className="sponsors-grid"
        >
          <Grid item xs={12} sm={6} md={4} display="flex" alignContent="center">
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Sponsors;
