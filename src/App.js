/* import logo from './logo.svg'; */
import './App.css';
import Header from "./components/Header";
import Credits from './components/Credits';
import { AgentContactinfo } from './components/AgentContactInfo';
import { MediaPressLinks } from './components/MediaPressLinks';
import { About } from './components/About';
import { Education } from './components/Education';
import Guild from './components/Guild';
import { Images } from './components/Images';

function App() {
  return (
    <div className="container">
      <Header/>
      <Guild/>
      <Images/>
      <Credits />
      <AgentContactinfo/>
      {/*<MediaPressLinks/>
      <About/>
      <Education /> */}
    </div>
  )
}

export default App;
