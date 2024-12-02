import React from "react";
import { useLocation } from "react-router-dom";
const RecipePage = () => {
  const location = useLocation();
  const { recipe, bg } = location.state;
  const ingredients = recipe.ingredients;
    
  return (
    <div className="ml-5">
      <div className="p-6 max-w-screen-lg mx-auto space-y-10 ml-10 mt-10">
        <section className="text-center">
          <div className="bg-gray-200 w-full h-60 rounded-lg shadow-md flex items-center justify-center">
            <img
              src={recipe.image}
              alt="Recipe Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h1 className="text-2xl font-extrabold mt-4">{recipe.label}</h1>
          <a
            href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-32"
          >
            <p className="text-gray-600 mt-2 hover:text-blue-500">
              Discover content, explore features, and dive into details with ease.
            </p>
          </a>
        </section>
        {/* Grid container */}
        <div className="grid grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className={`${bg} shadow-lg rounded-lg p-4 flex flex-col items-start space-y-4`}
            >
              <div className="bg-gray-200 w-16 h-16 rounded-md flex items-center justify-center">
                <img
                  src={ingredient.image}
                  alt={`${ingredient.food} image`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold">{ingredient.food}</h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>{ingredient.text}</li>
                  <li>Measure: {ingredient.measure}</li>
                  <li>Quantity: {ingredient.quantity}</li>
                  <li>Weight: {ingredient.weight} gram</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecipePage;
