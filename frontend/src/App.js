import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  async function getAllData(){
    const url = `https://freetestapi.com/api/v1/animals`
    const response = await fetch(url);
    const animals = await response.json();
    setData(response.data);
    console.log(response);
    console.log(animals);
  }
  useEffect(()=>{
    getAllData()
  },[])
  console.log(data);

  return (
    <div className="App">
      helllllllllllllllllllo
    </div>
  );
}

export default App;
