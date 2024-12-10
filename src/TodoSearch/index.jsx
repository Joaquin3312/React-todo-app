import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
const TodoFetch =() =>{
  const {searchValue, setSearchValue} = useContext(TodoContext);
  return(
    <>
      <input type="text" placeholder="Buscar: 🔍" 
        value={searchValue}
        onChange={(event)=>{
          setSearchValue(event.target.value);
        }}
      />      
    </>
  );
}

const CounterClick = ()=>{
  let [clicked,setClicked] = useState(0);
  
  function manejarClick(){
    setClicked(clicked++);
  }

  return(
    <>
      <p>aqui aparecen los clicks {clicked}</p>
      <button type="button" 
          onClick={manejarClick}>click</button>
    </>
  );
}
export { TodoFetch,CounterClick };