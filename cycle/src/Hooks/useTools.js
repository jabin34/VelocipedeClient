import { useEffect, useState } from "react"

const useTools = () =>{
const[tools,setTools]= useState([]);
 
useEffect(()=>{
fetch('tools.json')
.then(res=>res.json())
.then(result=>setTools(result))
},[]);
return [tools,setTools];
}
export default useTools;