import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import RecipeCard from '../../shared/RecipeCard/RecipeCard'
import useMenu from '../../../hooks/useMenu'

const RecomendedRecipe = () => {
  const [loading, error, menus] = useMenu();
  const salads = menus.filter(menu => menu.category === "salad")

  if(error){
    return <h1>{error}</h1>
   }

  if(loading){
   return <h1>Loading..........</h1>
  }
  return (
    <section className='mb-20'>
        <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS"></SectionTitle>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {
              salads.map(salad => <RecipeCard key={salad._id} salad={salad}></RecipeCard>)
            }
        </div>
    </section>
  )
}

export default RecomendedRecipe