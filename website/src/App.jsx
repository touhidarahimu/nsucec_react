import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from './components/Navber/Event/Event'
import ExecutiveBodyMembers from './components/Navber/Executive_members/ExecutiveBody_members'
import Hero from './components/Navber/Herosection/Hero'
import Navber from './components/Navber/Navber'
import Guest_homepage from './components/Navber/Home/Guest_homepage';
import Footer from './components/Navber/Footer/Footer';

function App() {

  return (

    <Router>
      <Routes >
       <Route path="/" element={<Guest_homepage />} />
        <Route path="/navber" element={<Navber />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/event" element={<Event />} />
        <Route path="/executive" element={<ExecutiveBodyMembers />} />
        <Route path='footer' element={<Footer/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
