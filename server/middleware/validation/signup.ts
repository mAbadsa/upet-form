import { Request, Response, NextFunction } from "express";
import * as Yup from "yup";

import { boomify } from "../../utils";

const signupValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, phoneNumber, email, password } = req.body;

    console.log({ firstName, lastName, phoneNumber, email, password });

    const signupSchema = Yup.object().shape({
      firstName: Yup.string()
        .matches(/^([A-Z]{1})([a-z]*)$/, {
          message: "First Name Must be capitalized",
        })
        .required("This field is required"),
      lastName: Yup.string()
        .matches(/^([A-Z]{1})([a-z]*)$/, {
          message: "Last Name Must be capitalized",
        })
        .required("This field is required"),
      phoneNumber: Yup.string()
        .matches(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, {
          message:
            "Phone number must match United States format: (436) 463-4364.",
        })
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, {
          message:
            "At least one lowercase characters, one uppercase characters and one number",
        })
        .min(8, "Password must be at least 8 characters")
        .required("This field is required"),
    });
    console.log("first");
    await signupSchema.validate(
      {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      },
      {
        abortEarly: false,
      }
    );
    console.log("first");

    return next();
  } catch (error: any) {
    console.log({ error });
    next(boomify(400, error.errors[0]));
  }
};

export default signupValidation;

