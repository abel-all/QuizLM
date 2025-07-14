import request from "supertest";
import app from "../server";

describe("POST /users", () => {
  it("returns 400 on invalid payload", async () => {
    const res = await request(app).post("/users").send({ email: "bad", name: "" });
    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
