import React, { useContext } from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
const TodoCount = ( {total, completed} ) =>{
  const {
    completedTodos,
    totalTodos,
  } = useContext(TodoContext)
  return(
    <>
      <h1>Has completado {completedTodos} de {totalTodos} Tarea(s)</h1>
    </>
  );
}
export { TodoCount };