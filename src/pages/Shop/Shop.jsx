import Cover from "../shared/Cover/Cover"
import banerImg from "../../assets/shop/banner2.jpg"
import CategoryTabs from "./CategoryTabs"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet"
const Shop = () => {
  const {category} = useParams();
  return (
    <div>
      <Helmet>
       <title>Shop | Bistro Boss</title>
       </Helmet>
      <Cover title="our shop" description="Would you like to try a dish?" coverImg={banerImg}></Cover>

      {/* Category Tabs  */}
      <CategoryTabs category={category}></CategoryTabs>
    </div>
  )
}

export default Shop