import { useState } from "react";
import "../Styles/Components/Todo.scss";

type todos = string;
// type todoList = string[];

interface todoList {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todos>("");
  const [todoList, setTodoList] = useState<todoList[]>([]);

  const todoInput = (e: any) => {
    if (todos.length > 35) {
      alert("Max characters Exceeded");
    } else {
      setTodos(e.target.value);
    }
  };
  const addTodoList = () => {
    if (todos != "") {
      setTodoList((t: any) => [
        ...t,
        {
          id: Math.floor(Math.random() * Date.now()),
          text: todos,
          completed: false,
        },
      ]);
      setTodos("");
      // setTodoList([todos, ...todoList]);
    } else {
      alert("message can not be empty");
    }
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
        <div className="todo_box todo_addItems">
          <input
            type="text"
            placeholder="add item"
            id="Todo_addItem_id"
            value={todos}
            onChange={todoInput}
          />
          <span
            className="material-symbols-sharp button_symbol"
            onClick={addTodoList}
          >
            add
          </span>
        </div>
        <div className="todo_showItem">
          {todoList.map((todo) => {
            return (
              <div className="todo_box todo_eachItem" key={todo.id}>
                <p>{todo.text}</p>
                <span
                  className="material-symbols-sharp button_symbol"
                  id="todo_delete"
                  onClick={() => {
                    deleteTodoList(todo.id);
                  }}
                >
                  delete
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
