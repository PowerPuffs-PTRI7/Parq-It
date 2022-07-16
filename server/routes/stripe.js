const express = require("express");
const router = express.Router();
const cookieController = require("../controllers/cookieController");
const apiController = require("../controllers/apiController");
const path = require("path");

router.get(
  "/:hostUsername/:bookingDate/:length/:location",
  //cookieController.verifyCookie,
  //apiController.createBookingAPI,
  (req, res) => {
    console.log("booking successful");
    return res
      .status(200)
      .sendFile(path.join(__dirname, "../../client/index.html"));
  }
);

//route FE -> /success/ render the homepage -> axios post request /success/parameter --> send header JWT
// {element: <Homepage success={true}} --> if success = true -> post request

module.exports = router;
