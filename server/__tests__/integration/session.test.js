const request = require('supertest');
const app = require('../../src/app')
const factory = require('../factories');

const truncate = require("../util/truncate");

describe('authentication', () => {
    beforeEach(async () => {
        await truncate();
    });

    it('should authenticate with valid credentials', async () => {
        const user = await factory.create("User");
        const response = await request(app).post('/session').send({
            email: user.email,
            password: user.password
        })

        expect(response.status).toBe(200);
    });

    it("should return jwt token when authenticated", async () => {
        const user = await factory.create("User", {
            password: "123123"
        });

        const response = await request(app)
            .post("/session")
            .send({
                email: user.email,
                password: "123123"
            });

        expect(response.body).toHaveProperty("token");
    });
})