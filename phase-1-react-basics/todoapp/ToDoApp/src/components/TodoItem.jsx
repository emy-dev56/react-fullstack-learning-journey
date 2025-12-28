import style from "./TodoItem.module.css"

export default function TodoItem({item, todos, setTodos}) {
  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={style.item}>
      <h3 className={style.itemName}>{item}
        <span>
          <button onClick={()=>handleDelete(item)} className={style.deleteBTN}>x</button>
        </span>
      </h3>
      <hr className={style.line} />
    </div>
  )
}
