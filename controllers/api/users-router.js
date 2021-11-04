const { User, index } = require('../../models');
const withAuth = require('../../util/withAuth');
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

router.patch('/app', withAuth, async(req, res) =>{
  console.log('hi howdy hello, this works')
  const addMoney = req.body.addMoney;
  const subtractMoney = req.body.subtractMoney; 
  const money = await User.budget(username);
    if(add){
    var newAmount = (parseInt(addMoney) + parseInt(money)).toString();
    updateElement(newAmount)
    }
    else if (subtract){
    var newAmount = parseInt(User.budget) - parseInt(money).toString;
    if(newAmount<0){res.render('/app'); return;}
    updateElement(newAmount);
    }
  })







// router.patch('/app', withAuth, async function(req, res){
//   console.log('hi howdy hello, we are working')
//     var{
//       addDollars,
//       remDollars,
//       add,
//       remove,
//     } = req.body;
//     const username = req.session.username;
//     var money = await db.getFunds(username);
//     var invalid;
    
//     if(add){
//         if(parseInt(addDollars) >= 0){
//           await db.addFunds(username, addDollars);
//           res.redirect('/app');
//         } else{
//           console.log("invalid amount entered.")
//         }
//     } else if (remove){
//         console.log(remDollars);
//         console.log(money);
//         if(parseInt(remDollars) <= parseInt(money)){
//           invalid=false;
//           await db.removeFunds(username, remDollars);
//           res.redirect('/app');
//         } else {
//           console.log("invalid amount entered.");
//         }
//     } 
//   });

  module.exports = router;