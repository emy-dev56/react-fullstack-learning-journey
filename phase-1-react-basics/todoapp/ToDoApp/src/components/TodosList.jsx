import TodoItem from "./TodoItem";
import style from "./TodosList.module.css";

export default function TodosList({todos, setTodos}) {
  const sortedTodos = todos.slice().sort((a, b) => a.done - b.done);
  return (
    <div className={style.list}>
      {sortedTodos.map((item, index) => (
        <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
