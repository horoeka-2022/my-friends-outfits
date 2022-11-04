import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function List(props) {
  console.log(props)
  return (
    <>
      {props.outfits.map((outfit) => (
        <div key={outfit.id} className="imgDiv">
          <img className="top" src={outfit.top} alt="top"></img>
          <img className="bottom" src={outfit.bottom} alt="bottom"></img>
          <p className="name">{outfit.name}</p>
        </div>
      ))}
    </>
  )
}

export default List
