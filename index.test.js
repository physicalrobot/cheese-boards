const { sequelize } = require('./db');
const { User, Board, Cheese } = require('./models/')

describe('User and Board,Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a User, Board, and Cheese', async () => {
        // TODO - test creating a bandhire

        const viku = await User.create({ name: "Viku", email: "rock@gmail.com" });
        expect(viku.name).toBe("Viku");
    })

    test('can create a Board', async () => {
        const board = await Board.create({ type: "wood", description: "medium", rating: 3 });
        expect(board.type).toBe("wood");
    })
    
    test('can create Cheese', async () => {
        const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
        expect(cheese.title).toBe("Pepper Jack");
    })

    // test('can create Cheese', async () => {
    //     const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
    //     expect(cheese.title).toBe("Pepper Jack");
    // })


    // test('can create Cheese', async () => {
    //     const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
    //     expect(cheese.title).toBe("Pepper Jack");
    // })

    


})