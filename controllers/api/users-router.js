const { User } = require('../../models');
const withAuth = require('../../util/withAuth'); //check this out?
const router = require('express').Router();


//this is wrong


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
    
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
      }
      req.session.isLoggedIn = true;
      req.session.userId = user.id;
      req.session.username = user.username;
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Invalid username or password.' });
  }
});

router.post('/signup', async (req, res) => { 
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error.' });
      }
      req.session.isLoggedIn = true;
      req.session.userId = user.id;
      req.session.username = user.username;
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
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

router.put("/funds", withAuth, async (req, res) => {
  try {
    const result = await User.update(
      {
        balance: req.body.balance,
      },
      {
        where: {
          id: req.session.userId,
        },
      }
    );
    return res.json(result);
  } catch (err) {
    console.log (err);
    res.status(500).json(err);
  }
});






module.exports = router;
