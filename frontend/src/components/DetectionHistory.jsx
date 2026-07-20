import React,{useEffect,useState} from "react";
import axios from "axios";

function DetectionHistory(){

const [history,setHistory]=useState([]);

useEffect(()=>{

load();

const x=setInterval(load,3000);

return()=>clearInterval(x);

},[]);

const load=async()=>{

const res=await axios.get(
"http://127.0.0.1:8000/history"
);

setHistory(res.data);

}

return(

<div style={{

marginTop:"30px",

background:"#1E293B",

padding:"20px",

borderRadius:"15px",

color:"white"

}}>

<h2>Detection History</h2>

<table
style={{

width:"100%",

borderCollapse:"collapse"

}}
>

<thead>

<tr>

<th>Image</th>

<th>Vehicles</th>

<th>Cars</th>

<th>Truck</th>

<th>Level</th>

</tr>

</thead>

<tbody>

{

history.map((row,index)=>(

<tr key={index}>

<td>{row.image}</td>

<td>{row.vehicles}</td>

<td>{row.cars}</td>

<td>{row.trucks}</td>

<td>{row.congestion}</td>

</tr>

))

}

</tbody>

</table>

</div>

)

}

export default DetectionHistory;