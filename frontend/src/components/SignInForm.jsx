import { Button } from "./Button.jsx"
import PropTypes from "prop-types"
import { useState } from "react"

// export const SignInForm = ({ name, email, password }) => {
  export const SignInForm = ({ onLogin }) => {
// State to manage user input
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState(null)

// Handle sign in 
const handleSignIn = async () => {
  try {
    // POST request to autheticate the user
const response = await fetch("https://project-auth-irev.onrender.com/signin", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({email, password }),
})
if (response.ok) {
  //If authetication ok, call inLogin
  const data = await response.json()
  onLogin(data)
} else {
// If login fails, update error state
const errorData = await response.json()
if (response.status === 401 && errorData.error === 'Invalid email or passeord')
//Error message if user writes wrong email or password
setError('Invalid email or password. Try again ')
  } else {
    // Display general error message
    setError(`Login failed: ${errorData.error}`)
  }

  }
} catch (error) {
  // If unexpected error
  setError (`Error during login: ${error.message}`)
}

  return (
    <>
      <form onSubmit={handleSignIn}>
        <h3>Sign in here:</h3>

        <label>
          <input value={email} placeholder="Enter your email here"
          onChange={(event) => setEmail(event.target.value)} />
        </label>

        <label>
          <input value={password} placeholder="Enter your password here"
           onChange={(event) => setPassword(event.target.value)} />
        </label>

        <Button />
      </form>
    </>
  )
}

SignInForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}
