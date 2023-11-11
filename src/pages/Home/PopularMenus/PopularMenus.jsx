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
        <div className='flex justify-center'>
        <button className='text-[#1F2937] font-semibold border-b-4 border-[#1F2937] rounded-b-lg px-5 py-2 mt-10 hover:bg-[#1F2937] hover:text-white duration-300'>View Full Menu</button>
        </div>
    </div>
  )
}

export default PopularMenus