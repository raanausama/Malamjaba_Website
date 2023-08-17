import React, { useEffect, useState } from "react";
import "./weatherBar.css";
import { CircularProgress } from "@mui/material";
// import { useDispatch } from 'react-redux';
// import { displayWeather, hideWeather } from './weatherSlice';

const WeatherBar = () => {
  // const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState(null);
  //   useEffect(() => {
  //     // Replace 'YOUR_API_KEY' with the actual API key you obtained.
  //     const apiKey = process.env.REACT_POINT_FORECAST_API;
  //     const latitude = 34.7999;
  //     const longitude = 72.5722;

  //     fetch(
  //     //   `https://api.weatherprovider.com/point-forecast?lat=${latitude}&lon=${longitude}&apikey=${apiKey}`
  //     `https://api.windy.com/${apiKey}/point-forecast/v2`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setWeatherData(data))
  //       .catch((error) => console.error("Error fetching weather data:", error));
  //   }, []);
  useEffect(() => {
    // const apiKey = "fRtra77GJ2l7pq2lBBIOcuUiBddmhfYx"; // Replace with your actual API key for local
    const apiKey = "s7em63xbxHAXifNOZgBvnLSZCK8Bxkm1"; // Replace with your actual API key for Netlify
    const apiUrl = "https://api.windy.com/api/point-forecast/v2";

    const requestData = {
      lat: 34.7999,
      lon: 72.5722,
      model: "gfs",
      parameters: ["temp", "wind"],
      levels: ["surface", "800h", "300h"],
      key: apiKey,
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setWeatherData(data);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

//   if (!weatherData) {
//     return  <CircularProgress/> ;
//   }
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };
  console.log("weatherData", weatherData);
  // Define a function to format the date as 'YYYY-MM-DD'
  function formatDate(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  }
  const today = new Date();

  // Get tomorrow's date by adding 1 day to the current date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Format the dates in your desired format
  const todayFormatted = formatDate(today); // Implement your own formatDate function
  const tomorrowFormatted = formatDate(tomorrow); // Implement your own formatDate function

  return (
    <>
    {weatherData ? <div
      className="example"
      id="displayWeatherbar"
      onMouseOver={() => {
        document.getElementById("displayWeatherbar").style.display = "block";
      }}
      onMouseOut={() => {
        document.getElementById("displayWeatherbar").style.display = "none";
      }}
    >
      {/* wind_u-surface */}
      <div className="ab-headerConditions_conditions">
        <div className="ab-condition_wrapper">
          <div className="ab-condition">
            <div className="ab-condition_value">
              {kelvinToCelsius(weatherData["temp-surface"][1]).toFixed(2)}°C
            </div>
            <div className="ab-condition_sub">Past 24 Hrs</div>
          </div>
          <div className="ab-condition">
            <div className="ab-condition_value">
              {kelvinToCelsius(weatherData["temp-800h"][1]).toFixed(2)}°C
            </div>
            <div className="ab-condition_sub">Past 3 Days</div>
          </div>
          <div className="ab-condition">
            <div className="ab-condition_value">0"</div>
            <div className="ab-condition_sub">Base</div>
          </div>
          <div className="ab-condition">
            <div className="ab-condition_value ab-condition_value_small">
              Summer
            </div>
            <div className="ab-condition_sub">Conditions</div>
          </div>
          {/* <div className="ab-condition ab-condition-weather ab-condition-wide"> */}

          {/* <div className="ab-condition_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1225.4 2083.7 105.4 72.9"
                className="icon Wind"
              >
                <g
                  id="Group_30"
                  data-name="Group 30"
                  transform="translate(-1697 2077)"
                >
                  <path
                    id="Path_126"
                    data-name="Path 126"
                    className="Wind-cls-1"
                    d="M486.6 31.1h35.3A12.2 12.2 0 1 0 510 16.2a3.531 3.531 0 1 0 6.9 1.5 5.109 5.109 0 1 1 5 6.2h-35.3a3.8 3.8 0 0 0-4 3.5 3.828 3.828 0 0 0 4 3.7z"
                  ></path>
                  <path
                    id="Path_127"
                    data-name="Path 127"
                    className="Wind-cls-1"
                    d="M559.7 12.1a17.37 17.37 0 0 0-17.3 17.3 16.665 16.665 0 0 0 .5 3.9 3.493 3.493 0 1 0 6.8-1.6 9.079 9.079 0 0 1-.3-2.3 10.2 10.2 0 1 1 10.2 10.2h-84a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h84.1a17.25 17.25 0 1 0 0-34.5z"
                  ></path>
                  <path
                    id="Path_128"
                    data-name="Path 128"
                    className="Wind-cls-1"
                    d="M547.4 55.3h-60.7a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h60.9a5.1 5.1 0 1 1-5.1 6.2 3.493 3.493 0 1 0-6.8 1.6 12.2 12.2 0 0 0 24.1-2.7 12.538 12.538 0 0 0-12.4-12.1z"
                  ></path>
                </g>
              </svg>
            </div> */}
          <div className="ab-condition">
            <div className="ab-condition_heading">
              Today <br />
              {todayFormatted}
            </div>
            <div className="ab-condition_value">
              {Math.abs(weatherData["wind_u-surface"][1] * 2.23694).toFixed(2)}{" "}
              mph
            </div>
            <div className="ab-condition_sub">Windy</div>
          </div>
          <div className="ab-condition">
            <div className="ab-condition_heading">
              {" "}
              Tommorrow <br /> {tomorrowFormatted}
            </div>
            <div className="ab-condition_value">
              {Math.abs(weatherData["wind_u-800h"][1] * 2.23694).toFixed(2)} mph
            </div>
            <div className="ab-condition_sub">Windy</div>
          </div>
          {/* <div className="ab-condition">
            <div className="ab-condition_heading">
              Today <br />
              {todayFormatted}
            </div>
            <div className="ab-condition_value">
              {Math.abs(weatherData["wind_u-300h"][1] * 2.23694).toFixed(2)} mph{" "}
            </div>
            <div className="ab-condition_sub">Windy</div>
          </div> */}
          <div className="ab-condition ab-condition-weather ab-condition-wide">
            <div className="ab-condition_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1225.4 2083.7 105.4 72.9"
                className="icon Wind"
              >
                <g
                  id="Group_30"
                  data-name="Group 30"
                  transform="translate(-1697 2077)"
                >
                  <path
                    id="Path_126"
                    data-name="Path 126"
                    className="Wind-cls-1"
                    d="M486.6 31.1h35.3A12.2 12.2 0 1 0 510 16.2a3.531 3.531 0 1 0 6.9 1.5 5.109 5.109 0 1 1 5 6.2h-35.3a3.8 3.8 0 0 0-4 3.5 3.828 3.828 0 0 0 4 3.7z"
                  ></path>
                  <path
                    id="Path_127"
                    data-name="Path 127"
                    className="Wind-cls-1"
                    d="M559.7 12.1a17.37 17.37 0 0 0-17.3 17.3 16.665 16.665 0 0 0 .5 3.9 3.493 3.493 0 1 0 6.8-1.6 9.079 9.079 0 0 1-.3-2.3 10.2 10.2 0 1 1 10.2 10.2h-84a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h84.1a17.25 17.25 0 1 0 0-34.5z"
                  ></path>
                  <path
                    id="Path_128"
                    data-name="Path 128"
                    className="Wind-cls-1"
                    d="M547.4 55.3h-60.7a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h60.9a5.1 5.1 0 1 1-5.1 6.2 3.493 3.493 0 1 0-6.8 1.6 12.2 12.2 0 0 0 24.1-2.7 12.538 12.538 0 0 0-12.4-12.1z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> : <CircularProgress/>}
    </>
  );
};

export default WeatherBar;
