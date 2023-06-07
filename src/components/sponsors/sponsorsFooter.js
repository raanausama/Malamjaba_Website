import React from "react";
import SponsorImage from "./sponsorImage";
import "./sponsorsFooter.css";


const Sponsors = () =>{
    return(
        <div className="sponsors">
                    <form method="GET" action="#" class="ab-emailSignup">
                        <div class="ab-emailSignup_description">Sign up for our newsletter</div>
                        <div class="ab-emailSignup_form">
                            <div>
                                <label for="email" class="ab-label ab-util_srOnly">Email Address</label>
                                <input type="text" />
                            </div>
                            <button class="ab-button ab-emailSignup_submit">Go</button>
                        </div>
                    </form>
                    <SponsorImage image="redbull.png" alt='redbull' />
                    <SponsorImage image="nescafe.png" alt='nescafe' />
                    <SponsorImage image="walls.png" alt='walls' />
                    <SponsorImage image="gloriajeans.png" alt='gloriajeans' />
        </div>
    )
}


export default Sponsors;