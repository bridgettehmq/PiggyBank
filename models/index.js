// import models
const fund = require('./fund');
const shoppingItems = require('./ShoppingItems');
const user = require('./User');
const Transactions = require('./Transactions');


// fund belongs to user
fund.belongsTo(user, 
    {
    foreignKey: 'user_id'
  });

// saving belongsTo fund
fund.hasMany(shoppingItems,
  {
  foreignKey: 'fund_id'
});


// fund have many expenses

fund.hasMany(expenses,
   {
  foreignKey: 'fund_id'
});



module.exports = {
  fund,
  shoppingItems,
  user,
  Transactions
};

