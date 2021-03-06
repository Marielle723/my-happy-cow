import { render } from "@testing-library/react";
import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import { FaChevronRight } from "react-icons/fa";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

export default class CustomArrows extends Component {
  render(props) {
    // const FoodList = (props) => {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div className="foodList">
        <div className="foodList-title">
          <h1>Vegan Food Near Me</h1>
          <p>
            <span>
              View all <FaChevronRight />
            </span>
          </p>
        </div>

        <div className="cardList">
          <Slider {...settings}>
            {this.props.data.map((place) => {
              return <Card place={place} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

// export default FoodList;
