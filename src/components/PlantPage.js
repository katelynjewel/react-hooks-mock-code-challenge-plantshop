import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("")
  const [plants, setPlants] = useState([])
  
  useEffect(getPlants, []);

  function getPlants(){
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }

  const handleSearch = plants.filter((plant) => plant.name.includes(search));

  return (
    <main>
      <NewPlantForm setPlants={setPlants}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={handleSearch}/>
    </main>
  );
}

export default PlantPage;