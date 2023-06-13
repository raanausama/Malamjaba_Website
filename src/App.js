// import logo from './logo.svg';
// import { useSelector } from 'react-redux';
import './App.css';
import HomePage from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Staycation from './pages/staycation';
import TheSlope from './pages/TheSlope';
import Packages from './pages/packages';
import ResponsiveAppBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Activities from './pages/activities';


function App() {
  // const header = useSelector(state => state.header.visible);
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/index';

  return (
    <div className="App">
      <ResponsiveAppBar />

      <div className='flex-body'>
      <Router>
        <Routes>
        
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/index" element={<HomePage />} />
        <Route exact path="/staycation" element={<Staycation />} />
        <Route exact path="/the-slope" element={<TheSlope />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/activities" element={<Activities />} />
        
        </Routes>
      </Router>
      
      </div>
    </div>
  );
}

export default App;
