const db = require("../models");

// console.log('db', db)

beforeAll(async () => {
	await db.sequelize.sync();
});

test("create user", async () => {
    try {
        expect.assertions(1);
        const user = await db.users.create({
            id: 1,
            fname: "Bobbie",
            lname: "Draper",
            email: "bobbie@gmail.com",
        });
        expect(user.id).toEqual(1);        
    } catch (error) {
        console.log('create test error', error)
    }
});

test("get user", async () => {
    try {
        expect.assertions(3);
        const user = await db.users.findByPk(1);
        expect(user.fname).toEqual("Bobbie");
        expect(user.lname).toEqual("Draper");
        expect(user.email).toEqual("bobbie@gmail.com");        
    } catch (error) {
        console.log('get test error', error)
    }
});

test("delete user", async () => {
    try {
        expect.assertions(1);
        await db.users.destroy({
            where: {
                id: 1,
            },
        });
        const user = await db.users.findByPk(1);
        expect(user).toBeNull();
    } catch (error) {
        console.log("delete test error", error);
    }
});

afterAll(async () => {
	await db.sequelize.close();
});
