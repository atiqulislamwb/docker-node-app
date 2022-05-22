import app from "../src/app.js";
import request from "supertest";
jest.mock("../src/controllers/userController.js");

describe("UserController Test Suite", () => {
  test("get should return an array of users", async () => {
    let response = await request(app).get("/allusers");
    expect(response.statusCode).toBe(200);
    let users = response.body;
    expect(users.length).toBeGreaterThan(0);
  });
});
