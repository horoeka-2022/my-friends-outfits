import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import data from '../data'
import List from './List'
import Form from './Form'

function App() {
  const [outfits, setOutfits] = useState(data)

  return (
<<<<<<< HEAD
    <main className="bg-blue-900 w-screen h-screen flex justify-center items-center">
      <div className="mx-auto ">
        <header className="mb-20">
          <h1 className="text-center text-white text-3xl">
            My Friend&apos;s Outfits
          </h1>
=======
    <main className="mainApp">
      <div className="mainOuterDiv">
        <header className="mainHeader">
          <h1 className="mainH1">My Friends Outfits</h1>
>>>>>>> a631643224b4570de64cd9513474755dd3331d48
        </header>
        <div className="mainInnerDiv">
          <Routes>
            <Route path="/" element={<List outfits={outfits} />} />
            <Route
              path="/add"
              element={<Form outfits={outfits} setOutfits={setOutfits} />}
            />
          </Routes>
          <List />
        </div>
      </div>
    </main>
  )
}

export default App
