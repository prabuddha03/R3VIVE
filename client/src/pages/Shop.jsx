import React from 'react';
import Ecomerce from "../components/Ecommerce";
import Navbersec from "../components/Navbersec";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Hero from "../E-commerce-components/Hero"
import Browse from "../E-commerce-components/Browse"
import Boxes1 from "../E-commerce-components/Boxes1"
import Search from '../E-commerce-components/Search';
import Card from '../E-commerce-components/Card';
import Arrivals from "../E-commerce-components/Arrivals"



const Shop = () => {
  return (
    <main>
<Navbersec />
<Hero />
<Browse />
<Boxes1/>
<Search />
<Card />
<Arrivals />
<Footer />
    </main>
  )
}

export default Shop
