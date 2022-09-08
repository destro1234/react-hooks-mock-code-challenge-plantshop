import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then( plants => setPlants(plants))
  }, [])

  function handleAddPlant(newPlant) {
    const newPlantList= [...plants, newPlant]
    console.log(newPlantList)
    setPlants(newPlantList)
  }


    
  const plantsToDisplay = plants.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
     

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantsToDisplay} onAddPlant={handleAddPlant} onSearch={setSearch}/>
    </div>
  );
}

export default App;
