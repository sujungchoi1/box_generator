import React, { useState } from "react";

const Form = (props) => {

  const [inputColor, setInputColor] = useState("");
  const [inputWidth, setInputWidth] = useState("");
  const [inputHeight, setInputHeight] = useState("");

  const addNewBox = (color, width, height) => {
    console.log("**** input", color);
    // creating a new array with everythign from previous array plus {color} item
    props.setBox([...props.box, { color, width, height }]);
  };

  const handleSubmit = (e) => {
    //prevents default behavior of the form; refreshing
    e.preventDefault();
    // const [boxes, setBoxes] = useState("")
    // setBoxes([{color: inputColor}]);
    //                          if no inputWidth => 100 (false/true)
    // props.newBoxes( inputColor, inputWidth || 100, inputHeight || 100 );

    // conditional FIRST => make the change
    if (inputWidth === "" && inputHeight === "") {
      addNewBox(inputColor, 100, 100);
    } else {
      addNewBox(inputColor, inputWidth, inputHeight);
    }
    console.log("*** form submitted", inputColor, inputHeight, inputWidth);
    // to clear the input field
    setInputColor("");
    setInputWidth("");
    setInputHeight("");
  };

  return (
    <div>
      <h1>BOX GENERATOR</h1>
      <div className="FormBox">
        <h3>COLOR</h3>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            {/* ** color ** */}
            <label htmlFor="color"></label>
            <input
              value={inputColor}
              onChange={(e) => setInputColor(e.target.value)}
              type="text"
              name="color"
              placeholder="  color"
            />
            {/* ** width ** */}
            <label htmlFor="width"></label>
            <input
              value={inputWidth}
              onChange={(e) => setInputWidth(e.target.value)}
              type="number"
              name="width"
              placeholder="  width in px"
            />
            {/* ** height ** */}
            <label htmlFor="height"></label>
            <input
              value={inputHeight}
              onChange={(e) => setInputHeight(e.target.value)}
              type="number"
              name="height"
              placeholder="  height in px"
            />
          </div>
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// WITHOUT width/height
// import React, {useState} from 'react';

// const Form = (props) => {

//     const [boxes, setBoxes] = useState([{}]);
//     const [inputColor, setInputColor] = useState("")
//     // const [inputWidth, setInputWidth] = useState("")
//     // const [inputHeight, setInputHeight] = useState("")?????????????

//     const handleSubmit = (e) => {
//         //prevents default behavior of the form; refreshing
//         e.preventDefault();
//         // duplicate from addNewBox function in App.js
//         // setBoxes([{color: inputColor}]);
//         props.newBoxes( inputColor );
//         // if not a correct name, don't create??
//         console.log("*** form submitted")
//         // to clear the input field
//         setInputColor("");
//     };

//     return (
//         <div>
//             <h1>BOX GENERATOR</h1>
//             <div className="FormBox">
//                 <h3>COLOR</h3>
//                 <form onSubmit={ handleSubmit }>
//                     <div className="formGroup">
//                         <label htmlFor="color"></label>
//                         <input
//                         value={inputColor}
//                         onChange={ (e) => setInputColor(e.target.value) }
//                         type="text" name="color" />
//                     </div>
//                     <button>ADD</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Form;
