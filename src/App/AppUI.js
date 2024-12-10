import React, { useContext } from "react";
import { TodoCount } from '../TodoCounter';
import { CounterClick, TodoFetch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { ButtonTodo} from '../ButtonTodo';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        completTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
    <div className="container">
        <TodoCount />
        <TodoFetch />
        <CounterClick />
        <TodoList >
            { loading && <TodosLoading /> }
            { error && <TodosError /> }
            { (!loading && searchedTodos.length === 0) && <EmptyTodos /> }
            { searchedTodos.map(todo => (
                <TodoItem 
                key={todo.id} 
                text={todo.text}
                completed={todo.completed}  
                onComplete={() => completTodo(todo.id)}
                onDelete={ ()=>deleteTodo(todo.id) }
                />
            ))}
        </TodoList>

        <ButtonTodo setOpenModal={ setOpenModal } />
        
        {openModal && (
            <Modal onClose={() => setOpenModal(false)}>
                <TodoForm />
            
                
            </Modal>
        )}
    </div>
    );
} 

export { AppUI } ; 