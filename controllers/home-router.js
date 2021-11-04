const router = require('express').Router();
const { User, ShoppingItems } = require('../models');
const withAuth = require('../util/withAuth');


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

router.get('/user', (req, res) => {
  res.render('user', { title: 'User Page' });
});

router.get('/fund', async (req, res) => {
  try {
       const user = await User.findAll(
          { model: User, attributes: [ 'username','balance',], }, 
          {where: {id: req.session.userId}},   
          res.render('app', { title: 'Funds Page' }) 
       )} catch (err) {
          console.log(err);
          res.status(500).json(err);
 
       };

// router.get('/user', async (req,res) => {
//   try {
//    const user = await User.findByPk(
//       {
//         model: User,
//         attributes: [
//           'username',
//           'balance',
//         ],
//       }, 
//       {
//         where: {
//           id: req.session.userId,
//         },
//       }
// );
// res.render('user', {
  
//   user,
// });
// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// }
// });

// router.get('/fund',  (req, res) => {
//   if (req.session.loggedIn) {
//       res.redirect('/login');
//       return;
//   }
//   res.render('fund');
// });

module.exports = router;
