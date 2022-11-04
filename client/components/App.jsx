import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import data from '../data'
import List from './List'
import Form from './Form'

function App() {
  const [outfits, setOutfits] = useState(data)

  return (
    <main className="mainApp">
      <div className="mainOuterDiv">
        <header className="mainHeader">
          <h1 className="mainH1">My Friends Outfits</h1>
        </header>
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
