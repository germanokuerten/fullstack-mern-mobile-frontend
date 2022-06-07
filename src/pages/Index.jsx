import { Link } from "react-router-dom"
import { useState } from "react"

export default function Index ({restaurant, createRestaurant}) {

    const [newForm, setNewFrom] = useState({
        name: "",
        image: "",
        link: "",
        menu1: "",
        menu2: "",
        menu3: "",
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewFrom((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))
    }

    // handleSubmit function for form




}