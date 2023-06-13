import React from "react";
import "./footer.css";
import Background from "../../Assets/bg_content/footer1.jpg";
import logo from "../../Assets/logos/malamjabbalogo-150.png";
import { Container, Grid } from "@mui/material";

const Footer = ({ bgImage = "", text = "", textHeading = "" }) => {
  return (
    <div maxWidth="xl" style={{ backgroundImage: `url(${Background})` }} className="footer">
      <Grid container spacing={2} className="footer-flex">
        <Grid item xs={12} sm={6} md={3} className="child footer-logo">
          <img src={logo} alt="footer-logo-mjr" />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="child location">
          <h1>LOCATION</h1>
          <div className="location-text">
            <p>Hill station,</p>
            <p>Malam Jabba Road,</p>
            <p>Malam Jabba, Swat.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="child footer-links">
          <Container>
              <h1>QUICK LINKS</h1>
              <div><a href="/">shop</a></div>
              <div><a href="/">shop</a></div>
              <div><a href="/">shop</a></div>
              <div><a href="/">shop</a></div>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="child contact">
          <h1>CONTACT</h1>
          <Container className="contact-text">
            <p>info@malamjabbaresort.com</p>
            <p>+92-302-6575400</p>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
