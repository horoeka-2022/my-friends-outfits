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

    // props.outfits[0].id

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

    navigate('/add')
  }

  // if(typeof props.outfits[field] == 'function') continue;

  return (
    <form onSubmit={handleSubmit}>
      <section className="formSection">
        <input type="text" name="name" placeholder="Name" required={true} />
        <h2> Pick your Top!</h2>

        {tops.map((top) => {
          return (
            <>
              <div key={top.description}>
                <input
                  type="checkbox"
                  id={top.id}
                  name={top.description}
                  value={top.description}
                />
                <label htmlFor={top.description}>
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

        <h2> Pick your Bottom!</h2>

        {bottoms.map((bottom) => {
          console.log(bottom.path)
          return (
            <>
              <div key={top.description}>
                <input
                  type="checkbox"
                  id={bottom.id}
                  name={bottom.description}
                  value={bottom.description}
                />
                <label htmlFor={bottom.description}>
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

        <Button>Add</Button>
      </section>
    </form>
  )
}

export default Form
