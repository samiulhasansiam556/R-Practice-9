





import { useContext, useEffect, useState } from "react";

import "./App.css";
import Cuntry from "./Cuntry";
import MyContext from "./MyContext";

function App() {
  const [cuntryList, setCuntryList] = useState([]);
  const [searchCuntry, setSearchCuntry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchCapital, setSearchCapital] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://freetestapi.com/api/v1/countries"
        );
        const data = await response.json();
        setCuntryList(data);
        setSearchCuntry(data);
        setLoading(false);
        setError(null);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { index, setIndex } = useContext(MyContext);

  useEffect(() => {
    if (index !== 0) {
      const deleteItem = () => {
        const updatedCuntryList = cuntryList.filter((item) => item.id !== index);
        setCuntryList(updatedCuntryList);
        setSearchCuntry(updatedCuntryList);
      };
      deleteItem();
    }
  }, [index]);

  useEffect(() => {
    const combinedSearch = () => {
      let filteredList = cuntryList;

      if (search !== "") {
        filteredList = filteredList.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (searchCapital !== "") {
        filteredList = filteredList.filter((item) =>
          item.capital.toLowerCase().includes(searchCapital.toLowerCase())
        );
      }

      setSearchCuntry(filteredList);
    };

    combinedSearch();
  }, [search, searchCapital, cuntryList]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h1
            className="text-center font-bold text-3xl text-blue-600 mb-10
          font-serif hover:text-black cursor-pointer"
          >
            Cuntry List
          </h1>
          <h2 className="text-center mb-6 text-orange-600">
            Now here are {searchCuntry.length} Cuntry available
          </h2>
          <div className="w-full flex justify-around">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              name="country"
              placeholder="Search by Country"
              value={search}
              className="border-2 border-black rounded-md p-2 mx-auto
            mb-10"
            ></input>
            <input
              type="text"
              onChange={(e) => setSearchCapital(e.target.value)}
              name="capital"
              placeholder="Search by Capital"
              value={searchCapital}
              className="border-2 border-black rounded-md p-2 mx-auto
              mb-10"
            ></input>
          </div>
          <Cuntry Cuntry={searchCuntry} />
        </>
      )}
    </>
  );
}

export default App;



























// import { useContext, useEffect, useState } from "react";

// import "./App.css";
// import Cuntry from "./Cuntry";
// import MyContext from "./MyContext";

// function App() {
//   const [cuntryList, setCuntryList] = useState([]);
//   const [searchCuntry, setSearchCuntry] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://freetestapi.com/api/v1/countries"
//         );
//         const data = await response.json();
//         // console.log(data);
//         setCuntryList(data);
//         setLoading(false);
//         setError(null);
//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }
//       } catch (error) {
//         console.error(error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const { index, setIndex } = useContext(MyContext);

//   useEffect(() => {
//     const deleteItem = () => {
//       const CuntryList = cuntryList.filter((item) => item.id !== index);
//       setCuntryList(CuntryList);
//     };
//     deleteItem();
//   }, [index]);



//   const cuntrySearch =(search)=>{
  
//     const temporaryCuntry = cuntryList;
  
//     const searchCountryList = cuntryList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase))
//     setCuntryList(searchCountryList);
  
//   }
//   const capitalSearch =(search)=>{
  
//     const temporaryCuntry = cuntryList;
  
//     const searchCountryList = cuntryList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase))
//     setCuntryList(searchCountryList);
  
//   }

//   return (
//     <>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : error ? (
//         <h2>{error}</h2>
//       ) : (
//         <>
//           <h1
//             className="text-center font-bold text-3xl text-blue-600 mb-10
//           font-serif hover:text-black cursor-pointer"
//           >
//             Cuntry List
//           </h1>
//           <h2 className="text-center mb-6 text-orange-600">Now here are {cuntryList.length} Cuntry available</h2>
//           <div className="w-full flex justify-around">
//             <input
//               type="text"
//               onChange={(e)=> cuntrySearch(e.target.value)}
//               name="country"
//               placeholder="Search by Country"
//               className="border-2 border-black rounded-md p-2 mx-auto
//             mb-10"
//             ></input>
//             <input
//               type="text"
//               onChange={(e)=> capitalSearch(e.target.value)}
//               name="capital"
//               placeholder="Search by Capital"
//               className="border-2 border-black rounded-md p-2  mx-auto
//               mb-10"
//             ></input>
//           </div>
//           <Cuntry Cuntry={cuntryList} />
//         </>
//       )}

//       {}
//     </>
//   );
// }

// export default App;

// import { useContext, useEffect, useState } from "react";

// import "./App.css";
// import Cuntry from "./Cuntry";
// import MyContext from "./MyContext";

// function App() {
//   const [cuntryList, setCuntryList] = useState([]);
//   const [searchCuntry, setSearchCuntry] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [searchCapital, setSearchCapital] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://freetestapi.com/api/v1/countries"
//         );
//         const data = await response.json();
//         setCuntryList(data);
//         setSearchCuntry(data);
//         setLoading(false);
//         setError(null);
//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }
//       } catch (error) {
//         console.error(error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const { index, setIndex } = useContext(MyContext);

//   useEffect(() => {
//     if (index !== 0) {
//       const deleteItem = () => {
//         const updatedCuntryList = cuntryList.filter((item) => item.id !== index);
//         setCuntryList(updatedCuntryList);
//         setSearchCuntry(updatedCuntryList);
//       };
//       deleteItem();
//     }
//   }, [index]);

//   const cuntrySearch = (search) => {
//     setSearch(search);
//     if (search !== "") {
//       const searchCountryList = cuntryList.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//       setSearchCuntry(searchCountryList);
//     } else {
//       setSearchCuntry(cuntryList);
//     }
//   };

//   const capitalSearch = (search) => {
//     setSearchCapital(search);
//     if (search !== "") {
//       const searchCapitalList = cuntryList.filter((item) =>
//         item.capital.toLowerCase().includes(search.toLowerCase())
//       );
//       setSearchCuntry(searchCapitalList);
//     } else {
//       setSearchCuntry(cuntryList);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : error ? (
//         <h2>{error}</h2>
//       ) : (
//         <>
//           <h1
//             className="text-center font-bold text-3xl text-blue-600 mb-10
//           font-serif hover:text-black cursor-pointer"
//           >
//             Cuntry List
//           </h1>
//           <h2 className="text-center mb-6 text-orange-600">
//             Now here are {searchCuntry.length} Cuntry available
//           </h2>
//           <div className="w-full flex justify-around">
//             <input
//               type="text"
//               onChange={(e) => cuntrySearch(e.target.value)}
//               name="country"
//               placeholder="Search by Country"
//               value={search}
//               className="border-2 border-black rounded-md p-2 mx-auto
//             mb-10"
//             ></input>
//             <input
//               type="text"
//               onChange={(e) => capitalSearch(e.target.value)}
//               name="capital"
//               placeholder="Search by Capital"
//               value={searchCapital}
//               className="border-2 border-black rounded-md p-2 mx-auto
//               mb-10"
//             ></input>
//           </div>
//           <Cuntry Cuntry={searchCuntry} />
//         </>
//       )}
//     </>
//   );
// }

// export default App;









