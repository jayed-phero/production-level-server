const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const userRoute = require("./routes/v1/user.routes.js");

app.use(cors());
app.use(express.json());

// app.use(viewCount);

dbConnect();

app.use('/user', userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});


app.all("*", (req, res) => {
    res.send("No route found");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

