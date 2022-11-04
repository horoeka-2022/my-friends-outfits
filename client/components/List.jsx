import React from 'react'
import { Link } from 'react-router-dom'

function List(props) {
  console.log(props)

  return (
    <>
      <Link to="/add">Add New Outfit</Link>
      {props.outfits.map((outfit) => (
        <div key={outfit.id} className="imgDiv">
          <img className="top" src={outfit.top} alt="top"></img>
          <img className="bottom" src={outfit.bottom} alt="bottom"></img>
          <p>{outfit.name}</p>
        </div>
      ))}
    </>
  )
}

export default List
