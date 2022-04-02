import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PREFIX = "StyledHeader";

export const classes = {
  root: `${PREFIX}-root`,
};

const StyledHeader = styled(Box)(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBlock: `${theme.spacing(4)}}`,
    height: "78px",
  },
}));

export default StyledHeader;

