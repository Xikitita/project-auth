import { Button } from "./Button.jsx"
import PropTypes from "prop-types"

export const SignInForm = ({ name, email, password }) => {
  return (
    <>
      <form>
        <h3>Sign in here:</h3>

        <label>
          <textarea value={name} placeholder="Enter your name here" />
        </label>

        <label>
          <textarea value={email} placeholder="Enter your email here" />
        </label>

        <label>
          <textarea value={password} placeholder="Enter your password here" />
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
