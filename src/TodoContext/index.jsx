import React, { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext =  createContext ();

function TodoProvider({ children }){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
       } = useLocalStorage('TODOS_V1',[]);
    
      const [searchValue, setSearchValue] = useState('');
      
      const [openModal, setOpenModal] = useState(false);

      const completTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id === id
        );
        if (todoIndex !== -1) {
          newTodos[todoIndex].completed = true;
          saveTodos(newTodos);
        }
      };
    
    
      /**eliminar el To Do */
      const deleteTodo = (id) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          ( todo )=> todo.id === id 
        )
        newTodos.splice(todoIndex,1); 
        saveTodos(newTodos);
      }
    
      const completedTodos = todos.filter(
        (todo) => !!todo.completed
      ).length;
      const totalTodos = todos.length;
    
      // Este es un estado derivado:
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }  
      )
      
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          id: Date.now(),
          text,
          completed: false,
        })
        saveTodos(newTodos);
      }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            { children } 

        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }