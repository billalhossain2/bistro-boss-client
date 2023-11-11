import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import BistroBossBox from './BistroBossBox/BistroBossBox'
import PopularMenus from './PopularMenus/PopularMenus'
import CallUs from './CallUs/CallUs'

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <div className='max-w-[1140px] mx-auto px-3'>
      <Category></Category>
      <BistroBossBox></BistroBossBox>
      <PopularMenus></PopularMenus>
      <CallUs></CallUs>
      </div>
    </main>
  )
}

export default Home