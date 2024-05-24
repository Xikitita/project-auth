export const Button = ({ signUpMode, handleSignUp }) => {
  return (
    <div>
      <button type="submit" onClick={handleSignUp}>
        {signUpMode ? "SIGN UP" : "LOGIN"}
      </button>
    </div>
  )
}

// export const Button = ({
//   signUpMode,
//   handleSignUp,
//   handleLogin,
//   handleSignOut,
//   isAuthenticated,
// }) => {
//   return (
//     <div>
//       {isAuthenticated ? (
//         <button onClick={handleSignOut}>SIGN OUT</button>
//       ) : (
//         <button type="submit" onClick={signUpMode ? handleSignUp : handleLogin}>
//           {signUpMode ? "SIGN UP" : "LOGIN"}
//         </button>
//       )}
//     </div>
//   )
// }
