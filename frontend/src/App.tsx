import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { MainLayout } from "./MainLayout"

import "./App.scss"

const NotFound = React.lazy(() => import("./NotFound").then(({ NotFound }) => ({ default: NotFound })))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
