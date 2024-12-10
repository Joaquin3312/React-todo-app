import React, { useContext, useState } from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm (){
    const {
        setOpenModal,
        addTodo,

    } = useContext(TodoContext);

    const [newTodoValue , setNewTodoValue] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onCancel = () =>{
        setOpenModal(false);
    }

    const onChange = (e) =>{
        setNewTodoValue(e.target.value)
    }

    return(
        <form onSubmit={ onSubmit }>
            <h1>Escribe tu nuevo Todo</h1>
            <textarea 
                value={ newTodoValue }
                onChange={ onChange }
                placeholder="Ej. Terminar las tareas"
            />
            <div className="TodoForm-buttonContainer">
                
            <button
                type="button"
                className="TodoForm-button
                TodoForm-button--cancel"
                onClick={ onCancel }
            >Cancelar</button>
            <button
                type="submit"
                className="TodoForm-button
                TodoForm-button--add"
            >Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm }