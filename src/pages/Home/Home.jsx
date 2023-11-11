import React from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import BistroBossBox from './BistroBossBox/BistroBossBox'

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <div className='max-w-[1140px] mx-auto'>
      <Category></Category>
      <BistroBossBox></BistroBossBox>
      </div>
    </main>
  )
}

export default Home