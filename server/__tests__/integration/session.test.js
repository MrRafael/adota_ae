const request = require('supertest');
const app = require('../../src/app')
const factory = require('../factories');
const { User } = require('../../src/app/models');

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
})