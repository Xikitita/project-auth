export const Button = () => {
  return (
    <div>
      <button
        type="submit"
        onClick={signUpMode ? "handleSignUp" : "handleLogin"}
      >
        {signUpMode ? "SIGN UP" : "LOGIN"}
      </button>
    </div>
  )
}
