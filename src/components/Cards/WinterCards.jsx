import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import gsap from "gsap";
import ActivitiesBlogModal from "../../pages/ActivitiesBlogModal";

export default function WinterCards({ simage = "", sheader = "", stext = "" }) {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.05 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  const [viewModalOpen, setViewModalOpen] = React.useState(false);

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
      <ActivitiesBlogModal
        open={viewModalOpen}
        handleClose={handleCloseModal}
        image={simage}
      />
      <Card
        sx={{
          position: "relative",
          height: 400,
          borderRadius: "15px",
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
            zIndex: 1,
            transition: "background-color 0.3s",
            // backgroundColor: "transparent",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "100rem",
          }}
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
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={sxHeader}
              mt={8}
            >
              {sheader}
            </Typography>
            <Typography variant="body2" component="div" sx={sxText} mt={1}>
              {stext}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

const sxHeader = {
  fontSize: "1.7em",
  fontFamily: '"Allison", handwriting !important',
};

const sxText = {};
