import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import data from '../data'
import List from './List'
import Form from './Form'

function App() {
  const [outfits, setOutfits] = useState(data)
  console.log(outfits)

  return (
    <main className="bg-blue-900 w-screen h-screen flex justify-center items-center">
      <div className="mx-auto ">
        <header className="mb-20">
          <h1 className="text-center text-white text-3xl">
            My Friend's Outfits
          </h1>
        </header>
        <div className="flex flex-col space-x-2 justify-center">
          <Routes>
            <Route path="/" element={<List outfits={outfits} />} />
            {/* <Route
              path="/add"
              element={<Form outfits={outfits} setOutfits={setOutfits} />}
            /> */}
          </Routes>
          <List />
        </div>
      </div>
    </main>
  )
}

export default App
