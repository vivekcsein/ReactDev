import { useState } from "react";
type todos = string;
const TodoForm = ({ addTodoList }: any) => {
  const [Item, setItem] = useState<todos>("");
  const todo_formHandler = (e: any) => {
    e.preventDefault();
    todoList();
  };

  const todoInput = (e: any) => {
    if (Item.length > 35) {
      alert("Max characters Exceeded");
    } else {
      setItem(e.target.value);
    }
  };

  const todoList = () => {
    if (Item != "") {
      addTodoList(Item);
      setItem("");
    } else {
      alert("message can not be empty");
    }
  };
  return (
    <form onSubmit={todo_formHandler} className="todo_box todo_addItems">
      <input
        type="text"
        placeholder="add item"
        id="Todo_formInput"
        value={Item}
        onChange={(e: any) => {
          todoInput(e);
        }}
      />
      <button>
        <span className="material-symbols-sharp button_symbol">add</span>
      </button>
    </form>
  );
};

export default TodoForm;

// onClick={() => {
//   addTodoList;
// }}
