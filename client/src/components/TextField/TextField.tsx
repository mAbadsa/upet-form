import React, { FC, ChangeEventHandler, ReactNode, FocusEvent } from "react";
import { Theme, SxProps } from "@mui/material";

import MyTextField, { classes } from "./styles";

type TextFieldProps = {
  className?: string;
  id?: string;
  name?: string;
  type?: string;
  value?: any;
  variant?: "outlined" | "filled" | "standard" | undefined;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  label: string | undefined;
  fullWidth?: boolean;
  size?: "medium" | "small" | undefined;
  sx?: SxProps<Theme> | undefined;
  helperText?: ReactNode;
  InputProps?: Object | undefined;
  error?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => void;
};

const TextField: FC<TextFieldProps> = ({
  className,
  id,
  name,
  type,
  value,
  variant,
  color,
  label,
  fullWidth = false,
  size = "medium",
  sx,
  helperText,
  InputProps,
  error,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <MyTextField
      className={`${className} ${classes.root} ${error && classes.error}`}
      id={id}
      name={name}
      type={type}
      value={value}
      variant={variant}
      color={color}
      label={label}
      size={size}
      sx={sx}
      fullWidth={fullWidth}
      helperText={helperText}
      error={error}
      InputProps={InputProps}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default TextField;

