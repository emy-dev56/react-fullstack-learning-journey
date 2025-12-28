export default function FoodItem({item}) {
  return (
    <div>
      <img src={item.image} alt="" />
      <h1>{item.title}</h1>
      <button>View Recipe</button>
    </div>
  )
}
