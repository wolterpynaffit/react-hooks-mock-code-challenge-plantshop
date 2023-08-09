import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  /*---------------THIS WILL GET THE DATA ---------------*/
  const [plantData, setPlantData] = useState([])

  useEffect(() => { 
    fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setPlantData(data))
  }, [])

  /*---------------THIS WILL HANDLE SUBMIT ---------------*/
function addNewPlant(somePlant){

  
  setPlantData([...plantData, somePlant])

//  const theNewPlant =  plantData([...plantData, somePlant])
//   setPlantData(theNewPlant)

}
/*---------------THIS WILL HANDLE DELETE ---------------*/

function removePlant(removedPlant){
  const removed = plantData.filter(plant => plant.id !== removedPlant.id)
  setPlantData(removed)
}

/*---------------THIS WILL FILTER ---------------*/
const [search, setSearched] = useState('')

function handleSearch(searchText){
  setSearched(searchText)
}

const displayPlants = plantData.filter((plant)=> {
  return plant.name.toLowerCase().includes(search.toLowerCase())
})
  


  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant }  />
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList removePlant={removePlant} plantData={displayPlants} setPlantData={setPlantData} />
    </main>
  );
}

export default PlantPage;
