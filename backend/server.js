import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User";
import expressListEndpoints from "express-list-endpoints";
import dotenv from "dotenv";

//.env
dotenv.config()

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-auth";
mongoose.connect(mongoUrl);
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Route handler
app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app)
  res.json(endpoints)
})

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("This is the backend!");
});

//Registration endpoint, to create a new user.
app.post("/sign-up", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({
      name,
      email,
      password: bcrypt.hashSync(password),
  });
    await user.save();
    res.status(201).json({ id: user._id, accessToken: user.accessToken });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Could not create user", error: err.message });
  }
});


//Middlewares

//An authenticated endpoint which only returns content if the `Authorization` header with the user's token was correct.

const authenticateUser = async (req, res, next) => {
  const user = await User.findOne({ accessToken: req.header("Authorization") })
  if(user) {
    req.user = user
    next()
  } else {
    res.status(401).json({ loggedOut: true })
  }
}


app.get("sign-in", authenticateUser)
app.get("/sign-in", async (req, res) => {
  const user = await User.findOne({name: req.body.name});
  
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    res.json({userId: user._id, accessToken: user.accessToken});
  } else {
    res.json({notFound: true})
  }



app.get("/sign-in", async (req, res) => {
  res.json({ secret: "You are successfully signed in" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});