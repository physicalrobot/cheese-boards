const { sequelize } = require('./db');
const { User, Board, Cheese } = require('./models/index')

describe('User and Board,Cheese Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {

        await sequelize.sync();
    })

    test('can create a User, Board, and Cheese', async () => {

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

    test('User assocation', async () => {
        const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
        expect(cheese.title).toBe("Pepper Jack");
    })


    // test('Cheese - Board', async () => {
    //     const viku = await User.create({ name: "Viku", email: "rock@gmail.com" });

    //     const cheeseboard1 = await Board.create({ type: "wood", description: "medium", rating: 3 })
    //     const cheeseboard2 = await Board.create({ type: "wood", description: "medium", rating: 3 })

    //     await viku.addBoard(cheeseboard1)
    //     await viku.addBoard(cheeseboard2)
    //     let vikusboards = await viku.getBoards();
    //     expect(vikusboards.length).toBe(2)

    // })


    // test('User-Board Associations', async () => {
    //     const viku = await User.create({ name: "Viku", email: "rock@gmail.com" });

    //     const cheeseboard1 = await Board.create({ type: "wood", description: "medium", rating: 3 })
    //     const cheeseboard2 = await Board.create({ type: "wood", description: "medium", rating: 3 })

    //     await viku.addBoard(cheeseboard1)
    //     await viku.addBoard(cheeseboard2)
    //     let vikusboards = await viku.getBoards();
    //     expect(vikusboards.length).toBe(2)
    // })



    // test('can create Cheese', async () => {
    //     const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
    //     expect(cheese.title).toBe("Pepper Jack");
    // })




})





