import React, { useState } from 'react';
import '../App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

function App() {
  
  return(
    <TodoProvider>
      <AppUI
      // loading = {loading}
      // error = {error}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // searchedTodos={searchedTodos}
      // completTodo={completTodo}
      // deleteTodo={deleteTodo}
    />
    </TodoProvider>
  )
}



export default (App);
