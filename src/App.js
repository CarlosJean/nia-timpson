/* import logo from './logo.svg'; */
import './App.css';
import Header from "./components/Header";
import './assets/header.css';
import Credits from './components/Credits';
import { AgentContactinfo } from './components/AgentContactInfo';
import { MediaPressLinks } from './components/MediaPressLinks';
import { About } from './components/About';
import { Education } from './components/Education';

function App() {
  return (
    <>
      <Header />
      <Credits />
      <AgentContactinfo/>
      <MediaPressLinks/>
      <About/>
      <Education />
    </>
  )
}

export default App;
