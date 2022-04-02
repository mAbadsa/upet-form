import { styled } from "@mui/material/styles";
import MUIButton from "@mui/material/Button";

const PREFIX = "StyledButton";

export const classes = {
  withButton: `${PREFIX}-withButton`,
};

const StyledButton = styled(MUIButton)(({ theme }) => ({
  [`&.${classes.withButton}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      "& svg": {
        fill: "#323ebe",
      },
    },
  },
}));

export default StyledButton;

