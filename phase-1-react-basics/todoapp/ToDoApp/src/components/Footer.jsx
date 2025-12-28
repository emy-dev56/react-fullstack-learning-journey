import style from "./Footer.module.css"

export default function Footer({completedTodos, totalTodos}) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed: {completedTodos}</span>
      <span className={style.item}>Toal: {totalTodos}</span>
    </div>
  )
}
