import React, { Component } from "react";
import Slider from "react-slick";

import Card from "./Card";

const FoodList = (props) => {
  return (
    <div className="foodList">
      <div className="foodList-title">
        <h1>Vegan Food Near Me</h1>
        <p>View all</p>
      </div>

      <div className="cardList">
        <Card data={props.data} />
      </div>
    </div>
  );
};

export default FoodList;
