import React from "react";

import { IconButton } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useAuthContext } from "../services/AuthContext";
import { signOutEndpoint } from "../services/backend";
import { SideNavLi } from "../styles/divStyles";
import { StyledIcons } from "../styles/textStyles";

const LogoutMenuIcon = () => {

const { onSignOut } = useAuthContext();

const handleExit = () => {
    signOutEndpoint();
    onSignOut();
} 



  return (
    <SideNavLi onClick={handleExit}> 
      <IconButton
        sx={{
          padding: "0 0 4px 0",
          minHeight: 0,
          minWidth: 0,
        }} 
      >
        <StyledIcons>logout</StyledIcons>
      </IconButton>
      <span>
        <FormattedMessage id="sidebar.logout" defaultMessage="Site Logout" />
      </span>
    </SideNavLi>
  );
};

export { LogoutMenuIcon }
