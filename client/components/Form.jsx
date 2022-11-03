import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

function Form(props) {
  // a function to call on the route to redirect to
  const navigate = useNavigate()

  function handleSubmit(event) {
    // to prevent the browser form reloading
    event.preventDefault()

    const name = event.currentTarget.elements.name.value
    const top = event.currentTarget.elements.top.value
    const bottom = event.currentTarget.elements.bottom.value

    const newOutfit = {
      id: props.outfits.length + 1,
      name,
      top,
      bottom,
    }

    // add a new book to the state
    props.setOutfits((state) => [...state, newOutfit])

    // to clear the form
    event.target.reset()

    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" required={true} />
        <input type="text" name="top" placeholder="Top" />
        <input type="text" name="bottom" placeholder="Bottom"/>
        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form