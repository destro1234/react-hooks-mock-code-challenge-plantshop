import React, { useState} from "react";

function PlantCard({name, image, price}) {

  const [stocked, setStocked] = useState(true)

  function handleStockedClick(params) {
    setStocked(!stocked)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stocked ? (
        <button onClick={handleStockedClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockedClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
