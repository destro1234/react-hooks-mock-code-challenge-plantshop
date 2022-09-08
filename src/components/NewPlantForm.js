import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState(" ")
  const [price, setPrice] = useState(" ")


  function handleSubmit(e) {
    e.preventDefault()
    const newPlant= {
      image: image,
      name: name,
      price: price
    }
   
    onAddPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={(e) => setPrice(parseInt(e.target.value))} type="number" name="price" step="0.01" placeholder="Price" />
        <button  type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
