import styled from "styled-components";
import { darken } from "polished";
import { Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
//Text spans section

export const DashboardTextP = styled.p`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  font-weight: 400;
  padding: 5px;
`;

export const CardTitleSpan = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: "Bakbak One", monospace;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ErrorSPan = styled.span`
  font-weight: 600;
  color: rgba(127, 29, 29, 0.9);
  background: rgba(127, 29, 29, 0.3);
`;

export const DishesCardTitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-weight: 700;
  padding-right: 5px;
`;


export const DishesCardTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  padding-right: 5px;
  font-size: 16px;
`;

export const DishesCardSecondaryTextSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 4px;
`;

export const DishesCardCurrencyProfitSpan = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
  padding-right: 5px;
  font-size: 16px;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  margin-top: 4px;
  color: ${(props) =>
    props.marketValue < props.produtionValue
      ? ({ theme }) => theme.colors.btnDanger
      : props.marketValue < 1.5 * props.produtionValue
      ? ({ theme }) => theme.colors.btnWarning
      : ({ theme }) => theme.colors.btnSucess};
`;

export const DishesFormErrorSpan = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: "Bakbak One", monospace;
  color: ${({ theme }) => theme.colors.btnDanger};
`;

export const HeaderEstablishment = styled.span`
    color: ${({theme}) => theme.colors.secondaryText };
    font-size: 1.2em;
    padding-right: 6px;
`;

export const CompanyName = styled.span`
    font-style: italic;
    font-size: 1.3em;
`;

// Buttons section

export const BtnSuccess = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.btnSucess};
  border: 1px solid ${({ theme }) => theme.colors.btnSucess};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.btnSucess)};
  }
`;

export const BtnWarning = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.btnWarning};
  border: 1px solid ${({ theme }) => theme.colors.btnWarning};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.btnWarning)};
  }
`;

export const BtnDanger = styled.button`
  color: #fff;
  background-color: ${({ theme }) => theme.colors.btnDanger};
  border: 1px solid ${({ theme }) => theme.colors.btnDanger};
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => darken(0.05, props.theme.colors.btnDanger)};
  }
`;

// Icons Section

export const StyledAddIcon = styled(AddCircleRoundedIcon)`
  color: ${({ theme }) => theme.colors.btnSucess};
`;

export const StyledRemoveIcon = styled(RemoveCircleRoundedIcon)`
  color: ${({ theme }) => theme.colors.btnDanger};
`;

export const BaseSocialIconButton = styled(IconButton)`
  &.MuiButtonBase-root {
    background: ${({ theme }) => theme.colors.background};
    margin: 0 5px;
    &:hover {
      background: ${(props) => props.basecolor};
    }
  }
`;

export const Facebook = styled(FacebookRoundedIcon)`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const Linkedin = styled(LinkedInIcon)`
  color: ${({ theme }) => theme.colors.primaryText};
`;
export const Twitter = styled(TwitterIcon)`
  color: ${({ theme }) => theme.colors.primaryText};
`;
export const EmailRounded = styled(EmailRoundedIcon)`
  color: ${({ theme }) => theme.colors.primaryText};
`;
export const WhatsApp = styled(WhatsAppIcon)`

  color: ${({ theme }) => theme.colors.primaryText};
`;

export const StyledIcons = styled(Icon)`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 0 5px;
`; 

export const SiteDescriptor1 = styled.span`
  font-family: "Bebas Neue", cursive;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 36px;
  line-height: 1.1em;
  margin-bottom: -18px;
`;

export const SiteDescriptor2 = styled.span`
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 27px;
  font-family: "Bakbak One", cursive;
  margin-bottom: -5px;
`;

export const SideNavLink = styled(Link)`
text-decoration: none;
`;