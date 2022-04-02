import { styled, Theme } from "@mui/material/styles";
import Container from "@mui/material/Container";

const PREFIX = "StyledLayout";

export const classes = {
  root: `${PREFIX}-root`,
};

const StyledLayout = styled(Container)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    maxWidth: "1130px",
    paddingInline: theme.spacing(6),
  },
}));

export default StyledLayout;

