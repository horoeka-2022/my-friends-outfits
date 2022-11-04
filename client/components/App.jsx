import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import data from '../data'
import List from './List'
import Form from './Form'
import Button from './Button'

function App() {
  const [outfits, setOutfits] = useState(data)

  return (
    <main className="mainApp">
      <div className="mainOuterDiv">
        <header className="mainHeader">
          <h1 className="mainH1">My Friends Outfits</h1>
        </header>
        <div>
          <Button>
            <Link to="/add">Add New Outfit</Link>
          </Button>
        </div>
        <div className="mainInnerDiv">
          <Routes>
            <Route path="/" element={<List outfits={outfits} />} />
            <Route
              path="/add"
              element={<Form outfits={outfits} setOutfits={setOutfits} />}
            />
          </Routes>
        </div>
      </div>
    </main>
  )
}

export default App
