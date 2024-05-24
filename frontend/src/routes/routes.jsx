import { Router, Route } from "react-router-dom"
import { SignUpForm } from "../components/SignUpForm"
import { LoggedIn } from "../components/LoggedIn"

export const routes = (
  <Router>
    <Route path="/signup" element={<SignUpForm />} />
    <Route path="/loggedin" element={<LoggedIn />} />
  </Router>
)
