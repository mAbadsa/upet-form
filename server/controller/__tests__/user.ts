import request from "supertest";
import mongoose from "mongoose";
import app from "../../app";
import connect from "../../db/connect";
import User from "../../models/User";

describe("auth", () => {
  jest.setTimeout(30000);

  let mongoClient: typeof mongoose;
  beforeAll(async () => {
    mongoClient = await mongoose.connect(process.env.MONGO_DB as string);
  });

  it("Create new user with invalid input, Must return statusCode 400", async () => {
    const res = await request(app)
      .post("/api/v1/signup")
      .expect(400)
      .expect("Content-Type", /json/)
      .send({
        firstName: "juan",
        lastName: "perez",
        numberPhone: "123 985-6587",
        email: "juan@gmail.com",
        password: "123456Juan",
      });

    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("First Name Must be capitalized");
  });

  it("Create new user with valid input, Must return statusCode 201", async () => {
    const res = await request(app)
      .post("/api/v1/signup")
      .expect(201)
      .expect("Content-Type", /json/)
      .send({
        firstName: "Juan",
        lastName: "Perez",
        phoneNumber: "123 985-6587",
        email: "juan@gmail.com",
        password: "123456Juan",
      });

    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("Signed up successfully");
  });

  it("Delete existed user", async () => {
    const result = await User.findOneAndDelete({ email: "juan@gmail.com" });

    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  afterAll(async () => {
    await mongoClient.connection.close();
  });
});

