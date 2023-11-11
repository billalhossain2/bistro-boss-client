import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import MenuItem from '../../shared/MenuItem/MenuItem'
import pizza from "../../../assets/menu/pizza-bg.jpg"
import useMenu from '../../../hooks/useMenu'
const PopularMenus = () => {
  const [loading, error, menus] = useMenu();
  const popularMenus = menus.filter(menu => menu.category === "popular");
  return (
    <section className='mb-20'>
        <SectionTitle subHeading="---Check it out---" heading="FROM OUR MENU"></SectionTitle>
        <div className='md:grid md:grid-cols-2 gird-cols-1 gap-5'>
          {
            popularMenus?.map(menu => (<MenuItem img={menu.image} title={menu.name} description={menu.recipe} price={menu.price}></MenuItem>))
          }
        </div>
        <div className='flex justify-center'>
        <button className='text-[#1F2937] font-semibold border-b-4 border-[#1F2937] rounded-b-lg px-5 py-2 mt-10 hover:bg-[#1F2937] hover:text-white duration-300'>View Full Menu</button>
        </div>
    </section>
  )
}

export default PopularMenus