import { Route, Navigate } from "react-router-dom"
import { SignUpForm } from "../components/SignUpForm"
import { SignInForm } from "../components/SignInForm"
import { LoggedIn } from "../components/LoggedIn"

export const routes = ({ isAuthenticated }) => (
  <>
    <Route path="/signin" element={<SignInForm />} />
    <Route path="/signup" element={<SignUpForm />} />
    <Route
      path="/loggedin"
      element={isAuthenticated ? <LoggedIn /> : <Navigate to="/signup" />}
    />

    <Route
      path="/"
      element={
        isAuthenticated ? (
          <Navigate to="/loggedin" />
        ) : (
          <Navigate to="/signup" />
        )
      }
    />
  </>
)

{
  /* <Route 
path="/"
element={
  isAuthorized ? (
    <Navigate to="/signin" />
  ) : ( 
  <Navigate to="/loggedin" />
)
}
/> */
}
