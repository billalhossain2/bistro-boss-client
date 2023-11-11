import React from 'react'
import MenuItem from '../../shared/MenuItem/MenuItem'
import Cover from '../../shared/Cover/Cover'

const MenuCategory = ({offered, deserts, pizzas, salads, soups, title, description, coverImg}) => {
  return (
    <section className='mb-20'>
      {title && <Cover title={title} description={description} coverImg={coverImg}></Cover>}
      <div className='md:grid md:grid-cols-2 gird-cols-1 gap-5'>
       {
        offered?.map(item => <MenuItem key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></MenuItem>)
       }
    </div>
      <div className='md:grid md:grid-cols-2 gird-cols-1 gap-5'>
       {
        deserts?.map(item => <MenuItem key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></MenuItem>)
       }
    </div>
      <div className='md:grid md:grid-cols-2 gird-cols-1 gap-5'>
       {
        pizzas?.map(item => <MenuItem key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></MenuItem>)
       }
    </div>
      <div className='md:grid md:grid-cols-2 gird-cols-1 gap-5'>
       {
        salads?.map(item => <MenuItem key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></MenuItem>)
       }
       {
        soups?.map(item => <MenuItem key={item._id} img={item.image} title={item.name} description={item.recipe} price={item.price}></MenuItem>)
       }
    </div>
    <div className='flex justify-center mt-5'><button className='px-5 py-2 rounded-lg border-b-4 border-[#1F2937] hover:bg-[#1F2937] hover:text-white duration-300'>ORDER YOUR FAVOURITE FOOD</button></div>
    </section>
  )
}

export default MenuCategory