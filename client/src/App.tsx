import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AdminLayout, Layout } from "./global"
import { Home, Dashboard, LoginPage, RequiredAuth } from "./pages"
import Providers from "./provider/Providers"
function App() {
  return (
    <>
      <Providers>
        <BrowserRouter>
          <Routes>

            {/* public */}
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home />} />
            </Route>

            {/* admin */}
            <Route path="/admin" element={<AdminLayout />} >
              <Route index  element={<LoginPage />} />
              {/* private */}
              <Route path="dash" element={<RequiredAuth />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Route> 

          </Routes>
        </BrowserRouter>
      </Providers>
    </>
  )
}

export default App
