import Cover from "../shared/Cover/Cover"
import banerImg from "../../assets/shop/banner2.jpg"
import CategoryTabs from "./CategoryTabs"
const Shop = () => {
  return (
    <div>
      <Cover title="our shop" description="Would you like to try a dish?" coverImg={banerImg}></Cover>

      {/* Category Tabs  */}
      <CategoryTabs></CategoryTabs>
    </div>
  )
}

export default Shop