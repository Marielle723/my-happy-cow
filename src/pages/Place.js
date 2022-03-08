import { useParams, Link } from "react-router-dom";
import react, { useState, useEffect } from "react";
import axios from "axios";

import Bounce from "react-activity/dist/Bounce";
import "react-activity/dist/Bounce.css";

const Place = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-happy-cow.herokuapp.com/place/${id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <div>
      <h1>
        En cours de chargement
        <Bounce />
      </h1>
    </div>
  ) : (
    <div className="place-header" style={{ backgroundColor: "pink" }}></div>
  );
};

export default Place;
