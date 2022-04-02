import { styled } from "@mui/material/styles";

const PREFIX = "StyledForm";

export const classes = {
  root: `${PREFIX}-root`,
};

const StyledForm = styled("form")(({ theme }) => ({
  [`&.${classes.root}`]: {
    maxWidth: "500px",
  },
}));

export default StyledForm;

