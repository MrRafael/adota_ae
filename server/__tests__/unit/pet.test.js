const factory = require('../factories');
const truncate = require("../util/truncate");

describe('Pet', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should creat a cachorro', async () => {

        const raca = "cachorro";
        const user = await factory.create("User");
        const pet = await factory.create("Pet", { raca, user_id: user.id });

        expect(pet.raca).toBe(raca);
    })
})