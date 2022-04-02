require("dotenv").config();
import { connect, createConnection, Connection } from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongo_uri: string = process.env.MONGO_DB as string;
    console.log({ mongo_uri });
    if (process.env.NODE_ENV === "development") {
      await connect(mongo_uri);
    }
    // if (process.env.NODE_ENV === "development") {
    //   await connect("mongodb://localhost:27017/upet");
    // }
    // await connect("mongodb://localhost:27017/upet");
    console.log("MongoDB connected!");
  } catch (error: any) {
    console.error("db:config::", error.message);
    process.exit(1);
  }
};

export default connectDB;

