import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import gsap from "gsap";
import ActivitiesBlogModal from "../../pages/ActivitiesBlogModal";
import { IconButton } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material";
import TopPickModal from "../activitiesModal/TopPickModal";
import SinglePriceModal from "../activitiesModal/SinglePriceModal";

export default function AcitivitySinglePriceCards({
  simage = "",
  sheader = "",
  stext = "",
  price = "",
  description = "",
}) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const [viewModalOpen, setViewModalOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal");
    setViewModalOpen(false); // Close the modal
  };
  const handleOpenModal = () => {
    console.log("handleOpenModal");
    setViewModalOpen(true); // open the modal
  };

  return (
    <>
      {/* <ActivitiesBlogModal
        open={viewModalOpen}
        handleClose={handleCloseModal}
        image={simage}
      /> */}
      <SinglePriceModal
        open={viewModalOpen}
        handleClose={handleCloseModal}
        subtext={stext}
        price={price}
        description={description}
      />
      <Card
        sx={{
          position: "relative",
          height: 400,
          // borderRadius: "15px",
          m: 0.2,
          cursor: "pointer",
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handleOpenModal}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${simage})`,
            backgroundSize: "cover",
          }}
        />
        <CardContent
          sx={{
            position: "relative",
            zIndex: isHovered ? 1 : 0,
            transition: isHovered ? "background-color 0.3s" : "none",
            // backgroundColor: "transparent",
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.5)" : "none",
            height: "100rem",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            mt={15}
            color="Black"
          >
            {isHovered ? (
              <>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  sx={sxHeader}
                  mt={8}
                >
                  {sheader}
                </Typography>
              </>
            ) : null}
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

const sxHeader = {
  fontSize: "1.7em",
  fontFamily: "Aktiv",
};

const sxText = {};
