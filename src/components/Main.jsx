import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"


export default function Main() {

    const [restaurants, setRestaurants] = useState(null)

    const URL = "https://gk-backend-mern-mobile.herokuapp.com/restaurants/"

    const getRestaurants = async () => {
        const data = await fetch(URL).then(res => res.json())
        setRestaurants(data)
    }

    const createRestaurants = async restaurant => {
        await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "Application/json",
            },
            body: JSON.stringify(restaurant),
        })
        // update list of people
        getRestaurants()
    }

    const updateRestaurants = async (restaurant, id) => {
        // make put request to create people
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(restaurant),
        })
        // update list of people
        getRestaurants()
      }

      const deleteRestaurants = async (id) => {
        // make delete request to create people
        await fetch(URL + id, {
          method: "DELETE",
        })
        // update list of people
        getRestaurants()
      }

      useEffect(() => {
        getRestaurants()
    }, [])

    return (
        <main>
          <Routes>
            <Route exact path="/" element={
              <Index 
                restaurants={restaurants}
                createRestaurants={createRestaurants} 
              />} />
            <Route
              path="/restaurants/:id"
              element={
                <Show
                  restaurants={restaurants}
                  updateRestaurants={updateRestaurants}
                  deleteRestaurants={deleteRestaurants}
                />
              }
            />
          </Routes>
        </main>
      )
    }