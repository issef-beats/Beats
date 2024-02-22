import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Beats from './components/Beats';
import Footer from './components/Footer';
import MusicPlayer from './components/PlayBar';
import BeatDetails from './components/BeatDetails';
import Login from './components/login';
import Contact from './components/Contact'
import Chart from './components/Chart';
function App() {
  return (
    // <div>
    //   <Home/>
    //   <div className='mt-[9cm]'>
    //   <Beats/>
    //   </div>
    //   <div>
    //    <MusicPlayer/> 
    //   </div>
    // {/* <Contact/> */}
    // {/* <BeatDetails/> */}
    // </div>
    <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chart" element={<Chart/>} />
    </Routes>
  
  );
}

export default App;
