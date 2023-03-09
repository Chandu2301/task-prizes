import { useEffect, useState } from 'react';
import './App.css';
import CardTable from "./components/cardTable"

function App() {
 const [data, setData] = useState([]);
 const [years, setYears] = useState([]);
 const [categories, setCategories] = useState([]);

 useEffect(()=>{
  const getData = async()=>{
   
    fetch("https://api.nobelprize.org/v1/prize.json").then(res => res.json()).then(res =>{
      const allData = res.prizes;
      //console.log(allData)
      const uniqueYears = [...new Set(res.prizes.map(item => item.year))];
      const uniqueCatergories = [...new Set(res.prizes.map(item => item.category))];
      setCategories(uniqueCatergories)
      //console.log(uniqueCatergories)
      setYears(uniqueYears);
      const filteredData =[];
       uniqueYears.forEach(year => {
         filteredData.push(allData.filter(item => item.year === year))
       })
       //console.log(filteredData," filter")


    setData(filteredData);
    // console.log(res.prizes)
     //console.log([...new Set(res.prizes.map(item => item.year))])
     //res.prizes.filter
    })

  } 
  getData();

 },[])

  return (
    <div className="App">
      <label>Years: </label>
      <select>
        {
          years.map(year => <option key={year} value={year}>{year}</option>)
        }
      </select>
      <label> Category: </label>
      <select>
        {
          categories.map(category => <option key={category} value={category}>{category}</option>)
        }
      </select>
    <CardTable data={data}/>   
    </div>
  );
}

export default App;
