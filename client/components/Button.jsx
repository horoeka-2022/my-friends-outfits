import React from 'react'

function Button({ children }) {
  return (
    <div className="buttonDiv">
      <button type="submit">{children}</button>
    </div>
  )
}

export default Button
