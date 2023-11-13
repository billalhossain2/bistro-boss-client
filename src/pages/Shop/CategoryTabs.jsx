import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenuFilter from "../../hooks/useMenuFilter";
import useMenu from "../../hooks/useMenu";
import RecipeCard from "../shared/RecipeCard/RecipeCard";
import { useState } from "react";

const CategoryTabs = ({category}) => {
  const [loading, error, menus] = useMenu();
  const tabs = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = tabs.indexOf(category)

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const salads = useMenuFilter(menus, "salad");
  const pizzas = useMenuFilter(menus, "pizza");
  const soups = useMenuFilter(menus, "soup");
  const deserts = useMenuFilter(menus, "dessert");
  const drinks = useMenuFilter(menus, "drinks");
  console.log("our shop page data============> ", salads, pizzas)



  return (
    <div className="mb-20">
      <Tabs defaultIndex={tabIndex}>
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab.toUpperCase()}</Tab>
          ))}
        </TabList>

        {/* Salad Category  */}
        <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {
                salads.map(salad => <RecipeCard key={salad._id} item={salad}></RecipeCard>)
              }
            </div>
        </TabPanel>

        {/* Pizza Category  */}
        <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {
                pizzas.map(pizza => <RecipeCard key={pizza._id} item={pizza}></RecipeCard>)
              }
            </div>
        </TabPanel>

        {/* Soup Category  */}
        <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {
                soups.map(soup => <RecipeCard key={soup._id} item={soup}></RecipeCard>)
              }
            </div>
        </TabPanel>

        {/* Desert Category  */}
        <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {
                deserts.map(desert => <RecipeCard key={desert._id} item={desert}></RecipeCard>)
              }
            </div>
        </TabPanel>

        {/* Desert Category  */}
        <TabPanel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {
                drinks.map(drink => <RecipeCard key={drink._id} item={drink}></RecipeCard>)
              }
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
