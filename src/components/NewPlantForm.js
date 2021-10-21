import React, { useState } from "react";

function NewPlantForm({setPlants}) {

  const [addNewPlant, setAddNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(e) {
    e.preventDefault();
    setAddNewPlant((currentNewPlant) => {
      return {
        ...currentNewPlant,
        [e.target.name]: e.target.value,
      }
    });
  }

  function addPlant() {
    const plants={
      name: addNewPlant.name,
      image: addNewPlant.image,
      price: addNewPlant.price
    }
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plants)
    }).then(resp => resp.json())
    .then((data) => setPlants(currentPlants => [...currentPlants, data]))
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
