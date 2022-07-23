const express = require("express");
const router = express.Router();

// controllers
const apiController = require("../controllers/apiController");
const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");
const googleRequestController = require("../controllers/googleController");
const getAllListingsController = require("../controllers/getAllListingsController")
const stripeController = require("../controllers/stripeController");

// get requests for a single location - When user clicks a marker on the map
router.get("/location", apiController.getLocation, (req, res) => {
  return res.status(200).json(res.locals.location);
});

// get request for bookings
router.get(
  "/booking",
  cookieController.verifyCookie,
  apiController.getBooking,
  (req, res) => {
    return res.status(200).json(res.locals.booking);
  }
);

// get request for all locations
router.post(
  "/all",
  googleRequestController.mapLocation,
  apiController.getAllLocation,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

// post requests for new location
router.post(
  "/location",
  cookieController.verifyCookie,
  googleRequestController.mapLocation,
  apiController.createLocation,
  apiController.getAllLocation,
  (req, res) => {
    return res.status(200).json(res.locals.result);
  }
);

// post rquests for new bookings
router.post(
  "/booking",
  cookieController.verifyCookie,
  stripeController,
  (req, res) => {
    //after stripeController, redirect to URL /success
    //if /success -> apicontroller
    //issue: how we do grab the booking data?
    console.log("the session url is", res.locals.session.url);
    return res.status(200).json(res.locals.session.url);
    //return res.redirect(303, res.locals.session.url);
  }
);

router.get("/checkLogin", cookieController.verifyCookie, (req, res) => {
  console.log("check login backend hit");
  return res.status(200).json(res.locals.username);
});

//post request for all bookings
router.post("/allbookings", cookieController.verifyCookie2, getAllListingsController.getAllBookings, (req, res) => {
  return res.status(200).json(res.locals.bookings);
})

// post request for all hostings
router.post("/allhostings", cookieController.verifyCookie2, getAllListingsController.getAllHostings, (req, res) => {
  return res.status(200).json(res.locals.hostings);
})

// post for filter bookings 
// router.post("/price", apiController.getPriceLocation, (req,res,next)=> {
//   return res.status(200).json();
// });

module.exports = router;
