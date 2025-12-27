import TodoItem from "./TodoItem";

export default function TodosList({todos}) {
  return (
    <div>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
