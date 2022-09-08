import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{

      plants.map(p => <PlantCard key={p.id} name={p.name} image={p.image} price={p.price}/>)
      /* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
