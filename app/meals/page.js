import Link from "next/link";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meal-grid";
import { getMeals } from "@/lib/meal";
import { Suspense } from "react";
import MealsLoading from "./loading-out";
const Meals = async () => {
  const meals = await getMeals();
  return <MealGrid meals={meals} />;
};

const MealPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>{" "}
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};
export default MealPage;
