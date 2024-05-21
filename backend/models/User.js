import mongoose from "mongoose"

//Schema - the blueprint
const { Schema, model } = mongoose

const userSchema = new Schema({
  
})

//Model
const User = model("User", userSchema)


export default User