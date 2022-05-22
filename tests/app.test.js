import app from "../src/app.js";
import request from "supertest";

describe("user controller test suits ", () => {
  test("should work", async () => {
    console.log("get all users list");
    let response = await request(app).get("/allusers");
    expect(response).not.toBeNull();
    console.log(response);
  });
});
