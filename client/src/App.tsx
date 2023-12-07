import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminLayout, Layout } from "./global"

import { Home, Dashboard } from "./pages"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* public */}
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
          </Route>

          {/* private */}
          <Route path="/admin" element={<AdminLayout />} >
            <Route index  element={<Dashboard />} />
          </Route> 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
