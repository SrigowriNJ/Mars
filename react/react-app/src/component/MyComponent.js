import React, {useState} from 'react';

function MyComponent() {
    const [color, changeColor]=useState("");
    return (
        <div>
          <h2> This is a user defined component </h2>  
          <h3>My favorite color is: {color}</h3>
          <input type="radio" id="Red" name="color" value="Red" onClick={(e)=> changeColor(e.target.value)}/>
          <label for="Red">Red</label><br></br>
          <input type="radio" id="Green" name="color" value="Green" onClick={(e)=> changeColor(e.target.value)}/>
          <label for="Green">Green</label><br></br>
          <input type="radio" id="Blue" name="color" value="Blue" onClick={(e)=> changeColor(e.target.value)}/>
          <label for="Blue">Blue</label><br></br>
        </div>
    );
}

export default MyComponent;