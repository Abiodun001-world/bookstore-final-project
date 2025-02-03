const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet")
const CONFIG = require("./config/config");
const connectToDb = require("./db/mongodb");
const { requiresAuth } = require('express-openid-connect');
const logger = require("./logging/logger");

const auth0Middleware = require("./auth/auth0");

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
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to all requests
app.use(limiter)

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth0Middleware);

// Security Middleware
app.use(helmet());

app.use("/api/v1/books", requiresAuth(), bookRouter);
app.use("/api/v1/authors", requiresAuth(), authorRouter);


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


