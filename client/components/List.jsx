import React from 'react'
import { Link } from 'react-router-dom'
import tops from '../tops'

function List(props) {
  let outfitsArr = [...props.outfits]
  // outfitsArr.outfits.splice(6, 2)
  return (
    <>
      <Link to="/add">Add New Outfit</Link>
      {outfitsArr.map((outfit) => {
        console.log(outfit)
        if (typeof outfit === 'number') {
          return (
            <div key={outfit.id}>
              <p key={outfit.id}>{outfit.name}</p>
              <img key={outfit.name} src={outfit.top} alt="top"></img>
              <img key={outfit.top} src={outfit.bottom} alt="bottom"></img>
            </div>
          )
        }
      })}
    </>
  )
}

export default List
