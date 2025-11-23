import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Carousel from '../components/Caursel'
import FeatureSection from '../components/FeatureSection'
import ShowCase from '../components/ShowCase'

export default function Home() {
  return (
    <>
      <FeatureSection />
      <Hero/>
      <ShowCase/>
      <Carousel />
    </>
  )
}
