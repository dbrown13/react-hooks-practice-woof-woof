import React, { useState, useEffect } from "react";
import DogBar from "./DogBar"
import DogDetail from "./DogDetail";
import Filter from "./Filter";


// DELIVERABLE 1: SHOW PUPS IN DOG BAR

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [goodDogsOnly, setGoodDogsOnly] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then((response) => response.json())
    .then(setDogs)
  }, []);

  function onUpdateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) => 
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogs(updatedDogs);
  }

  function handleToggleFilter(){
    setGoodDogsOnly((goodDogsOnly) => !goodDogsOnly);
  }

  const selectedDog = dogs.find((dog) => dog.id === selectedDogId);

  let displayDogs = dogs;
  if (goodDogsOnly) {
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog);
  }

  return (
    <div className="App">
      <DogBar dog={displayDogs} onClickDog={setSelectedDogId}/>
      <DogDetail dog={selectedDog} onUpdateDog={onUpdateDog}/>
      <Filter goodDogsOnly={goodDogsOnly} onFilterClick={handleToggleFilter} />
    </div>
  );
}

export default App;
