import React, { Component } from "react";
import { Consumer } from "../context";
import Spinner from "./layout/Spinner";
import Meal from "./Meal";

class Meals extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { mealList, heading } = value;
          if (mealList.meals === undefined || mealList.meals.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h2>{heading}</h2>
                <div className="row">
                  {mealList.meals.map(item => (
                    <Meal key={item.idMeal} meal={item} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
export default Meals;
