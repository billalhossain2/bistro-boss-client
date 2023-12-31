import salad from "../../../assets/menu/salad-bg.jpg"

const RecipeCard = ({item}) => {
  const {name, recipe, image} = item || {};
  console.log("Recipe card page=======> ", item)
  return (
    <div className="card bg-[#F3F3F3] shadow-xl border-[1px] border-[#bb85062d]">
  <figure className="px-10 pt-10">
    <img src={image} alt="Recipe Image Not Found" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions mt-2">
      <button className="text-[#BB8506] border-b-4 border-[#BB8506] rounded-lg bg-[#E8E8E8] px-5 py-3 uppercase hover:bg-[#1F2937] hover:border-[#1F2937] duration-300">add to cart</button>
    </div>
  </div>
</div>
  )
}

export default RecipeCard