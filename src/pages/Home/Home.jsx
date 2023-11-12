import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import BistroBossBox from './BistroBossBox/BistroBossBox'
import PopularMenus from './PopularMenus/PopularMenus'
import CallUs from './CallUs/CallUs'
import RecomendedRecipe from './RecomendedRecipe/RecomendedRecipe'
import Featured from './Featured/Featured'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <main>
      <Helmet>
       <title>Home | Bistro Boss</title>
       </Helmet>
      <Banner></Banner>
      <div className='max-w-[1140px] mx-auto px-3'>
      <Category></Category>
      <BistroBossBox></BistroBossBox>
      <PopularMenus></PopularMenus>
      <CallUs></CallUs>
      <RecomendedRecipe></RecomendedRecipe>
      <Featured></Featured>
      <Testimonials></Testimonials>
      </div>
    </main>
  )
}

export default Home