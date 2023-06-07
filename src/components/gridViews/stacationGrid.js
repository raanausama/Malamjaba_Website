import React from "react";
import "./stacationGrid.css"

const StaycationGrid = ()=> {
    return(
        <div className="flex-row">
            <div className="flex-col">
                <img src="premium.jpg" alt="premium" />
                <div className="grid-text-box">
                    <h1>Premium Rooms</h1>
                    <p>
                        whatever text is requried
                    </p>
                </div>
                <img src="cinema.jpg" alt="cinema" />
                <div className="grid-text-box">
                    <h1>cinema</h1>
                    <p>whatever</p>
                </div>
            </div>
            <div className="flex-col">
                <img src="meeting.jpg" alt="meeting"/>
                <div className="grid-text-box">
                    <h1>Meeting Rooms</h1>
                    <p>whatever</p>
                </div>
                <img src="delux.jpg" alt="deluxe-rooms" />
                <div className="grid-text-box">
                    <h1>Deluxe Rooms</h1>
                    <p>whaever</p>
                </div>
            </div>
            <div className="flex-col">
                <img src="weddings.jpg" alt="events" />
                <div className="grid-text-box">
                    <h1>Wedding and event halls</h1>
                    <p>
                        whatever
                    </p>
                </div>
                <img src="pool.jpg" alt="swimming" />
                <div className="grid-text-box">
                    <h1>Swimming Pool</h1>
                    <p>
                        whatever
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default StaycationGrid