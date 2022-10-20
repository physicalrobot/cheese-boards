const { Board } = require('./Board')
const { User } = require('./User');
const { Cheese } = require('./Cheese');


Board.belongsTo(User, { as: "user" }); // one to many
User.hasMany(Board, { as: "boards" });


Cheese.belongsToMany(Board, { through: "cheese_boards" }); //many to many
Board.belongsToMany(Cheese, { through: "cheese_boards" })

module.exports = {
    User, Cheese, Board
};