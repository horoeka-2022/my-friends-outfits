import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

function Form(props) {
  // a function to call on the route to redirect to
  const navigate = useNavigate()

  function handleSubmit(event) {
    // to prevent the browser form reloading
    event.preventDefault()
    // console.log(event.currentTarget.elements.top[0].checked)
    // console.log(event.currentTarget.elements.top[1].checked)

    const topArray = event.currentTarget.elements.top
    const bottomArray = event.currentTarget.elements.bottom

    // console.log(typeof topArray)

    let topChoiceIdx
    let bottomChoiceIdx

    for (let i = 0; i < topArray.length; i++) {
      if (topArray[i].checked === true) {
        topChoiceIdx = i
        break
      }
    }

    for (let i = 0; i < bottomArray.length; i++) {
      if (bottomArray[i].checked === true) {
        bottomChoiceIdx = i
        break
      }
    }

    // console.log(event.currentTarget.elements.top[choiceInt].value)

    // STRETCH REFACTOR FOR LOOP TO MAP OR FIND
    // const testArray = topArray.map((top) => (console.log(top.checked))

    const name = event.currentTarget.elements.name.value

    const top = event.currentTarget.elements.top[topChoiceIdx].value

    const bottom = event.currentTarget.elements.bottom[bottomChoiceIdx].value

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
      <section className="formSection">
        <input type="text" name="name" placeholder="Name" required={true} />
        <h2> Pick your Top!</h2>
        <div>
          <input type="checkbox" id="tops1" name="top" value="tops1" />
          <label htmlFor="tops1">
            <img src={'/Images/tops1.png'} alt="tops1" />
            Red Top
          </label>
        </div>
        <div>
          <input type="checkbox" id="bluetop" name="top" value="bluetop" />
          <label htmlFor="bluetop">Blue Top</label>
        </div>
        <h2> Pick your Bottom!</h2>
        <div>
          <input
            type="checkbox"
            id="blackBottom"
            name="bottom"
            value="blackBottom"
          />
          <label htmlFor="blackBottom">Black Bottom</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="Brownpants"
            name="bottom"
            value="Brownpants"
          />
          <label htmlFor="Brownpants">Brown Pants</label>
        </div>

        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form
