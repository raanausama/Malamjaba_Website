import React from "react";
import "./footer.css"
import Background from "../../Assets/bg_content/footer1.jpg"
import logo from "../../Assets/logos/malamjabbalogo-150.png"


const Footer = ({bgImage="", text="", textHeading=""})=>{
    return(
        <div style={{ backgroundImage: `url(${Background})` }} className="footer">
            <div className="footer-flex">
                <div className="child footer-logo">
                    <img src={logo} alt="footer-logo-mjr" />
                </div>
                <div className="child location">
                <h1>LOCATION</h1>
                <p>
                    Hill station,
                    Malam Jabba Road,
                    Malam Jabba, Swat.
                </p>
                </div>
                <div className="child footer-links">
                    <h1>QUICK LINKS</h1>
                    <a href="/">shop</a>    
                    <a href="/">shop</a>
                    <a href="/">shop</a>
                    <a href="/">shop</a>
                </div>
                <div className="child contact">
                <h1>CONTACT</h1>
                <p>info@malamjabbaresort.com
+92-302-6575400</p>

                </div>
            </div>
        </div>
    )
}

export default Footer;