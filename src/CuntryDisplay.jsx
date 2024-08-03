

import React, { useContext } from 'react';
import MyContext from "./MyContext";

function CuntryDisplay({ Cuntry }) {
  const { id, name, population, land_area, density, capital, currency, flag } = Cuntry;
  const { setIndex } = useContext(MyContext);

  const deleteHandle = (itemIndex) => {
    setIndex(itemIndex);
    
  }

  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
      <img src={flag} alt="flag" className="w-full h-48 object-cover "/>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-2 text-center text-slate-900 text-blue-700">{name}</h1>
        <p className="text-gray-700 text-base mb-1"><strong>Population:</strong> {population}</p>
        <p className="text-gray-700 text-base mb-1"><strong>Land Area:</strong> {land_area}</p>
        <p className="text-gray-700 text-base mb-1"><strong>Density:</strong> {density}</p>
        <p className="text-gray-700 text-base mb-1"><strong>Capital:</strong> {capital}</p>
        <p className="text-gray-700 text-base mb-1"><strong>Currency:</strong> {currency}</p>
        <button className="bg-blue-700 text-white px-3 py-2 text-xl rounded-md mt-3" onClick={() => deleteHandle(id)}>Delete</button>
      </div>
    </div>
  );
}

export default CuntryDisplay;



// import React, { useContext } from 'react'
// import MyContext from "./MyContext";


// function CuntryDisplay({ Cuntry }) {
//   const { id, name, population, land_area, density, capital, currency, flag } =
//     Cuntry;

    
 

//      const deleteHandle = (itemIndex) => {
//       // 
//       alert(itemIndex);
//     }
 
//     return (

   

//     <div className="w-64  bg-white rounded-lg shadow-md 
//     overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
//     <img src={flag} alt="flag" className="w-full h-48 object-cover"/>
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-2 text-center text-slate-900 text-blue-700">{name}</h1>
//       <p className="text-gray-700 text-base mb-1"><strong>Population:</strong> {population}</p>
//       <p className="text-gray-700 text-base mb-1"><strong>Land Area:</strong> {land_area}</p>
//       <p className="text-gray-700 text-base mb-1"><strong>Density:</strong> {density}</p>
//       <p className="text-gray-700 text-base mb-1"><strong>Capital:</strong> {capital}</p>
//       <p className="text-gray-700 text-base mb-1"><strong>Currency:</strong> {currency}</p>
//       <button className="bg-blue-700 text-white px-3 py-2 text-xl rounded-md
//       mt-3 a" onClick={()=> deleteHandle(id)}>Delete</button>
//     </div>
//   </div>
  

    


    
//   );
// }

// export default CuntryDisplay;

