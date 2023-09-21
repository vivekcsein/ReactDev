interface todoList {
  id: number;
  text: string;
  completed: boolean;
}

type prop = {
  todoList: Array<todoList>;
  deleteTodoList: (arg0: number) => void;
};

const TodoItemList = ({ todoList, deleteTodoList }: prop) => {
  return (
    <div className="todo_showItem">
      {todoList.map(({ id, text }: todoList) => {
        return (
          <div className="todo_box todo_eachItem" key={id}>
            <p>{text}</p>
            <span
              className="material-symbols-sharp button_symbol"
              id="todo_delete"
              onClick={() => {
                deleteTodoList(id);
              }}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItemList;
