import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'
import { useState, useEffect, useRef } from 'react'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [dark, setDark] = useState(true);
  return (
    <BrowserRouter>
      <div className="scroll-smooth relative z-0 bg-primary dark:bg-slate-200">
        <Navbar dark={dark} setDark={setDark} />
        <Hero dark={dark} />
        <About dark={dark}/> 
        <Tech />
        <Works />
        <Experience dark={dark} />
        <Contact dark={dark} />
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App
