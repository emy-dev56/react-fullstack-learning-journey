import style from "./TodoItem.module.css"

export default function TodoItem({item}) {
  return (
    <div className={style.item}>
      <h3 className={style.itemName}>{item}
        <span>
          <button className={style.deleteBTN}>x</button>
        </span>
      </h3>
      <hr className={style.line} />
    </div>
  )
}
