import './App.css';
import Home from './components/Home';
import Beats from './components/Beats';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/navbar';
import DropNavbar from './components/dropNavbar';
import Login from './components/login';
function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Login/>
      {/* <DropNavbar/> */}
      {/* <Home/>
      <div className='mt-[7cm]'>
      <Beats/>
      </div> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
