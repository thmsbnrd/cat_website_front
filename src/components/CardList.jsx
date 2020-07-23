import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardColumns } from "react-bootstrap";
import CatCard from "./CatCard";

function CardList() {
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cats/")
      .then((response) => response.data)
      .then((data) => setCatList(data));
  }, []);

  const [catList, setCatList] = useState([]);

  const deletecard = (id) => {
    const newCatList = catList.filter((card) => card.id !== id);
    setCatList(newCatList);
  };

  return (
    <div className="CatCard">
      <CardColumns>
        {catList.map((element, index) => (
          <CatCard key={index} data={element} deletecard={deletecard} />
        ))}
      </CardColumns>
    </div>
  );
}

export default CardList;
