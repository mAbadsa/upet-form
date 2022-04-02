import { ChangeEvent, FC, FocusEvent, ReactElement } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import MUITextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import TextField from "../TextField";
import Button from "../Button";
import StyledForm, { classes } from "./styles";
import { formPropsType } from "../../type";

const InputContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  columnGap: "10px",
});

const Image = styled("img")({
  width: "26px",
  height: "30px",
  margin: "12px 0px 12px 16px",
});

const Form: FC<formPropsType> = ({
  className,
  children,
  onSubmit,
  onFinish,
  isLoading,
  ...props
}): ReactElement<any, any> | null => {
  // const [values, setValues] = useState<{ [key: string]: string }>({
  //   firstName: "",
  //   lastName: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  // });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("This field is required"),
      phoneNumber: Yup.string()
        .matches(
          /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/,
          "Phone number must match United States format: (436) 463-4364."
        )
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Oops! You need a password longer than 8 characters with numbers and letters."
        )
        .min(8, "Password must be at least 8 characters")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      onFinish(values);
    },
  });

  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [event.target.name]: event.target.value,
  //   }));
  // };

  const handleClick = (event: ChangeEvent<MouseEvent>) => {
    formik.handleSubmit();
    // check if the first letter is capitalize or not
    console.log(formik.values);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement | Element>
  ) => {
    console.log(formik.values["firstName"]);
    console.log(formik.values["lastName"]);
    if (!formik.values["firstName"] || !formik.values["lastName"]) return;
    if (!formik.values["firstName"][0].match(/[A-Z]/)) {
      formik.values["firstName"] =
        formik.values["firstName"]["substring"](0, 1)["toUpperCase"]() +
        formik.values["firstName"]["substring"](1);
    }

    if (!formik.values["lastName"][0].match(/[A-Z]/)) {
      console.log(formik.values["lastName"]);

      formik.values["lastName"] =
        formik.values["lastName"]["substring"](0, 1)["toUpperCase"]() +
        formik.values["lastName"]["substring"](1);
    }
  };

  return (
    <StyledForm className={`${classes.root}`} onSubmit={formik.handleSubmit}>
      <InputContainer>
        <TextField
          type="text"
          name="firstName"
          id="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          label="First name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={!!formik.touched.firstName && !!formik.errors.firstName}
          helperText={
            formik.touched.firstName && formik.errors.firstName ? (
              <span>{formik.errors.firstName}</span>
            ) : null
          }
        />
        <TextField
          type="text"
          name="lastName"
          id="lastName"
          onChange={formik.handleChange}
          onBlur={handleBlur}
          value={formik.values.lastName}
          label="Last name"
          variant="filled"
          size="small"
          sx={{
            width: 0.48,
          }}
          error={!!formik.touched.lastName && !!formik.errors.lastName}
          helperText={
            formik.touched.lastName && formik.errors.lastName ? (
              <span>{formik.errors.lastName}</span>
            ) : null
          }
        />
      </InputContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: 1,
          borderColor: "primary.light",
          borderRadius: 1 / 2,
          my: 2,
        }}
      >
        <InputContainer>
          <Image src="./us-icon.png" alt="us-flasg" />
        </InputContainer>
        <MUITextField
          sx={{
            ".MuiFilledInput-root": {
              border: 0,
            },
          }}
          type="phone"
          name="phoneNumber"
          id="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          label="Phone number"
          variant="filled"
          size="small"
          fullWidth
          error={!!formik.touched.phoneNumber && !!formik.errors.phoneNumber}
        />
      </Box>
      <FormHelperText
        sx={{ color: "#FF0000", fontSize: "12px" }}
        children={formik.errors.phoneNumber}
        error={!!formik.touched.phoneNumber && !!formik.errors.phoneNumber}
      />
      {/* <TextField
        type="phone"
        name="phoneNumber"
        id="phoneNumber"
        onChange={formik.handleChange}
        value={formik.values.phoneNumber}
        label="Phone number"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.phoneNumber && !!formik.errors.phoneNumber}
        helperText={
          formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null
        }
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SVGIcons.Upet />
            </InputAdornment>
          ),
        }}
      /> */}
      <TextField
        type="email"
        name="email"
        id="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        label="Email"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.email && !!formik.errors.email}
        helperText={
          formik.touched.email && formik.errors.email ? (
            <span>{formik.errors.email}</span>
          ) : null
        }
      />
      <TextField
        type="password"
        name="password"
        id="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        label="Password"
        variant="filled"
        size="small"
        fullWidth
        error={!!formik.touched.password && !!formik.errors.password}
        helperText={
          formik.touched.password && formik.errors.password ? (
            <span>{formik.errors.password}</span>
          ) : null
        }
      />
      <Button
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 4, height: 55 }}
        disableElevation
        onClick={handleClick}
      >
        {isLoading ? (
          <CircularProgress
            sx={{
              color: "#F5F5F5",
            }}
          />
        ) : (
          "Next"
        )}
      </Button>
    </StyledForm>
  );
};

export default Form;

