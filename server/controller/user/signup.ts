import { Request, Response, NextFunction } from "express";
import User from "../../models/User";
import { boomify } from "../../utils";
import { resData } from "../../types/response.t";

const signup = async (
  req: Request,
  res: Response<resData>,
  next: NextFunction
) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      console.log(user);
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: "User already exists",
      });
      // throw boomify(400, "User already exist.");
    }

    user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    });

    const _user = await user.save();

    return res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Signed up successfully",
      data: {
        id: _user.id,
        firstName: _user.firstName,
        lastName: _user.lastName,
        phoneNumber: _user.phoneNumber,
        email: _user.email,
      },
    });
  } catch (error: any) {
    next(error);
  }
};

export default signup;

