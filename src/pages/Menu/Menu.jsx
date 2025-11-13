import { useEffect, useState } from "react";
import FoodBox from "../../components/FoodBox";
import "./Menu.css";
import data from "../../data/meals.json"; // ✅ Import your local JSON file

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // ✅ Load local data instead of fetching from API
    setCategories(data.categories);
  }, []);

  return (
    <section id="menu">
      <div id="categoryContainer">
        {categories.map((category) => (
          <FoodBox
            key={category.idCategory}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;