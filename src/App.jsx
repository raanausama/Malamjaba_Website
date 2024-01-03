// import logo from './logo.svg';
// import { useSelector } from 'react-redux';
import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import LazyLoader from "./components/utils/LazyLoader";
import AnnouncementBanner from "./components/announcementBanner/AnnouncementBanner";
// import CSRMain from "./pages/CSR";
// import Slope from "./pages/Slope";
// import DineIn from "./pages/DineIn";

const HomePage = lazy(() => import("./pages/home"));
const Staycation = lazy(() => import("./pages/staycation"));
const TheSlope = lazy(() => import("./pages/Slope"));
const Packages = lazy(() => import("./pages/packages"));
const BlogMain = lazy(() => import("./pages/BlogMain"));
const Activities = lazy(() => import("./pages/activities"));
const DineIn = lazy(() => import("./pages/DineIn"));
const CSRMain = lazy(() => import("./pages/CSR"));

function App() {
  // const header = useSelector(state => state.header.visible);
  // const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/index';
  const [homeData, setHomeData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getHomeData = async () => {
    try {
      // const response = await axios.get(
      //   `${import.meta.env.VITE_BACKEND_URL}/home/getHomePageData?username=ranausama`
      // );
      console.log('url',`${import.meta.env.VITE_BACKEND_URL}`)
      const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/home/getHomePageData?username=ranausama`
        );
      // Handle the response data here
      console.log("Datasda:", response.data);
      setLoading(true);
      setHomeData(response.data);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getHomeData();
  }, [loading]);
  return (
    <>
      <AnnouncementBanner
        text={homeData?.header_txt}
        // text={"Coming Soon"}
      />
      {/* <ResponsiveAppBar /> */}
      {/* <AnnouncementBanner/> */}
      <Router>
        <Suspense
          fallback={
            <>
              <LazyLoader />
            </>
          }
        >
          
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/index" element={<HomePage />} />
            <Route exact path="/staycation" element={<Staycation />} />
            <Route exact path="/about-us" element={<TheSlope />} />
            <Route exact path="/packages" element={<Packages />} />
            <Route exact path="/activities" element={<Activities />} />
            <Route exact path="/blog" element={<BlogMain />} />
            <Route exact path="/csr" element={<CSRMain />} />
            <Route exact path="/dinein" element={<DineIn />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
