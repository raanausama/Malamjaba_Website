import React, { useRef, useEffect, useState } from "react";
import "../imageWithTextOverlay/imageWithOverlay.css"; // Import the CSS file for styling
import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import gsap from "gsap";
import Carousel from "react-bootstrap/Carousel";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: 1,
    src: "/pastevent.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    id: 2,
    src: "/cycling.jpg",
    caption: "Caption",
    description: "Description Here",
  },
  {
    id: 3,
    src: "/futureevent.jpg",
    caption: "Caption",
    description: "Description Here",
  },
];
const boxStyle = {
  background: `black`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Slider = ({
  image = "",
  button = false,
  buttonText = "",
  buttonCallBack = () => {},
}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const gridRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeatDelay: 1, yoyo: true });
    // const tF = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo: true})
    tl.fromTo(
      ".grid-item-1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    tl.fromTo(
      ".grid-item-3",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    // tF.to(".green", { rotation: 360 });
    // tF.to(".purple", { rotation: 360 });
    // tF.to(".orange", { rotation: 360 });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <>
      <Box className="bg-image-wrap" sx={boxStyle}>
        <Grid container>
          <Grid item sx={12}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./pastevent.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./cycling.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./futureevent.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Slider;
