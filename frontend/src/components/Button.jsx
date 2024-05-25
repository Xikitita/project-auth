export const Button = ({
  handleSignUp,
  handleSignIn,
  onSignOut,
  isAuthenticated,
}) => {
  return (
    <div>
      {isAuthenticated ? (
        <button onClick={onSignOut}>Sign Out</button>
      ) : (
        <>
          <button type="submit" onClick={handleSignUp}>
            SIGN UP
          </button>
          <button type="submit" onClick={handleSignIn}>
            SIGN IN
          </button>
        </>
      )}
    </div>
  )
}

{
  /* <button type="submit" onClick={signUpMode ? handleSignUp : onLogin}>
{signUpMode ? "SIGN UP" : "SIGN IN"}
</button> */
}
