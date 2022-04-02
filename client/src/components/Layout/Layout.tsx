import { FC, ReactElement } from "react";

import StyledLayout, { classes } from "./styles";

type LayoutProps = {
  className?: string;
};

const Layout: FC<LayoutProps> = ({
  className,
  children,
  ...props
}): ReactElement<any, any> | null => {
  return (
    <StyledLayout className={`${className} ${classes.root}`} {...props}>
      {children}
    </StyledLayout>
  );
};

export default Layout;

