import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button.jsx'
import Footer from './components/Shared/Footer.jsx'
import HeartIcon  from './components/HeartIcon/HeartIcon.jsx'
import ItemCard from './components/ItemCard/ItemCard.jsx'
import Header from './components/Shared/Header.jsx'
import AdBanner1 from './components/AdBanners/AdBanner1.jsx'
import AdBanner2 from './components/AdBanners/AdBanner2.jsx'
import Carousel from './components/Carousel/Carousel.jsx'
import NewProducts from './components/NewProducts/NewProducts.jsx'

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="mb-6">
        <Carousel></Carousel>
      </div>
      <AdBanner1></AdBanner1>
      <div className="mt-32 mb-32">
        <AdBanner2></AdBanner2>
      </div>
      <Footer></Footer>
    </>
  );
}

