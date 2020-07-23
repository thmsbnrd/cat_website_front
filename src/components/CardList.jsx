import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardColumns } from "react-bootstrap";
import CatCard from "./CatCard";

function CardList() {
  const [catList, setCatList] = useState([]);

  const getCatData = () => {
    const url = "http://localhost:3000/api/cats/";
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setCatList(data))
      .catch();
  };

  const removeCat = (index) => {
    const url = `http://localhost:3000/api/cats/${index}`;
    axios
      .delete(url)
      .then((response) => response.status === 200 && getCatData());
  };

  useEffect(() => {
    getCatData();
  }, []);

  return (
    <div className="CatCard">
      <CardColumns>
        {catList.map((element) => (
          <CatCard
            key={element.id}
            index={element.id}
            data={element}
            removeCat={removeCat}
          />
        ))}
      </CardColumns>
    </div>
  );
}

export default CardList;
