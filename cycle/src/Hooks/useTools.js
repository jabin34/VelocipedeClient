import { useEffect, useState } from "react"

const useTools = () =>{
const[tools,setTools]= useState([]);
 
useEffect(()=>{
fetch('http://localhost:4000/tools')
.then(res=>res.json())
.then(result=>setTools(result))
},[]);
return [tools,setTools];
}
export default useTools;