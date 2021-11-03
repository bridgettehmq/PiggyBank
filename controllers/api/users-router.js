const { User } = require('../../models');
const ShoppingItems = require('../../models/User');
const withAuth = require("../util/withAuth");
const router = require('express').Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create(req.body, { username, password });
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found.');
    }
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      throw new Error('Invalid password');
    }
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid username or password.' });
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }
    res.end();
  });
});




//test -- bridgette
router.patch('/user', withAuth, async function(req, res){
  const {
    addDollars,
    remDollars,
    add, 
    remove
  } = req.body;
  const user = req.session.user;
  const money = await db.getFunds(user);
  if(add){
      if(parseInt(addDollars) >= 0){
        await db.addFunds(user, addDollars);
        res.redirect('/app');
      } else{
        console.log("invalid amount entered.")
      }
  } else if (remove){
      console.log(remDollars);
      console.log(money);
      if(parseInt(remDollars) <= parseInt(money)){
       // invalid=false; // ask tutor 
        await db.removeFunds(user, remDollars);
        res.redirect('/app');
      } else {
        console.log("invalid amount entered.");
      }
  } 
});

module.exports = router;
