const { User, ShoppingItems } = require('../../models');
const router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in
const withAuth = require("../util/withAuth");
  
//get route to grab all the shopping-items // do we need?
/*app.get("/shoppingitems", withAuth, function (req, res) {
  db.shoppingitems.findAll({}).then(function (result) {
    res.json(result);
  });
});*/

//delete route to delete an item from the list 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedShoppingItem = await ShoppingItems.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletedShoppingItem) {
      res.status(404).json({ message: 'No shopping item found with this id!' });
      return;
    }

    res.status(200).json(deletedShoppingItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post route to create a new item and assign it to list
router.post('/shoppingitems', withAuth, async (req, res) => {
  try {
    const newshoppingitems = await ShoppingItems.create({
      ...req.body,
      user_id: req.session.user_id, price: req.body.price
    });

    res.status(200).json(newshoppingitems);
  } catch (err) {
    res.status(400).json(err);
  }
});


  module.exports = router;