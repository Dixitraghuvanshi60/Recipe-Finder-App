// import { useEffect, useState } from 'react'
// import FoodBox from '../../components/FoodBox'
// import "./Menu.css"

// const Menu = () => {
 
//   const [categories, setCategories] = useState([])
//   const displayFood = async () => {
//     const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     const data = await res.json()
//     setCategories(data.categories)

//   }
//   useEffect(() => {
//     displayFood()
//   }, [])

//   return (
//     <section id='menu'>
       
//         <div id='categoryContainer'>
        
//         {
//           categories.map((category)=>{
//             return <FoodBox key={category.idCategory} category={category}/>
//           })
//         }
//       </div>
//     </section>
//   )
// }

// export default Menu



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