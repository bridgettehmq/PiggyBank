const router = require("express").Router();
const { funds } = require("../../models");
const withAuth = require("../../util/withAuth");

// update your funds by adding money
//patch or put request
//patch updates
//put replaces
//seperate -- create model transaction

router.post("/", withAuth, async (req, res) => {
  try {
    const moreFunds = await funds.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(moreFunds);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const fundsData = await funds.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!fundsData) {
      res.status(404).json({ message: "There is NO funds" });
      return;
    }

    res.status(200).json(fundsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
