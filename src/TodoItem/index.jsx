import React from "react";
const TodoItem = (props) =>{

    return(
        <li>
            <label className={`Icon Icon-check ${props.completed && "Icon-check-active"}`}>
                <input type="checkbox" 
                    onClick={ props.onComplete}
                />
                <span className="checkmark"></span>
            </label>
            <p className={`${props.completed && "TodoItem-p--complete"} `}>{props.text}</p>
            <span className="Icon Icon-delete" onClick={props.onDelete}></span>
        </li>
    );
}

export {TodoItem}
