import { useEffect, useState } from "react";
import FoodBox from "../../components/FoodBox";
import "./Menu.css"

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // ✅ Always use relative path from public folder
    fetch(`${import.meta.env.BASE_URL}data/meals.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded data:", data); // 👀 debug check
        // If your JSON has a "categories" key
        setCategories(data.categories || []);
      })
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <section id="menu">
      <div id="categoryContainer">
        {categories.length === 0 ? (
          <p>Loading meals...</p>
        ) : (
          categories.map((category) => (
            <FoodBox key={category.idCategory} category={category} />
          ))
        )}
      </div>
    </section>
  );
};

export default Menu;