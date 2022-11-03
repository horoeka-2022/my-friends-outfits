import React from 'react'
import { Link } from 'react-router-dom'
import tops from '../tops'

function List(props) {
  console.log(props)
  return (
    <>
      <Link to="/add">Add New Outfit</Link>

      <div>
        {props.outfits.map((outfit) => (
          <>
            <p key={outfit.id}>{outfit.name}</p>
            <img key={outfit.name} src={outfit.top} alt="top"></img>
            <img key={outfit.top} src={outfit.bottom} alt="bottom"></img>
          </>
        ))}
      </div>
    </>
  )
}

export default List
