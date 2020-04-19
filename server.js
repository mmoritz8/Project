const express = require("express");
const mongoose = require ("mongoose");
const routes= require ("./routes")

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

//Connet to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://<user>:<password1>@ds153815.mlab.com:53815/heroku_nzw1wpf3", {useNewUrlParser: true});


app.listen(PORT, () => {
  console.log(` ==> API server now on port ${PORT}!`);
});
