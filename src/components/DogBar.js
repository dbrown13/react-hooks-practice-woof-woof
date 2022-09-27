import React, { useState } from "react"

function DogBar( {dogs, onClickDog} ) {
    const dogSpan = dogs.map((dog) => {
        return(
            <span key={dog.id} onClick={() => onClickDog(dog.id)}>
                {dog.name}
            </span>
        )});

    return(
        <div id="dog-bar">{dogSpan}</div>
    );
}
export default DogBar;