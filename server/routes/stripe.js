const express = require("express");
const router = express.Router();
const cookieController = require("../controllers/cookieController");
const apiController = require("../controllers/apiController");
const path = require("path");
const { verifyCookie } = require("../controllers/cookieController");
const { createBookingAPI } = require("../controllers/apiController");
const app = express();

//stripe.js handles all /success/*

router.post("/", (req, res) => {
  console.log("entered success /");
  res.status(200);
});

router.post("/:hostUsername/:bookingDate/:length/:location", (req, res) => {
  console.log("Post received");
  res.status(200);
});

router.get("/", (req, res) => {
  console.log("checkout get request hit");
  return res.status(200);
});

// router.get(
//   "/:hostUsername/:bookingDate/:length/:location",
//   cookieController.verifyCookie,
//   apiController.createBookingAPI,
//   (req, res) => {
//     console.log("booking successful");
//     try {
//       return res
//         .status(200)
//         .sendFile(path.join(__dirname + "../../../client/index.html"));
//     } catch (err) {
//       console.log(err);
//       return res.status(200);
//     }
//     // return res
//     //   .status(200)
//     //   .sendFile(path.join(__dirname, "../../client/index.html"));
//   }
// );

//route FE -> /success/ render the homepage -> axios post request /success/parameter --> send header JWT
// {element: <Homepage success={true}} --> if success = true -> post request

module.exports = router;
