export const Button = ({
  signUpMode,
  handleSignUp,
  onLogin,
  onSignOut,
  isAuthenticated,
}) => {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onSignOut}>Sign Out</button>
      ) : (
        <button type="submit" onClick={signUpMode ? handleSignUp : onLogin}>
          {signUpMode ? "SIGN UP" : "LOGIN"}
        </button>
      )}
    </div>
  )
}
