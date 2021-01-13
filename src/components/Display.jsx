import React, {useState} from 'react';

const Display = (props) => {

    return (
        <div style= {{display: "flex", flexWrap:"wrap"}}>
            {
                props.input.map((val, idx) => 
                    //needs to give key value when looping over map (key={idx})
                    <div 
                    className="newBox" 
                    key={idx} 
                    style={{
                        width: `${val.width}px`, 
                        height: `${val.height}px`, 
                        backgroundColor: val.color, 
                        margin: "0 0 15px 15px"}}> 
                    {/* {val.color} */}
                    </div>
                    )
            }
        </div>
    )
}

export default Display;

// WITHOUT width/height
// import React, {useState} from 'react';

// const Display = (props) => {

//     return (
//         <div style= {{display: "flex", flexWrap:"wrap"}}>
//             {
//                 props.input.map((val, idx) => 
//                     //needs to give key value when looping over map
//                     <div 
//                     className="newBox" 
//                     key={idx} 
//                     style={{width: "110px", height: "110px", margin: "0 0 15px 15px", backgroundColor: val.color}}> 
//                     {/* {val.color} */}
//                     </div>
//                     )
//             }
//         </div>
//     )
// }

// export default Display;