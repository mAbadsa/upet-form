import { Document } from "mongoose";

export default interface User extends Document {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  createdAt: Date;
}

