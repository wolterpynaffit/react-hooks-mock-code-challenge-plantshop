import React from "react";
import { useState } from "react";

function PlantCard({plant, removePlant}) {
  /*-------------------- THIS WILL HANDLE TOGGLE --------------------*/
  const [stock, setStock] = useState(false)

  function toggleStock(){
    setStock(!stock) 
  }
  /*-------------------- DELETE   --------------------*/
  function handleDelete (){
    const OPTIONS ={
      method: "DELETE"
    }
    fetch(`http://localhost:6001/plants/${plant.id}`, OPTIONS)
    .then(response => response.json())
    .then(() => removePlant(plant))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>


      {stock ? (
        <button onClick={toggleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}

      <button onClick={handleDelete}> Delete </button>

      
    </li>
  );
}

export default PlantCard;
