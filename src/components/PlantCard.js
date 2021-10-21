import React, {useState} from "react";

function PlantCard({plant: {name, image, price}}) {
  const [soldOut, setSoldOut] = useState(true)

  const handleSoldOut = () =>{
    setSoldOut((current) => !current)
}
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleSoldOut} className="primary">In Stock</button>
      ) : (
        <button onClick={handleSoldOut} >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
