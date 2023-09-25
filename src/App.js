
import React from 'react';
import './App.css'; // Import the CSS file

import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './components/Contact';
import Splash from './components/Splash';
import RegisterPage from './components/RegisterPage';

import Layout from "./components/Layout";
import LoginPage from './components/LoginPage';
import Fashion from './components/Fashion';
import HealthBeauty from './components/Health';
import Footer from './components/Footer';
import Mainscreen from './components/Mainscreen';


function App() {
  return (
 <>
      <BrowserRouter>
        <Navbar />
        <Routes path="/" element={<Layout />}>
          <Route index element={<Mainscreen/>} />
          <Route path='/Fashion' element={<Fashion/>}/>
          <Route path='/HealthBeauty' element={<HealthBeauty/>}/>
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Splash" element={<Splash />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
<br/>
<Footer/>
      </BrowserRouter>
  </>
    );

  }
  export default App ;
  

 