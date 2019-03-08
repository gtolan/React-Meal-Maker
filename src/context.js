import React, { Component } from "react";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    mealList: [],
    heading: "Top Meals"
  };
  componentDidMount() {
    const url = "https://www.themealdb.com/api/json/v1/1/latest.php";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(meals => {
        console.log(meals);
        // meals = meals;
        this.setState({ mealList: meals });
      })
      .catch(err => {
        console.log("err with meal fetch");
      });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
