import React from "react";

const ButtonTodo = ({ setOpenModal }) => {
    return (
        <>
            <button 
                type="submit"
                onClick={
                    ()=>{
                        setOpenModal(state => !state)
                    }
                }
            >To Do 📄</button>
        </>
    );
}

export { ButtonTodo }