import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

import tops from '../tops'
import bottoms from '../bottoms'

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

  // if(typeof props.outfits[field] == 'function') continue;

  return (
    <form onSubmit={handleSubmit}>
      <section className="formSection">
        <h2>What is your Name?</h2>
        <div className="name">
          <input
            className="nameInput"
            type="text"
            name="name"
            placeholder="Name"
            required={true}
          />
        </div>
        <h2> Pick your Top!</h2>
        <div className="choiceDiv">
          {tops.map((top) => {
            return (
              <>
                <div key={top.path}>
                  <input
                    type="checkbox"
                    id={top.id}
                    name="top"
                    value={top.path}
                  />
                  <label htmlFor={top.path}>
                    <img
                      className="imageChoice"
                      src={top.path}
                      alt={top.description}
                    />
                  </label>
                </div>
              </>
            )
          })}
        </div>
        <h2> Pick your Bottom!</h2>
        <div className="choiceDiv">
          {bottoms.map((bottom) => {
            // console.log(bottom.path)
            return (
              <>
                <div key={top.path}>
                  <input
                    type="checkbox"
                    id={bottom.id}
                    name="bottom"
                    value={bottom.path}
                  />
                  <label htmlFor={bottom.path}>
                    <img
                      className="imageChoice"
                      src={bottom.path}
                      alt={bottom.description}
                    />
                  </label>
                </div>
              </>
            )
          })}
        </div>

        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form
