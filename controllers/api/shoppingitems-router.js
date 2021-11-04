const { User } = require('../../models');

const router = require('express').Router();

// Requiring our custom middleware for checking if a user is logged in
const withAuth = require("../util/withAuth");
  
//get route to grab all the shopping-items 
app.get("/shoppingitems", withAuth, function (req, res) {
  db.shoppingitems.findAll({}).then(function (result) {
    res.json(result);
  });
});

//delete route to delete an item from the list 
router.delete("/shoppingitems", withAuth, function (req, res) {
    db.shoppingitems.destroy({
      where: {
        id: req.body.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });


//post route to create a new item and assign it to list
router.post("/shoppingitems", withAuth, function (req, res) {
    db.shoppingitems.create(req.body).then(function (result) {
      res.json(result);
    });
    try {
      shoppingitems = await shoppingitems.save()
      res.redirect()
    } catch (e){
      res.render ('/shoppingitems')
    }
  });


  module.exports = router;