import React from 'react'
import Cover from '../shared/Cover/Cover'
import bannerCoverImg from "../../assets/menu/banner3.jpg"
import SectionTitle from '../../components/SectionTitle'
import useMenu from '../../hooks/useMenu'
import MenuCategory from './MenuCategory/MenuCategory'

// category image 
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [loading, error, menus] = useMenu();
  const offered = menus.filter(menu => menu.category === "offered")
  const deserts = menus.filter(menu => menu.category === "dessert")
  const pizzas = menus.filter(menu => menu.category === "pizza")
  const salads = menus.filter(menu => menu.category === "salad")
  const soups = menus.filter(menu => menu.category === "soup")
  return (
    <div>
      <div className='mb-20'>
      <Cover title="Our Menu" description="Would you like to try a dish?" coverImg={bannerCoverImg}></Cover>
      </div>
      {/* Offered Menu  */}
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCategory offered={offered}></MenuCategory>

      {/* Deserts Menu  */}
      <MenuCategory deserts={deserts} title="Deserts" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={desertImg}></MenuCategory>

         {/* Pizza Menu  */}
         <MenuCategory pizzas={pizzas} title="Pizza" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={pizzaImg}></MenuCategory>

         {/* Salad Menu  */}
         <MenuCategory salads={salads} title="Salads" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={saladsImg}></MenuCategory>

         {/* Soup Menu  */}
         <MenuCategory soups={soups} title="Soups" description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." coverImg={soupImg}></MenuCategory>
    </div>
  )
}

export default Menu