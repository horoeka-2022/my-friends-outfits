import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  return (
    <>
      <Link to="/add">Add New Outfit</Link>
      <ul>
        {props.outfits.map((outfit) => (
          <li key={outfit.id}>
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
