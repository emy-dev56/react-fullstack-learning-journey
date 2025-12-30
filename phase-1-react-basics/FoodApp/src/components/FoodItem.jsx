import style from './foodItem.module.css';

export default function FoodItem({ item }) {
  return (
    <div className={style.itemContainer}>
      <img src={item.image} alt="" className={style.itemImage} />
      <div className={style.itemContent}>
        <p className={style.itemName}>{item.title}</p>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}
