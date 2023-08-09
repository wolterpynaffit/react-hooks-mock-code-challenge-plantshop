import React from "react";
import { useState } from "react";

function NewPlantForm({addNewPlant }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

  const changeName = (e) =>  setName(e.target.value)
  const changeImage = (e) =>  setImage(e.target.value)
  const changePrice = (e) =>  setPrice(e.target.value)

  function handleSubmit(e){
    e.preventDefault()


    const OPTIONS = {
      method: "POST",
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name, image, price
      })
    }
    fetch('http://localhost:6001/plants', OPTIONS)
    .then(response => response.json())
    .then (data =>  addNewPlant(data) )
  }



  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={changeName}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={changeImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price"value={price} onChange={changePrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
