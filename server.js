const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

// step 1 : run server

const port = process.env.PORT || 8000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`the server is running on http://localhost:${port}`);
});

// step 2 : connect to the database
connectDB();
// step 3 : parsing data

app.use(express.json());

//routes

const userRouter = require("./routes/user");
app.use("/users", userRouter);

