import React from 'react'
import SectionTitle from '../../../components/SectionTitle'
import RecipeCard from './RecipeCard'

const RecomendedRecipe = () => {
  return (
    <div className='mb-20'>
        <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS"></SectionTitle>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
        </div>
    </div>
  )
}

export default RecomendedRecipe