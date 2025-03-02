const request = require("supertest");
const app = require("../index");

describe("Mathematical Functions API", () => {
    test("SUM Function", async () => {
        const res = await request(app).post("/api/sheets/calculate").send({
            functionName: "SUM",
            range: [1, 2, 3, 4, 5]
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(15);
    });

    test("AVERAGE Function", async () => {
        const res = await request(app).post("/api/sheets/calculate").send({
            functionName: "AVERAGE",
            range: [10, 20, 30]
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(20);
    });
});
