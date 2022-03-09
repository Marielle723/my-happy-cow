import { render } from "@testing-library/react";
import React, { Component } from "react";
import Slider from "react-slick";

import Card from "./Card";

export default class MultipleItems extends Component {
  render(props) {
    // const FoodList = (props) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="foodList">
        <div className="foodList-title">
          <h1>Vegan Food Near Me</h1>
          <p>View all</p>
        </div>

        <div className="cardList">
          <Slider {...settings}>
            <Card data={this.props.data} />
          </Slider>
        </div>
      </div>
    );
  }
}

// export default FoodList;
