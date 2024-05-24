import { BrowserRouter } from "react-router-dom"
import { SignUpForm } from "./components/SignUpForm.jsx"
// import { SignInForm } from "./components/SignInForm.jsx"

export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <SignUpForm />
      </div>
    </BrowserRouter>
  )
}
