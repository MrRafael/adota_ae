const request = require('supertest');
const app = require('../../src/app')

const truncate = require("../util/truncate");

describe('pet', () => {
    beforeEach(async () => {
        await truncate();
    });

    it("should not be able to access private routes without jwt token", async () => {
        const response = await request(app).delete("/pet", {
            paramns: {
                id: 1
            }
        });

        expect(response.status).toBe(401);
    });

    it("should not be able to access private routes with invalid jwt token", async () => {
        const response = await request(app)
            .delete("/pet", {
                paramns: {
                    id: 1
                }
            })
            .set("Authorization", `Bearer 123123`);

        expect(response.status).toBe(401);
    });
})