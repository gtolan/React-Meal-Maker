import React, { Component } from "react";
import Spinner from "./layout/Spinner";
import { Link } from "react-router-dom";

class MealView extends Component {
  state = {
    meals: {},
    ingredients: []
  };
  componentDidMount() {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${
      this.props.match.params.id
    }`;
    // const filterIngredients = obj => {
    //   console.log(obj);
    //   return obj.forEach((item, key) => {
    //     console.log(key, item);
    //     if (key.includes("strIngredient") && item !== "") {
    //       return item;
    //     }
    //   });
    // };

    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(meal => {
        console.log(meal);
        let res = meal.meals[0];
        this.setState({ meals: res });
        // let ingredientsRes = filterIngredients(res);
        // // this.setState({ ingredients: ingredientsRes });
      })
      .catch(err => {
        console.log("err with meal fetch");
      });
  }

  render() {
    const { meals } = this.state;
    console.log(meals, "render m");
    if (meals === undefined || meals.length === 0) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <h1>View Meal Details</h1>
          <div className="card">
            <div className="row">
              <div className="left col-sm-7 pr-0">
                <h3 className="card-header">{meals.strMeal}</h3>
                <h5>Ingredients</h5>
                {/* <ul className="list-group col-sm-6">
                  {ingredients.map(item => (
                    <li className="list-group-item">{item}</li>
                  ))}
                </ul> */}

                <h5>Instructions</h5>
                <p className="instructions">{meals.strInstructions}</p>
                <iframe src={meals.strYoutube} />
              </div>
              <div className="right col-sm-5 pl-0">
                <img
                  src={meals.strMealThumb}
                  alt={meals.strMeal}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MealView;
