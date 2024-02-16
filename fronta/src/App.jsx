import './App.css';
import Home from './components/Home';
import Beats from './components/Beats';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Home/>
      <div className='mt-[7cm]'>
      <Beats/>
      </div>
      
    </div>
  );
}

export default App;
