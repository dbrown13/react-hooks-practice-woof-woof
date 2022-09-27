import React, { useState } from "react";

function DogDetail( {dog, onUpdateDog} ) {
    if (!dog) return <h3>Select a dog</h3>

    const { id, name, image, isGoodDog } = dog;

    function handleClick() {
        fetch(`http://localhost.3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isGoodDOg: !isGoodDog,
            }),
        })
        .then((response) => response.json())
        .then(onUpdateDog)
    }
    return(
        <div id="dog-summary-container">
            <h1>DOG:</h1>
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <button onClick={handleClick}>{isGoodDog ? "Good" : "Bad"} Dog!</button>
            </div>
        </div>
    );
}

        {/* <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"></div>
       */}

export default DogDetail

