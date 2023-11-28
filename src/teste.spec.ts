import app from "./app"
import supertest = require("supertest")

describe("teste", () => {
    it("roda", async () => {
        const req = await supertest(app).get('/')
        expect(req.status).toBe(200)
    })
})