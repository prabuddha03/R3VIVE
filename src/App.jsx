import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Browse from './components/Browse'
import Boxes1 from './components/Boxes1.jsx'
import Card from './components/Card.jsx'
import Arrivals from './components/Arrivals.jsx'
import Footer from './components/Footer.jsx'


export default function App() {

    return(
        <>
        <Navbar/>
        <Hero/>
        <Browse/>
        <Boxes1/>
        <Search/>
        <Card/>
        <Arrivals/>
        <Footer/>
        
        </>
    )
  
}

