  //get route to grab all the shopping-items 
  app.get("/api/shoppingitems/:id", function (req, res) {
    let id = req.params.id;
    db.items.findAll({
      where: {
        wishlistID: id
      }
    }).then(function (result) {
      res.json(result);
    });
  });


  //post route to create a new item and assign it to a list
  app.post("/api/items", function (req, res) {
    db.items.create(req.body).then(function (result) {
      res.json(result);
    });
  });
