// import { Button } from "./Button.jsx"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpForm = ({ setIsAuthenticated }) => {
  //State variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //Function to handle signup
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://project-auth-irev.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        setIsAuthenticated(true);
        navigate("/loggedin");
      } else {
        const error = await response.json();
        setErrorMessage(error.error);
      }
    } catch (error) {
      console.error("Error, could not sign up:", error);
      setErrorMessage("An error occured while signing up");
    }
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <>
        <form onSubmit={handleSignUp}>
          <h3>Sign up here:</h3>

          <label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name here"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email here"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password here"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit">SIGN UP</button>
        </form>

      <p>Already registered?</p>
      <button type="button" onClick={handleSignIn}>
        SIGN IN
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
