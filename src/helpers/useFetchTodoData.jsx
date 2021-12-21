import React, { useState, useEffect, useRef } from "react";

function useFetchTodoData() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditingTodo, setIsEditingTodo] = useState(false);

  useEffect(() => {
    let fetchLocaldata = localStorage.getItem("todolist");
    setTodos(fetchLocaldata.length > 0 ? JSON.parse(fetchLocaldata) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  const handleChangeText = (e) => {
    setTodo(e.target.value);
  };

  const handleSaveTodo = () => {
    setTodos([...todos, { id: todos.length, data: todo }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    console.log("delete ...");
    let filteredItem = todos.filter((item, i) => item.id !== id);
    setTodos(filteredItem);
  };
  const handleChangeEditTodo = (e, id) => {
    let newTodoarray = [...todos];
    newTodoarray[id] = { ...newTodoarray[id], data: e.target.value };
    setTodos(newTodoarray);
    setIsEditingTodo(true);
    setTimeout(() => {
      setIsEditingTodo(false);
    }, 1000);
  };

  return {
    handleChangeText,
    handleSaveTodo,
    handleDelete,
    handleChangeEditTodo,
    todo,
    todos,
    isEditingTodo,
  };
}

export default useFetchTodoData;
