import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function Show (props) {

    const { id } = useParams()
    const restaurants = props.restaurants 
    const restaurant = restaurants.find((p) => p._id === id)
    let navigate = useNavigate()

    // state for form
    const [editForm, setEditForm] = useState(restaurant)

    // handleChange function for form
    const handleChange = (event) => {
        setEditForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handlesubmit for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateRestaurants(editForm, restaurant._id)
        // redirect people back to index
        navigate("/")
  }

  const removeRestaurant = () => {
    props.deleteRestaurants(restaurant._id);
    navigate("/");
  }

  return (
    <div className="restaurant">
      <h1>{restaurant.name}</h1>
      <h2>{restaurant.title}</h2>
      <img src={restaurant.image} alt={restaurant.name} />
      <button id="delete" onClick={removeRestaurant}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="link"
          placeholder="link"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.menu1}
          name="menu1"
          placeholder="menu1"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.menu2}
          name="menu2"
          placeholder="menu2"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.menu3}
          name="menu3"
          placeholder="menu3"
          onChange={handleChange}
        />



        <input type="submit" value="Update Restaurant" />
      </form>
    </div>
  )
}