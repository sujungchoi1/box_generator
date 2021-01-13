import React, { useState } from 'react';
import Display from './components/Display'
import Form from './components/Form'
import './App.css'

function App() {
    // creating state to hold all boxes
    const [box, setBox] = useState([]);

    // BETTER to put functions in the component that the action is happening
    // const addNewBox = (color, width, height) => {
    //     console.log("**** input", color)
    //     // creating a new array with everythign from previous array plus {color} item
    //     setBox([...box, {color, width, height}]);
    // }

    return (
        <div className="App">
            <Form box={box} setBox={setBox}/>
            <Display input={ box } />
        </div>
    )
}
//newBoxes={ addNewBox }
export default App;


// WITHOUT width/height
// import React, { useState } from 'react';
// import Display from './components/Display'
// import Form from './components/Form'
// import './App.css'

// function App() {
//     // creating state to hold all boxes
//     const [box, setBox] = useState([]);

//     const addNewBox = (color) => {
//         console.log("**** input", color)
//         // creating a new array with everythign from previous array + {color} item
//         setBox([...box, {color}]);
//     }

//     return (
//         <div className="App">
//             <Form newBoxes={ addNewBox } />
//             <Display input={ box } />
//         </div>
//     )
// }

// export default App;