const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");
const loginController = require("../controllers/loginController");
const cookieController = require("../controllers/cookieController");

router.post(
  "/signup",
  signupController.signUp,
  cookieController.setCookie,
  (req, res) => {
    res.status(201).send({ message: "User created successfully" });
  }
);
router.post(
  "/login",
  loginController.loginUser,
  cookieController.setCookie,
  (req, res) => {
    res.status(201).json(res.locals.access_token);
  }
);

//connected to logged in user
// router.get(
//   "/userpage",
//   // cookieController.setCookie
//   (req,res) => {
//     res.status(201).json("You are inside users page")
//   }
// )

module.exports = router;
