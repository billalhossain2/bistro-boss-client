import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import PopularMenuItem from './PopularMenuItem'

const PopularMenus = () => {
  return (
    <div className='mb-20'>
        <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SectionTitle>
        <div className='grid md:grid-cols-2 gird-cols-1 gap-5'>
          <PopularMenuItem></PopularMenuItem>
          <PopularMenuItem></PopularMenuItem>
          <PopularMenuItem></PopularMenuItem>
          <PopularMenuItem></PopularMenuItem>
          <PopularMenuItem></PopularMenuItem>
          <PopularMenuItem></PopularMenuItem>
        </div>
    </div>
  )
}

export default PopularMenus