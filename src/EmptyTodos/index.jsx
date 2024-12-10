import React from "react";
import "./EmptyTodos.css";

const EmptyTodos = () => {
  return (
    <div className="empty-container">
      <p className="empty-message">No hay nada... Crea un TODO!</p>
    </div>
  );
};

export { EmptyTodos };