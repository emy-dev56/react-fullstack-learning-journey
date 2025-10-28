import TodoItem from "./TodoItem";
import style from "./TodoList.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={style.todoList}>
      {todos.map((item, index) => (
        <TodoItem item={item} index={index} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
