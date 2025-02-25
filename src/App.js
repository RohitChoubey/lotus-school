import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/pages/Header';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Footer from './Components/pages/Footer';
import Media from './Components/pages/Media';
import Videos from './Components/pages/Videos';
import SocietyBankAccount from './Components/pages/SocietyBankAccount';
import './Components/assets/css/style.css';
import News from './Components/pages/News';
import UploadPost from './Components/pages/UploadPost';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path= "/contact" element={<Contact />} />
      <Route path="/photos" element={<Media/>} />
      <Route path="/videos" element={<Videos/>} />
      <Route path='/donation' element={<SocietyBankAccount />} /> 
      <Route path='/news' element={<News />} />
      <Route path= '/upload' element={<UploadPost />} />

      
    {/* Define other routes here */}
    </Routes>
    <Footer />
  </Router>
   </>
  );
}

export default App;
