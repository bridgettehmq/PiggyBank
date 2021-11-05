const router = require("express").Router();
const { User, ShoppingItems } = require("../models");
const withAuth = require("../util/withAuth");

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
    res.render("index", {
      //home
      title: "Home Page", // Home Page
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("login", { title: "Sign-Up Page" });
});

router.get("/shoppinglist", async (req, res) => {
  const shopList = await ShoppingItems.findAll({});

  const shoppingList = shopList.map((item) => item.get({ plain: true }));

  res.render("shoppingitms", {
    shoppingList,
  });
});

router.get("/user", (req, res) => {
  res.render("user", { title: "User Page" });
});

router.get("/fund", async (req, res) => {
  try {
    const userData = await User.findByPk(
      req.session.userId, 
      { model: User, attributes: ["username", "balance"] },
    );
    const user = userData.get({ plain: true})
    res.render("app", { title: "Funds Page", user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
