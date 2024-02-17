import './App.css';
import Home from './components/Home';
import Beats from './components/Beats';
import Footer from './components/Footer';
import MusicPlayer from './components/PlayBar';
import BeatDetails from './components/BeatDetails';
function App() {
  return (
    <div>
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
