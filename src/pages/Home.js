/* IMPORT GENERAL */
import react, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import pinkwhiteshape from "../assets/pinkwhiteshape.png";
import brown from "../assets/brown.png";

/* IMPORT COMPONENTS */
import Banner from "../components/Banner";
import FoodList from "../components/FoodList";

/* IMPORTATION ACTIVITY INDICATOR FOR REACT */
import Bounce from "react-activity/dist/Bounce";
import "react-activity/dist/Bounce.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://my-happy-cow.herokuapp.com/");
        setData(response.data);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading === true ? (
    <div>
      <h1>
        En cours de chargement
        <Bounce />
      </h1>
    </div>
  ) : (
    <div>
      <Banner />
      <img className="banner-shape" src={pinkwhiteshape} alt="white shape" />
      <FoodList data={data} />
    </div>
  );
};

export default Home;
