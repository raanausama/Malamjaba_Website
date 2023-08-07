import React from "react";
import "./sponsorImage.css"

const SponsorImage = ({image='', altText=''}) =>{
    return(
        <img className="sponsorImage" style={{ width: '5rem', height: '4rem' }} src={image} alt={altText} />
    )
}

export default SponsorImage;