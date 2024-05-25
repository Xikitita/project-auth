import { BrowserRouter, Routes } from "react-router-dom"
import { routes } from "./routes/routes.jsx"

export const App = () => {
  const isAuthenticated = false

  return (
    <BrowserRouter>
      <Routes>{routes({ isAuthenticated })}</Routes>
    </BrowserRouter>
  )
}
