import foodData from "../../data/food.json"
import FoodListItem from "../ListItem"

function FoodList() {
    return (
        foodData.food.map((food) => {
            return (
              <ul>
                <FoodListItem foodData={food}/>
              </ul>
            )
        })
    )
}

export default FoodList