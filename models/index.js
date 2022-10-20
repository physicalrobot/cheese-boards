const { Board } = require('./Board')
const { User } = require('./User');
const { Cheese } = require('./Cheese');


Board.belongsTo(User, { as: "user" });
User.hasMany(Board, { as: "boards" });


Cheese.belongsToMany(Board, { through: "cheese_boards" });
Board.belongsToMany(Cheese, { through: "cheese_boards" })

module.exports = {
    User, Cheese, Board
};