const express = require("express");
const bodyParser = require("body-parser");
const CONFIG = require("./config/config");
const connectToDb = require("./db/mongodb");

// Books Route 
const bookRouter = require("./routes/books.routes");
const authorRouter = require("./routes/authors.routes");

const app = express();

// connect to mongodb database
connectToDb();

// Add Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/authors", authorRouter);


app.get("/", (req, res) => {
    res.send("Hello Bookstore")
});


app.use((err, req, res, next) => {
  console.log(err)

  const errorStatus = err.status || 500
     res.status(errorStatus).send(err.message)
     next();
});


app.listen(CONFIG.PORT, () => {
   console.log(`Server Started on http://localhost:${CONFIG.PORT}`)
});


