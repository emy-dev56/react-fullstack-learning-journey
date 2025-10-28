import style from "./footer.module.css";

export default function Footer({ totalCompleted, totalTodos }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed: {totalCompleted}</span> | 
      <span className={style.item}>Tasks: {totalTodos}</span>
    </div>
  );
}
