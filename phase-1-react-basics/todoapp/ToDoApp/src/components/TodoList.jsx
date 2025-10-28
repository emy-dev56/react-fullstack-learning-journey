import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={style.todoList}>
      {sortedTodos.map((item, index) => (
        <TodoItem item={item} index={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
