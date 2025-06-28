import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from './components/Navber/Event/Event'
import ExecutiveBodyMembers from './components/Navber/Executive_members/ExecutiveBody_members'
import Hero from './components/Navber/Herosection/Hero'
import Navber from './components/Navber/Navber'
import User_homepage from'./components/Navber/Home/User_homepage'
import Footer from './components/Navber/Footer/Footer';
import Executive_homepage from './components/Navber/Home/Executive_homepage';
// import SubEB_homepage from './components/Navber/Home/SubEB_homepage';


function App() {

  return (

    <Router>
      <Routes >
       <Route path="/" element={<User_homepage/>}/>
        <Route path="/navber" element={<Navber />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/event" element={<Event />} />
        <Route path="/executive" element={<ExecutiveBodyMembers />} />
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/executive-body' element={<Executive_homepage/>}/>
        {/* <Route path='/sub-executive-body' element={<SubEB_homepage/>} /> */}
      </Routes>
    </Router>
    
  )
}

export default App
