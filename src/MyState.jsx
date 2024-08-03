
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyState(props) {
  
  const [index, setIndex] = useState(0);
  const [search,setSearch] = useState("")

  return (
    <MyContext.Provider value={{ index, setIndex }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;



















// import React from 'react';
// import { useContext,useState } from 'react';
// import MyContext from './MyContext'

// function MyState(props) {

//      const [index,setIndex] = useState(0);

 
 
//     return (
      
//             <MyContext.Provider Value={{index,setIndex}}>
//                 {props.children}
//             </MyContext.Provider>
            
       
//     );
// }

// export default MyState;

