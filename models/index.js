// import models
const expenses= require('./expenses');
const fund = require('./fund');
const saving = require('./saving');
const user = require('./User');


// fund belongs to user
fund.belongsTo(user, 
    {
    foreignKey: 'user_id'
  });

// saving belongsTo fund
saving.belongsTo(fund, 
  {
  foreignKey: 'fund_id'
});

expenses.belongsTo(fund, 
    {
    foreignKey: 'fund_id'
  });

// fund have many expenses

fund.hasMany(expenses,
   {
  foreignKey: 'fund_id'
});



module.exports = {
  expenses,
  fund,
  saving,
  user,
};

