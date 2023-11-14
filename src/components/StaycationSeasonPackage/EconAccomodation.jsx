import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import SamsonCarousel from "../gridViews/SamsonCarousel";
import gsap from "gsap";

const EconAccomodation = () => {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <Box display="flex" flexDirection="column" alignItems="center" py="2em">
      <Typography color="#094e9d" variant="h3" fontFamily={"Aktiv"}>
        Economical Accomodation at Samsons Group Inn.
      </Typography>
      {/* <SamsonCarousel /> */}
      <Grid container>
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
                src="/ExecutiveRoom.JPG"
                alt="Staycation"
                style={{ width: "100%", height: "50vh" }}
                // borderRadius="1em"
              />
              <Box sx={{ padding: "5%" }}>
                {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}
                <a
                  // href="https://bookme.pk/events/activities-at-malam-jabba-swat
                  href="https://www.pchotels.com/pcmalam-jabba
          "
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
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
                    Executive Rooms
                  </Typography>
                </a>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  Room space with a double bed, mini bar, inverter, geyser. Room
                  rates may depend on seasonality.
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  For bookings, contact Samsons Inn Manager Bawar Hussain +92
                  314 9735622
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
                src="/DeluxeRooms.JPG"
                alt="Staycation"
                style={{ width: "100%", height: "50vh" }}
                // borderRadius="1em"
              />
              <Box sx={{ padding: "5%" }}>
                {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}
                <a
                  // href="https://bookme.pk/events/activities-at-malam-jabba-swat
                  href="https://www.pchotels.com/pcmalam-jabba
          "
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
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
                    Delux Rooms
                  </Typography>
                </a>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  Room space with 4 single beds, inverter, geyser. Room rates
                  may depend on seasonality.
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  For bookings, contact Samsons Inn Manager Bawar Hussain +92
                  314 9735622
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
                src="/OutdoorDining.JPG"
                alt="Staycation"
                style={{ width: "100%", height: "50vh" }}
                // borderRadius="1em"
              />
              <Box sx={{ padding: "5%" }}>
                {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}
                <a
                  // href="https://bookme.pk/events/activities-at-malam-jabba-swat
                  href="https://www.pchotels.com/pcmalam-jabba
          "
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
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
                    Outdoor Dining
                  </Typography>
                </a>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  Enjoy a delicious meal with the best of views and peaceful
                  environment.
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  For bookings, contact Samsons Inn Manager Bawar Hussain +92
                  314 9735622
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
                src="/Bonfire.JPG"
                alt="Staycation"
                style={{ width: "100%", height: "50vh" }}
                // borderRadius="1em"
              />
              <Box sx={{ padding: "5%" }}>
                {/* <a href="">
            <Typography variant="h4">{heading}</Typography>
          </a> */}
                <a
                  // href="https://bookme.pk/events/activities-at-malam-jabba-swat
                  href="https://www.pchotels.com/pcmalam-jabba
          "
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
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
                    Bonfire
                  </Typography>
                </a>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  We arrange bonfires for your friends circle to enjoy amidst
                  cool breeze
                </Typography>
                <Divider
                  sx={{
                    borderBottomWidth: "medium",
                    borderColor: "#D9BD90",
                    width: "100px",
                  }}
                />
                <Typography fontFamily={"Aktiv"}>
                  For bookings, contact Samsons Inn Manager Bawar Hussain +92
                  314 9735622
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EconAccomodation;
