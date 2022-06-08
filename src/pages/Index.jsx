import { Link } from "react-router-dom"
import { useState } from "react"

export default function Index ({restaurants, createRestaurant}) {

    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        link: "",
        menu1: "",
        menu2: "",
        menu3: "",
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handleSubmit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        createRestaurant(newForm)
        setNewForm({
            name: "",
            image: "",
            link: "",
            menu1: "",
            menu2: "",
            menu3: "",
        })
    }

    // loaded function
    const loaded = () => {
        return restaurants.map(restaurant => (
            <div key={restaurant._id} className="restaurant">
                <br/><br/>
                <Link to={`/restaurants/${restaurant._id}`}>
                    <h1>{restaurant.name}</h1>
                    <img src={restaurant.image} alt={restaurant.name} />
                    <h3>{restaurant.link}</h3>    
                </Link>
            </div>
            
        ))
    }
    const loading = () => <h1>Food Loading...</h1>

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.name}
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.image}
              name="image"
              placeholder="image URL"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.title}
              name="link"
              placeholder="link"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.menu1}
              name="menu1"
              placeholder="menu1"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.menu2}
              name="menu2"
              placeholder="menu2"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.menu3}
              name="menu3"
              placeholder="menu3"
              onChange={handleChange}
            />
            <input type="submit" value="Create New Restaurant" />
          </form>
            {restaurants ? loaded() : loading()}
        </section>
      )
}