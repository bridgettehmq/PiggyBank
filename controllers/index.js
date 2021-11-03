const router = require('express').Router();
const homeRouter = require('./home-router');
const apiRouter = require('./api');
//const ShoppingItems = require('./api/shoppingitems-router')
router.use('/', homeRouter);
router.use('/api', apiRouter);
module.exports = router;
