const bcrypt = require('bcryptjs');
const factory = require('../factories');
const truncate = require("../util/truncate");

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should encrypt user', async () => {
        const user = await factory.create("User");

        const compareHash = await bcrypt.compare(user.password, user.password_hash);

        expect(compareHash).toBe(true);
    })
})