import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import SVGIcons from "../../components/SVG/SVGIcons";

const StyledDashboard = styled("div")((theme) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
}));

const Header = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  marginBottom: theme.spacing(4),
}));

const Title = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",
  padding: theme.spacing(4),
  color: "#000000",
}));

const Dashboard: FC = () => {
  const location = useLocation();
  const state = location.state as { userData: { [key: string]: string } };

  return (
    <StyledDashboard>
      <Header>
        <SVGIcons.Envelope />
        <Title>
          <Typography align="left" variant="h2">
            Thanks, {state.userData.firstName}!
          </Typography>
          <Typography align="left" variant="h2">
            We’ve received your application
          </Typography>
        </Title>
      </Header>
      <Typography align="left" variant="body1" sx={{ mb: 4 }}>
        We’ll process your application as soon as possible and send you a
        decision within 30 days to {state.userData.phoneNumber} or{" "}
        {state.userData.email}. We will contact you in case more information is
        needed.
      </Typography>
      <Typography align="left" variant="body1">
        While we’re reviewing your application, please don’t submit another
        application for the uPet’s breeder program.
      </Typography>
    </StyledDashboard>
  );
};

export default Dashboard;

