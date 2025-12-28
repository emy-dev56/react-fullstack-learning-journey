import style from "./TodoItem.module.css"

export default function TodoItem({item, todos, setTodos}) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  }
  const handleClick = (name) => {
    const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
    setTodos(newArray);
  }

  const itemClass = item.done ? style.completed : '';
  return (
    <div className={style.item}>
      <h3 className={style.itemName}>
        <span className={itemClass} onClick={()=>handleClick(item.name)}>{item.name}</span>
        <span>
          <button onClick={()=>handleDelete(item)} className={style.deleteBTN}>x</button>
        </span>
      </h3>
      <hr className={style.line} />
    </div>
  )
}
