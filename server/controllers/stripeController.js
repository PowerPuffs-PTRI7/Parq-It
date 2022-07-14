const stripe = require("stripe")(
  "sk_test_51LKuG6KjRTJy9juZp1Tl37bHgi0blYv9EPcuZBLUCZ3qx5FlBzh9JVAzU2xNdpNb4gFjyxC7iXRHisoRceo1TKUF004l8YQAH6"
);
const { Location } = require("../models/userModel");

const stripeController = async (req, res, next) => {
  console.log("entered stripe body ->", req.body);
  // Destructure what was sent in the request body
  const { hostUsername, bookingDate, length, location } = req.body;
  // parking will be an object
  console.log("hostusername -> ", hostUsername);
  //destructure parking, grab the spot rate and hours

  // get price for each dish
  //const params = [dishId];
  let mongoPriceQuery = await Location.findOne({ username: hostUsername });
  console.log("mongoPriceQuery->", mongoPriceQuery);
  console.log("address", mongoPriceQuery.size);
  console.log(
    "yes---------------------------------------------------------------------------------------"
  );
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: mongoPriceQuery.address,
          },
          unit_amount: mongoPriceQuery.price * 100,
        },
        quantity: length,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:8080/`,
    cancel_url: `http://localhost:8080/`,
  });
  res.locals.session = session;

  if (session) {
    next();
  }

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ["card"],
  //   mode: "payment",
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "usd",
  //         product_data: {
  //           name: mongoPriceQuery.address,
  //         },
  //         unit_amount: mongoPriceQuery.price,
  //       },
  //       quantity: mongoPriceQuery.size,
  //     },
  //   ],
  //   success_url: "http://localhost:8080/",
  //   cancel_url: "http://www.google.com",
  // });
};

module.exports = stripeController;
