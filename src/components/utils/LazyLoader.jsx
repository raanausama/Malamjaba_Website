import { Link as RouterLink } from "react-router-dom";
// @mui
import logo from "../../assets/logos/malamjabbalogo-150.png";
import { Stack, LinearProgress, Box } from "@mui/material";
import { Zoom } from "react-awesome-reveal";
import "./LazyLoader.css";

export default function LazyLoader() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RouterLink to="/">
        <Stack direction="column" spacing={2} className="Wheeler" >
          <Zoom center cascade>
            <img src={logo} alt="Main Logo"  />
          </Zoom>
          {/* <Bounce cascade>
          <img src='/static/logo/ppd.svg' alt="PPD" style={{ marginTop: 20 }} />
        </Bounce> */}
          <div className="loader">
            <div className="loader-wheel"></div>
          </div>
          {/* <Box sx={{ width: '100%' }}>
            <LinearProgress/>
          </Box> */}
        </Stack>
      </RouterLink>
    </div>
  );
}
