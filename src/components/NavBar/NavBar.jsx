import "./navbar.css";
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import Weather from "../weatherElement/weather";
import AppsIcon from "@mui/icons-material/Apps";
import WeatherBar from "../weatherElement/weatherBar";
import React, { useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import gsap from "gsap";
import { Link, useNavigate } from "react-router-dom";
import { Height } from "@mui/icons-material";
import SignIn from "../../pages/SignIn";

const pages = ["HOME", "STAYCATION", "ACTIVITIES", "ABOUT US"];
const settings = [
  "Dine In",
  "CSR",
  // "Blog",
  "Contact Us",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

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

  const [viewModalOpen, setViewModalOpen] = React.useState(false);

  const handleMenuItem = (setting) => {
    if (setting === "Sign In") {
      setViewModalOpen(true);
    }
    // if (setting === "Blog") {
    //   navigate("/blog");
    // }
    if (setting === "Contact Us") {
      navigate("#contact-footer");
    }
    if (setting === "CSR") {
      navigate("/csr");
    }
    if (setting === "Dine In") {
      navigate("/dinein");
    }
    if (setting === "Contact Us") {
      const footerElement = document.getElementById("footer");
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleCloseModal = () => {
    setViewModalOpen(false); // Close the modal
  };

  return (
    <AppBar
      position="absolute"
      sx={{ backgroundColor: "transparent", boxShadow: "none", marginTop: 4 }}
    >
      <SignIn open={viewModalOpen} handleClose={handleCloseModal} />
      <Container maxWidth="100%">
        <Toolbar disableGutters>
          {/* <AdbIcon  /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
            <a href="/">
              <img
                src={logo}
                alt="logo"
                Link="/"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
            </a>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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

                "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography
                      textAlign="center"
                      fontFamily="Aktiv"
                      // sx={{ fontFamily: "TrajanPro3Black" }}
                    >
                      {page}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s/g, "-")}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "0.990rem",
                  fontWeight: "Bold",
                  padding: "6px 30px",
                  fontFamily: "Aktiv",
                  ml: "0.5em",
                  // backgroundColor: "rgba(255, 255, 255, 0.5)"
                  // fontFamily: "TrajanPro3Black",
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <MenuIcon sx={{ color: "white", fontWeight: "bold" }} />
              </IconButton>
            </Tooltip>
            <Box>
              <Menu
                sx={{
                  mt: "45px",
                  "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
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
                  <MenuItem
                    key={setting}
                    // component={Link}
                    to={`/${setting.toLowerCase().replace(/\s/g, "-")}`}
                    onClick={() => handleMenuItem(setting)}
                    // sx={{
                    //   "& .MuiList-root MuiList-padding MuiMenu-list css-6hp17o-MuiList-root-MuiMenu-list":
                    //     { backgroundColor: "rgba(0,0,0,0.5)" },
                    // }}
                  >
                    <Typography
                      textAlign="center"
                      color="inherit"
                      fontFamily="Aktiv"
                      // component={Link}
                      // to={`/${settings.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
