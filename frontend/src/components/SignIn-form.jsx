import React from "react"

export const SignIn = () => {
  return (
    <>
      <form>
        <textarea value={name} placeholder="enter your name here" />
        <textarea value={email} />
        <textarea value={password} />
      </form>
    </>
  )
}
