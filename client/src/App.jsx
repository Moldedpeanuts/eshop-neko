import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button.jsx'
import Footer from './components/Shared/Footer.jsx'
import HeartIcon  from './components/HeartIcon/HeartIcon.jsx'
import ItemCard from './components/ItemCard/ItemCard.jsx'
import Header from './components/Shared/Header.jsx'
import AdBanner from './components/AdBanners/AdBanner1.jsx'
import Carousel from './components/Carousel/Carousel.jsx'

export default function App() {
  return (
    <>
      <Header></Header>
        <Carousel></Carousel>
      <AdBanner></AdBanner>
      <Footer></Footer>
    </>
  );
}

