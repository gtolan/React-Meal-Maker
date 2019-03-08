import React from "react";
import { Link } from "react-router-dom";

const Meal = props => {
  const { meal } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h4>{meal.strMeal}</h4>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            style={{ width: "10rem", height: "10rem" }}
          />
          <p className="category">{meal.strCategory}</p>

          <Link
            to={`/mealview/${meal.idMeal}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-cheveron-right" />
            View Meal
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Meal;
