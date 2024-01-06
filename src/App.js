import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner'
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import Fleet from './component/Fleet';


function App() {
  const [activeComponent, setActiveComponent] = useState('home');
  return (
    <div className="App">
      <Navbar setActiveComponent={setActiveComponent}/>
      <div>
        {activeComponent === 'home' && <Banner/>}
        {activeComponent === 'aboutus' && <About/>}
        {activeComponent === 'contactus' && <Contact/>}
        {activeComponent === 'service' && <Service />}
        {activeComponent === 'ourfleet' && <Fleet />}

      </div>
    </div>
  );
}

export default App;
