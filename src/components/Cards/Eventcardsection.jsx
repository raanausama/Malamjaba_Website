import React, { useState } from "react";
import ActionAreaCard from "../Cards/Eventcard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import parallaxBG from "../../assets/bg_content/chairLiftNew.jpg";

const Eventcardsection = ({ homeData }) => {
  // const [expandedCard, setExpandedCard] = useState(null);

  // const handleCardClick = (index) => {
  //   setExpandedCard(index === expandedCard ? null : index);
  // };

  return (
    <Grid container xs={12}>
      <div
        maxWidth="xl"
        style={{
          display: "flex",
          backgroundImage: `url(${parallaxBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          opacity: "0.8",
          position: "relative",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                // image="familyfest.jpeg"
                image={`${import.meta.env.VITE_BACKEND_URL}/${homeData?.pec_img}`}
                header1="PAST EVENT"
                header2={homeData.pec_title}
                // header2="Food Fest"
                header3={homeData.pec_des}
                // header3="Cuisine from all over Pakistan and a Qawalli Night"
                description={homeData.pec_mdes}
                // description="The Malam Jabba Ski Resort hosted a spectacular food fest, drawing food enthusiasts and tourists alike to indulge in a delightful culinary extravaganza. 
                //  Nestled amidst the breathtaking snow-capped mountains, the event showcased a diverse array of delectable dishes, featuring both traditional regional cuisine and international flavors.
                //   Local vendors and renowned chefs collaborated to present a rich tapestry of tastes, from savory kebabs and aromatic biryanis to sweet delicacies and refreshing beverages."
                // expanded={expandedCard === 0}
                // onClick={() => handleCardClick(0)}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                // image="Marathon.jpg"
                image={`${import.meta.env.VITE_BACKEND_URL}/${homeData?.uec_img}`}
                header1="UPCOMING EVENT"
                // header2="Marathon"
                header2={homeData.uec_title}
                // header3="From Cyclists all over Pakistan"
                header3={homeData.uec_des}
                description={homeData.uec_mdes}
                // description="The exhilarating Malam Jabba Marathon took place at the picturesque Malam Jabba Ski Resort, offering an adrenaline-pumping experience to enthusiasts and nature lovers alike. Against the backdrop of majestic, lush green mountains, marathon runners from diverse backgrounds gathered to compete in this thrilling event. The challenging course wound its way through scenic trails, providing participants with a unique blend of adventure and natural beauty. The race not only celebrated the spirit of sportsmanship but also promoted the region's eco-tourism, emphasizing the perfect harmony between sports, adventure, and the breathtaking mountainous landscape of Malam Jabba."
                // expanded={expandedCard === 1}
                // onClick={() => handleCardClick(1)}
              />
            </Grid>
            <Grid item md={4} sm={6}>
              <ActionAreaCard
                // image="Nationalski.jpeg"
                image={`${import.meta.env.VITE_BACKEND_URL}/${homeData?.fec_img}`}
                header1="FUTURE EVENT"
                // header2="National Ski and Snowboarding Competition"
                header2={homeData.fec_title}
                // header3="To Promote local talent and provide a platform for winter sports"
                header3={homeData.fec_des}
                description={homeData.fec_mdes}
                // description="The heart-pounding Red Bull Homerun event took place at the enchanting Malam Jabba Ski Resort, transforming the snowy slopes into a thrilling playground for adrenaline junkies. Skiers and snowboarders from around the world converged to compete in this high-octane race. The excitement peaked as participants descended from the summit of the mountain, skillfully navigating through challenging terrains and navigating a series of exhilarating obstacles. The Red Bull Homerun at Malam Jabba Ski Resort not only served as a platform for extreme sports enthusiasts to push their limits but also celebrated the beauty of winter sports and the unmatched splendor of the resort's alpine setting."
                // expanded={expandedCard === 2}
                // onClick={() => handleCardClick(2)}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grid>
  );
};

export default Eventcardsection;
