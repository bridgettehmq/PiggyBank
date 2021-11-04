const User = require('./User');
const ShoppingItems = require('./ShoppingItems');

User.hasMany(ShoppingItems, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

ShoppingItems.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, ShoppingItems};