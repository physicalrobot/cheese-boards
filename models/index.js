const { Board } = require('./Board')
const { User } = require('./User');
const { Cheese } = require('./Cheese');


Board.belongsTo(User, { as: "user" });
User.hasMany(Board, { as: "boards" });



module.exports = {
    User, Cheese, Board
};