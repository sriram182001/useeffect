
import './App.css';
import {useState,useEffect} from 'react';



function App() {

  const [loaded,setloaded]=useState({
    values:[],
    flag:false

});

const fetchdata=async()=>{
  const data=await fetch("https://jsonplaceholder.typicode.com/users");
  const arr=await data.json();
  
  
  return arr

} 

useEffect(()=>{
  
  fetchdata().then((newArr)=>setloaded({values:newArr,flag:true}));
},[])
  


  return (
    
    <div className="App">
      
      {loaded.flag===false?<h1>Loading...</h1>:loaded.values.map((item) => ( 
                <ul key={item.id}>
                    <li>User_Name: { item.username }</li>
                    <br/>
                    <li>Name: { item.name }</li>
                    <br />
                    <li>Email: { item.email }</li>
                </ul>
                ))
      }
    </div>
  );

  
}

export default App;
