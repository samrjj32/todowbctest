import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Textbox from "./components/textbox/Textbox";
import Button from "./components/button/Button";
import { Edit, Delete, Save } from "@material-ui/icons";
import useFetchTodoData from "./helpers/useFetchTodoData";

function App() {
  const {
    handleChangeText,
    handleSaveTodo,
    handleDelete,
    handleChangeEditTodo,
    todo,
    todos,
    isEditingTodo
  } = useFetchTodoData();

  return (
    <div className="App">
    <div className="todoCard">
    <div className="sectionOne">
    <Textbox handleChangeTextBox={handleChangeText} textboxValue={todo} />
    <Button handleSave={handleSaveTodo} />
    </div>
    <div className="sectionTwo">
     <ul className="todoItemContainer">
      {todos.map((item, i) => {
       return (
       <li className="todoItem" key={i}>
        <input
        className="editInputbox"
        value={item.data}
         onChange={(e) => handleChangeEditTodo(e, i)}
          />
      <span className="todoItemActions">
      <Delete
      className="actionIcon"
      onClick={() => handleDelete(item.id)}
       />
      </span>
      </li>
       )})}
      </ul>
      </div>
      {isEditingTodo? <span className="todoSaveLabel">saving....</span>:""}
      </div>
    </div>
  );
}

export default App;
