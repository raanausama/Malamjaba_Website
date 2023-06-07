import React from "react";
import Sponsors from "../components/sponsors/sponsorsFooter";
import Footer from "../components/footer/footer";
import Card from "../components/Cards/card";
import "./activities.css";
import Background from "../Assets/bg_content/activities-header.jpg"


const Activities = () => {
    return (
        <div className="activities">
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
        
            <div className="activites-cover-2-col">
                <img src="outdoor.jpeg" alt="Activities" />
                <div className="text-box">
                    <h1>Premium Rooms</h1>
                    <p>
                        whatever text is requried
                    </p>
                </div>
            </div>
            <div className="section-heading">
                <h1>Our top picks this winter</h1>
            </div>
            <div className="card-wrapper">
                <Card image='pastevent.jpg' header='Food Fest' text='Cusine from all over Pakistan and a Qawalli Night'/>
                <Card image='cycling.jpg' header='Mountain Bike Race' text='From Cyclists all over Pakistan'/>
                <Card image='futureevent.jpg' header='Ski and Snowboarding Competition' text='To Promote local talent and provide a platform for winter sports'/>
            </div>

            <div className="section-heading">
                <h1>Explore our blog</h1>
            </div>
            
            <div className="card-wrapper">
                <Card image='pastevent.jpg' header='Food Fest' text='Cusine from all over Pakistan and a Qawalli Night'/>
                <Card image='cycling.jpg' header='Mountain Bike Race' text='From Cyclists all over Pakistan'/>
                <Card image='futureevent.jpg' header='Ski and Snowboarding Competition' text='To Promote local talent and provide a platform for winter sports'/>
            </div>

            <Sponsors />
            <Footer />
        </div>
    )
}

export default Activities;