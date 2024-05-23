import { Button } from "./Button.jsx"
import PropTypes from "prop-types"

export const RegistrationForm = ({ name, email, password }) => {
  return (
    <>
      <form>
        <h3>Register here:</h3>

        <label>
          <textarea value={name} placeholder="Enter your name here" required />
        </label>

        <label>
          <textarea
            value={email}
            placeholder="Enter your email here"
            required
          />
        </label>

        <label>
          <textarea
            value={password}
            placeholder="Enter your password here"
            required
          />
        </label>

        <Button />
      </form>
    </>
  )
}

RegistrationForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}
