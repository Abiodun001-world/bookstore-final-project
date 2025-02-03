const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const CONFIG = require("./config/config");
const connectToDb = require("./db/mongodb");
const logger = require("./logging/logger");

// Books Route 
const bookRouter = require("./routes/books.routes");
const authorRouter = require("./routes/authors.routes");

const app = express();

// connect to mongodb database
connectToDb();

// Add Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

// Security Middleware
app.use(helmet());

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/authors", authorRouter);


app.get("/", (req, res) => {
    res.send("Hello Bookstore")
});


app.use((err, req, res, next) => {
  logger.error(err.message)

  const errorStatus = err.status || 500
     res.status(errorStatus).send(err.message)
     next();
});


app.listen(CONFIG.PORT, () => {
   logger.info(`Server Started on http://localhost:${CONFIG.PORT}`)
});


