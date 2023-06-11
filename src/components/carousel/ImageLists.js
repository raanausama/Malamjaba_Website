import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Limage1 from "../../Assets/sliderimage/instagram.jpg";
import Limage2 from "../../Assets/sliderimage/facebook.jpg";
import Limage3 from "../../Assets/sliderimage/youtube.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";
import "./ImageLists.css";
import { Grid } from "@mui/material";

export default function ImageLists() {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        <ImageList sx={{ width: 650, height: 650 }}>
          <ImageListItem>
            <img src={Limage1} alt={"instagram"} loading="lazy" />
            <div className="hover-overlay" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage3} alt={"youtube"} loading="lazy" />
            <div className="hover-overlay" />
            <ImageListItemBar
              title={"malamjabbaskiresort"}
              actionIcon={
                <IconButton sx={{ color: "white", fontSize: "large" }}>
                  <InstagramIcon
                    onClick={() =>
                      navigate(
                        "/https://www.instagram.com/malamjabbaskiresort/"
                      )
                    }
                  />
                </IconButton>
              }
            />
          </ImageListItem>
          <ImageListItem>
            <img src={Limage2} alt={"facebook"} loading="lazy" />
            <div className="hover-overlay" />

            <ImageListItemBar
              title={"malamjabbaskiresort"}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                ></IconButton>
              }
            />
          </ImageListItem>
        </ImageList>
      </Grid>
    </Grid>
  );
}
