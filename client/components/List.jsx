import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  return (
    <>
      <Link to="/add">Add New Outfit</Link>
      <ul>
        {props.outfits.map((outfit) => (
          <li key={outfit.id} className="p-4 m-4 bg-white shadow-lg">
            <p>{outfit.name}</p>
            <p>{outfit.top}</p>
            <p>{outfit.bottom}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default List