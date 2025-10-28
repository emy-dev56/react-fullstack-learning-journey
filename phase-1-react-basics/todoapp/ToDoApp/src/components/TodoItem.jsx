import style from "./TodoItem.module.css";
export default function TodoItem({ item, index, todos, setTodos }) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo.name !== item.name));
  };
  const markDone = (item) => {
    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div className={style.todoItem}>
      <div className={style.itemName} key={index}>
        <span
          onClick={() => markDone(item)}
          className={item.done ? style.completed : ""}>
          {item.name}
        </span>
        <button onClick={() => handleDelete(item)} className={style.deleteBtn}>
          x
        </button>
      </div>
      <hr className={style.line} />
    </div>
  );
}
