import React, { useContext } from "react";
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

export { TodoFetch };