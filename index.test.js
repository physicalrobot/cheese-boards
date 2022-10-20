const { sequelize } = require('./db');
const { User, Board, Cheese } = require('./models/index')

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


    test('Cheese - Board', async () => {

        const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
        const cheese1 = await Cheese.create({ title: "Cheddar", description: "tangy" });


        const cheeseboard1 = await Board.create({ type: "wood", description: "medium", rating: 3 })
        const cheeseboard2 = await Board.create({ type: "wood", description: "medium", rating: 3 })

        await cheeseboard1.addCheeses(cheese)
        await cheeseboard1.addCheeses(cheese1)
        let cheesesdisplayed = await cheeseboard1.getCheeses();
        expect(cheesesdisplayed.length).toBe(2)
    })

    test('User assocation', async () => {
        const cheese = await Cheese.create({ title: "Pepper Jack", description: "spicy and good" });
        expect(cheese.title).toBe("Pepper Jack");
    })


    test('eager loading', async () => {
        await sequelize.sync({ force: true });

        const viku = await User.create({ name: "Viku", email: "rock@gmail.com" })
        const nishu = await User.create({ name: "Nish", email: "rock@gmail.com" })

        const cheese2 = await Cheese.create({ title: "Swiss", description: "spicy and good" });
        const cheese3 = await Cheese.create({ title: "White Cheddar", description: "tangy" });

        const cheeseboard1 = await Board.create({ type: "wood", description: "medium", rating: 3 })
        const cheeseboard = await Board.findByPk(1)

        await cheeseboard.addCheeses(cheese2)
        await cheeseboard.addCheeses(cheese3)


        const boards = await Board.findAll({
            include: [{ model: Cheese, as: 'cheeses' }]
        });

        const cheese = await Cheese.findAll({
            include: [{ model: Board, as: 'boards' }]
        });

        const users = await User.findAll({
            include: [{ model: Board, as: 'boards' }]
        });

        const cheeses4one = await boards[0].getCheeses()

        expect(users.length).toBe(2)
        expect(boards.length).toBe(1)
        expect(cheese.length).toBe(2)

        expect(cheeses4one.length).toBe(2)

    })
})