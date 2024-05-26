import { BrowserRouter, Routes } from "react-router-dom"
import { routes } from "./routes/routes.jsx"
import { useState } from "react"

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Routes>{routes({ isAuthenticated, setIsAuthenticated })}</Routes>
    </BrowserRouter>
  )
}
