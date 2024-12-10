import React from "react";
import "./TodosLoading.css";

const TodosLoading = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton skeleton-title"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );
};

export { TodosLoading };