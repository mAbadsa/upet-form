import MUITextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const PREFIX = "textfield";
export const classes = {
  root: `${PREFIX}-textField`,
  error: `${PREFIX}-textfield`,
};

const StyledTextField = styled(MUITextField)(({ theme }) => ({
  [`&.${classes.root}`]: {
    marginBlock: theme.spacing(2),
  },
  [`&.${classes.error} .Mui-error`]: {
    borderColor: "red",
  },
}));

export default StyledTextField;

