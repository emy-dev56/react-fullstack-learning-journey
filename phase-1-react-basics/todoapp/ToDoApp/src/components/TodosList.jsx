import TodoItem from "./TodoItem";
import style from "./TodosList.module.css";

export default function TodosList({todos}) {
  return (
    <div className={style.list}>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
