import { styled } from "@mui/material/styles";
import MUIButton from "@mui/material/Button";

const PREFIX = "StyledButton";

export const classes = {
  withButton: `${PREFIX}-withButton`,
  root: `${PREFIX}-root`,
};

const StyledButton = styled(MUIButton)(({ theme }) => ({
  [`&.${classes.root}`]: {
    "&:hover": {
      backgroundColor: "#000000C7",
    },
  },
}));

export default StyledButton;

