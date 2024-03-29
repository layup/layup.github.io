import React from 'react'; 

import Navbar from './shared/components/Navbar'
import Landing from './pages/home/components/Landing';
import Portfolio from './pages/home/components/Portfolio';
import Footer from './shared/components/Footer';
import Contact from './pages/home/components/Contact';
//import About from './pages/home/components/About';



function App() {
  return (
    <div>
      <Navbar />
      <Landing/> 
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  )
}

export default App;
