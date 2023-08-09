import React from "react";
import PlantCard from "./PlantCard";
import { useState } from "react";

function PlantList({plantData, setPlantData, removePlant}){
  
  return (
    <ul className="cards">{plantData.map(plant => <PlantCard key={plant.id} plant={plant} removePlant={removePlant}/>  )}</ul>
  );
}

export default PlantList;
