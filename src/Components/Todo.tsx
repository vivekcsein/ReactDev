import { useState, useEffect } from "react";
import "../Styles/Components/Todo.scss";
import TodoForm from "./files/Todo/TodoForm";
import TodoItemList from "./files/Todo/TodoItemList";

type todos = string;

interface todoList {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  let dataFromLocalStorage;
  const [todoList, setTodoList] = useState<todoList[]>(() => {
    dataFromLocalStorage = localStorage.getItem("todos");
    if (dataFromLocalStorage != null) {
      return JSON.parse(dataFromLocalStorage);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  const addTodoList = (todos: todos) => {
    setTodoList((t: any) => [
      ...t,
      {
        id: Math.floor(Math.random() * Date.now()),
        text: todos,
        completed: false,
      },
    ]);
  };
  const deleteTodoList = (todoID: number) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => todo.id != todoID);
    });
  };
  return (
    <>
      <div className="Todo_container">
        <h1>My Todo</h1>
        <TodoForm addTodoList={addTodoList} />
        <TodoItemList todoList={todoList} deleteTodoList={deleteTodoList} />
      </div>
    </>
  );
};

export default Todo;
