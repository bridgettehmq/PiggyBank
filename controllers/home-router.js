const router = require('express').Router();
const { User, ShoppingItems } = require('../models');


// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get('/', async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ['password'],
        raw: true,
      });
    }
    res.render('index', { //home
      title: 'Home Page', // Home Page
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('⛔ Uh oh! An unexpected error occurred.');
  }
});

router.get('/login', (req, res) => {
  res.render('login', { title: 'Log-In Page' });
});

router.get('/signup', (req, res) => {
  res.render('login', { title: 'Sign-Up Page' });
});

router.get('/shoppinglist', async (req, res) => {
  const shopList= await ShoppingItems.findAll({
    //where: {
    //  userId: req.session.userId,
    // },
  });
  
  const shoppingList= shopList.map((item) => item.get({ plain: true }));
  
  res.render('shoppingitms', {
  
    shoppingList,
  });
  
});

module.exports = router;
