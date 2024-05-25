import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "./Button.jsx"

export const LoggedIn = () => {
  //State to see if user is logged in or not based on authentication
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const navigate = useNavigate()

  //Function to handle signout
  const handleSignOut = () => {
    localStorage.removeItem("accessToken") //Remove saved accessToken
    setIsLoggedIn(false)
    navigate("/signin")
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>You have successfully logged in!</h1>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  )
}
