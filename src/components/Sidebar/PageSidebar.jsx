import React from "react";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { IconButton } from "@mui/material";
//this library grant access to our teo translated languages.
import { FormattedMessage } from "react-intl";
//The uuId is used in another parts of the program to generate a unic Id.
import { getNewId } from "../../helpers/getNewId";
import { UserDiv } from "../UserDiv";
//The sidebar text and routes
import { SidebarItems } from "../../Routes/routes";
import { LogoutMenuIcon } from "../LogoutMenuIcon";
// The tyled imports are separated in the div elements and text elements styles file.
import {
  LogoDiv,
  SideNav,
  SideNavLi,
  SideNavUl,
  SidebarContainer,
  SiteLogoDiv,
} from "../../styles/divStyles";
import {
  SiteDescriptor1,
  SiteDescriptor2,
  SideNavLink,
  StyledIcons,
} from "../../styles/textStyles";

const PageSidebar = (props) => {
  const location = props.history.location;

  return (
    <SidebarContainer>
      <LogoDiv>
        <LocalDiningIcon fontSize="large" />
        <SiteLogoDiv>
          <SiteDescriptor1>Smart</SiteDescriptor1>
          <SiteDescriptor2>Chef</SiteDescriptor2>
        </SiteLogoDiv>
      </LogoDiv>
      <UserDiv />

      <SideNav>
        <SideNavUl>
          {SidebarItems.map((item) => (
            <SideNavLink to={item.route} key={getNewId()}>
              <SideNavLi active={item.route === location.pathname}>
                <IconButton
                  sx={{
                    padding: "0 0 4px 0",
                    minHeight: 0,
                    minWidth: 0,
                  }}
                >
                  <StyledIcons>{item.icon} </StyledIcons>
                </IconButton>
                <span>
                  <FormattedMessage
                    id={item.messageId}
                    defaultMessage={item.defaultMessage}
                  />
                </span>
              </SideNavLi>
            </SideNavLink>
          ))}
          {/* the logou icon has the same structura as the other components but he is setted ot of the array to avoid errors. */}
          <LogoutMenuIcon />
        </SideNavUl>
      </SideNav>
    </SidebarContainer>
  );
};

export { PageSidebar };
