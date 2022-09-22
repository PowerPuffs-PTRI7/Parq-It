const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 80;
const cookieParser = require("cookie-parser");
const stripeController = require("./controllers/stripeController");
const fileUpload = require('express-fileupload');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(fileUpload());

// Mongo Connection
mongoose
  .connect(process.env.mongoURI)
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

// require routers here:
const apiRouter = require("./routes/api");
const userRouter = require("./routes/user");
const stripeRouter = require("./routes/stripe");
const apiController = require("./controllers/apiController");

//handle rerouted builds
//app.use("/success/build", express.static(path.join(__dirname, "../../build")));

// define route handlers here:
app.use("/api/users", userRouter);
app.use("/api", apiRouter);
app.use("/checkout/", stripeRouter);

app.post(
  "/order",
  cookieController.verifyCookie,
  apiController.createBookingAPI,
  (req, res) => {
    console.log("This confirms connection to the server");
    console.log("-------------BODY", req.body);
    console.log("-------------TOKEN", req.headers);

    return res.status(200);
  }
);

// statically serve everything in the build folder on the route '/build'
app.use("/build", express.static(path.join(__dirname, "../build")));

//Serve the URL for stripe
app.post("/success", stripeController, (req, res) => {
  res.status(200).json({ url: res.locals.session.url });
});

// this intends to reroute pages back to index if they're not known!
app.get("/*", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../client/index.html"));
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  return res.status(404).send("Unknown route");
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `${err}`,
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
