import { FC, ReactElement } from "react";

import StyledHeader, { classes } from "./styles";
import SVGIcons from "../SVG/SVGIcons";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({
  className,
}): ReactElement<any, any> | null => {
  return (
    <StyledHeader className={`${className} ${classes.root}`} component="div">
      <SVGIcons.Upet />
    </StyledHeader>
  );
};

export default Header;

