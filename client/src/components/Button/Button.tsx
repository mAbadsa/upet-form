import { FC, ReactElement } from "react";

import { Theme, SxProps } from "@mui/material";
import StyledButton, { classes } from "./styles";

const Button: FC<{
  className?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  size?: "large" | "medium" | "small";
  sx?: SxProps<Theme> | undefined;
  arialabel?: string;
  disableElevation?: boolean;
  withIcon?: boolean | undefined;
  fullWidth: boolean;
  onClick?: (evt: any) => void;
}> = ({
  className,
  children,
  variant,
  color = "primary",
  withIcon,
  size = "medium",
  sx,
  arialabel,
  fullWidth = false,
  disableElevation = false,
  onClick,
  ...props
}): ReactElement<any, any> | null => {
  return (
    <StyledButton
      className={`${className} ${withIcon ? classes.withButton : ""}`}
      disableElevation={disableElevation}
      variant={variant}
      color={color}
      size={size}
      sx={sx}
      aria-label={arialabel}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

