import { Routes, Route } from "react-router-dom"
import { SignUpForm } from "../components/SignUpForm"
import { SignInForm } from "../components/SignInForm"
import { LoggedIn } from "../components/LoggedIn"

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInForm />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/loggedin" element={<LoggedIn />} />
    </Routes>
  )
}
