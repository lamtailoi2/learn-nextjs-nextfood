import Link from "next/link";
const MealPage = () => {
  return (
    <div>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Share a Meal</Link>
      </p>
      <p>
        <Link href="/meals//first-meal">First Meal</Link>
      </p>
      <p>
        <Link href="/meals//second-meal">Second Meal</Link>
      </p>
    </div>
  );
};
export default MealPage;
