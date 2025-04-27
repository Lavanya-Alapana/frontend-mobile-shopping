import React from 'react'
import Header from '../../components/Header/Header'
import FlashDeals from '../../components/FlashDeals/FlashDeals'
import Categories from '../../components/Categories/Categories'
import MostSearched from '../../components/MostSearched/MostSearched'
import Review from '../../components/Review/Review'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
    <Header/>
    <FlashDeals/>
    <Categories/>
    <MostSearched/>
    <Review/>
    <Footer/>
    
    </>
  )
}

export default Home