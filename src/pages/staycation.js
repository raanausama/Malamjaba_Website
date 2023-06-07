import React from 'react';
import Sponsors from '../components/sponsors/sponsorsFooter';
import StacationCover from '../components/Cover/stacationCover';
import "./stacation.css"
import Footer from '../components/footer/footer';
import StaycationGrid from '../components/gridViews/stacationGrid';
import Background from "../Assets/bg_content/staycation-header.jpg"
import parallaxBG from "../Assets/bg_content/accommodation-passes.jpg";

// import SponsorImage from '../components/sponsors/sponsorImage';
const Staycation = () => {
    return (
        <div className="stacation">
            <div style={{ backgroundImage: `url(${Background})` }} className="header-image-overlay">
                <div className="text-box">
                    <h1>
                        The Magnificent Accommodation
                    </h1>
                    <p>
                        Rewind from work and reconnect with Nature
                    </p>
                </div>
            </div>

            <StacationCover />
            <StaycationGrid />
            <div style={{background:`url(${parallaxBG})`}} className="parallax-bg">
                <div className="text-container-parallax">
                <h1>
                2022-23 Season Packages On Sale!
                    </h1>
                    <p>Season passes are available for purchase and in person at Malam Jabba Resort for a limited time. Indulge in a fascinating winter journey by snatching up tickets right away. We are aiming open for winter in mid-October.</p>
                </div>
                <button>
                    BUY NOW
                </button>
            </div>
            <Sponsors />
            <Footer bgImage='footer1.jpg' />
        </div>
    )
}

export default Staycation;