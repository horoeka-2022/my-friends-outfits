import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  console.log(props)
  return (
    <>
      <Link to="/add">Add New Outfit</Link>
      {props.outfits.map((outfit) => (
        <div key={outfit.id} className="imgDiv">
          <p>{outfit.name}</p>
          <img className="clothing" src={outfit.top} alt="top"></img>
          <img className="clothing" src={outfit.bottom} alt="bottom"></img>
        </div>
      ))}
    </>
  )
}

export default List
