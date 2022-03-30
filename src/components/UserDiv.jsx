import React, { useContext } from "react";
import styled from "styled-components";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Tooltip from "@mui/material/Tooltip";
import { LanguageContext } from "../services/LanguageContainer";
import { IconButton } from "@mui/material";
import { FormattedMessage } from "react-intl";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const StyledAccountCircleIcon = styled(AccountCircleRoundedIcon)`
  color: ${({ theme }) => theme.colors.primaryText};
  margin: 0 5px;
`;

const SiteLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserDescriptor1 = styled.span`
  font-family: "Bakbak One", monospace;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  line-height: 1.1em;
  margin-bottom: -4px;
`;

const UserDescriptor2 = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 14px;
  font-family: Roboto, monospace;
  /* margin-bottom: -1px; */
`;

const NavTitleDiv = styled.div`
  margin: 0 auto 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 18px;
  font-weight: 600;
`;

const UserDiv = (props) => {
    const langContext = useContext(LanguageContext);

  return (
    <>
      <ProfileDiv>
        <Tooltip
          title={
            langContext.locale === "pt-BR"
              ? "Configurações do usuário"
              : "User Settings"
          }
        >
          <IconButton
            sx={{
              padding: "4px 0",
              minHeight: 0,
              minWidth: 0,
            }}
          >
            <StyledAccountCircleIcon
              fontSize="large"
              
            />
          </IconButton>
        </Tooltip>
        <SiteLogoDiv>
          <UserDescriptor1>
            Jerk Jenins
          </UserDescriptor1>
          <UserDescriptor2>
            Chief manager
          </UserDescriptor2>
        </SiteLogoDiv>
      </ProfileDiv>
      <NavTitleDiv>
        <FormattedMessage
          id="sidebar.navTitle"
          defaultMessage="Navigation menu "
        />
      </NavTitleDiv>
    </>
  );
};

export { UserDiv };
