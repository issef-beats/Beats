import './App.css';
import Home from './components/Home';
import Beats from './components/Beats';
import Footer from './components/Footer';

import Contact from './components/Contact';
import Navbar from './components/navbar';
import DropNavbar from './components/dropNavbar';
import Login from './components/login';
import Signup from './components/signup'
import Profile from './components/profile';
import Whishlist from './components/wishlist';
function App() {
  return (
    <div>
    {/* <Signup/> */}
      <Navbar/>
      <Profile/>
{/* <Whishlist/> */}
      {/* <Login/> */}
      {/* <DropNavbar/> */}
      {/* <Home/>
      <div className='mt-[7cm]'>
      <Beats/>
      </div>
      <div>
       <MusicPlayer/> 
      </div> */}
      <BeatDetails/>
    </div>
  );
}

export default App;
