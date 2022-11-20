import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function FoodListItem(props) {
  return (
    <li>
      <h3>
        {props.foodData.title} -{" "}
        {props.foodData.haveTried && <FontAwesomeIcon icon={faUtensils} />}{" "}
        {props.foodData.rating === 0
          ? "No Rating"
          : `${props.foodData.rating}/5`}
      </h3>
      <img src={props.foodData.image} alt={props.foodData.title} />
      <p>{props.foodData.description}</p>
    </li>
  );
}

export default FoodListItem;
