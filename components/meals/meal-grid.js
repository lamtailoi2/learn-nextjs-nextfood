import classes from "./meal-grid.module.css";
import MealItem from "./meal-item";
import { getMeals } from "@/lib/meal";
const MealGrid = ({ meals }) => {
  return (
    <>
      <ul>
        {meals.map((meal) => {
          return (
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MealGrid;
