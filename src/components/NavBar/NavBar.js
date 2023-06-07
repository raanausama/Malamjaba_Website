import "./navbar.css";

// import React, { useEffect } from 'react'
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import Weather from "../weatherElement/weather";
import AppsIcon from "@mui/icons-material/Apps";
import WeatherBar from "../weatherElement/weatherBar";
// import { useState } from 'react'

// const NavBar = () => {
//   const [SideMenu, setSideMenu] = useState(false);

//   useEffect(() => {
//     console.log(SideMenu);
//   }, [SideMenu])
//   return(
//       <div className="navbar">
//       <img src={logo} alt="logo"/>
//       <div className="nav-links">
//         <a href="/staycation">Staycation</a>
//         <a href="/packages">Packages</a>
//         <a href="/the-slope">The SLOPE</a>
//       </div>
//       <Weather />
//       <WeatherBar />
//       {!SideMenu ? (
//         <button className="hamburger-menu" onClick={() => setSideMenu(true)}>
//           &#9776;
//         </button>
//       ) : (
//         <button className="hamburger-menu" onClick={() => setSideMenu(false)}>
//           &#10006;
//         </button>
//       )}
//       {/* create a dropdown menu when SideMenu is true */}
//     </div>
//   )
// }
// //  NavBar extends React.Component {
// //     render() {
// //         return (
// //             <div className="navbar">
// //             <div className="logo">Logo</div>
// //             <div className="nav-links">
// //               <a href="#">Link 1</a>
// //               <a href="#">Link 2</a>
// //               <a href="#">Link 3</a>
// //             </div>
// //             <div className="hamburger-menu">&#9776;</div>
// //           </div>
// //         )
// //     }
// // }

// export default NavBar
//______________________________________________________________________________________________________________________

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import gsap from "gsap";

const pages = ["STAYACTION", "PACKAGES", "THE SLOPE"];
const settings = [
  "EVENTS",
  "ACTIVITIES",
  "SHOP",
  "WORKSHOP",
  "THE SLOPE",
  "CONTACT US",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon  /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <img
              src={logo}
              alt="logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Malamjabba
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AppsIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              PaperProps={{
                sx: { backgroundColor: "transparent", color: "white" },
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "0.990rem",
                  fontWeight: "Bold",
                  padding: "6px 30px",
                }}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <Weather />
            <WeatherBar />
          </Box>

          <Box sx={{ flexGrow: 0.2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: "white", fontWeight: "bold" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{
                mt: "45px",
              }}
              PaperProps={{
                sx: { backgroundColor: "transparent", color: "white" },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="inherit">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
