import TodoItem from "./TodoItem";
import style from "./TodosList.module.css";

export default function TodosList({todos, setTodos}) {
  return (
    <div className={style.list}>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
