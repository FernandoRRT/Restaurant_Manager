import styled from "styled-components";
import { StyledIcons } from "./textStyles";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 30px;
  height: 100%;

  @media (min-width: 768px) {
    border-top-left-radius: 10px 10px;
    border-bottom-left-radius: 10px 10px;
  }
`;

export const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  & + & {
    margin-top: 20px;
  }
`;

export const CardTitleDiv = styled.div`
display: flex;
flex-direction: row;
align-items: ${(props) => props.alignItems};
justify-content: ${(props) => props.justifyContent};
flex-wrap: wrap;
width: 100%;
padding: 10px 0;
`;

export const CardBodyDiv = styled.div`
background: ${({ theme }) => theme.colors.background};
  width: 100%;
  border-radius: 10px;
  padding: ${(props) => props.padX};
  margin: ${(props) => props.margX};
`;

export const InnerCardBodyDiv = styled.div`
display: grid;
grid-template-columns: 1fr auto;
gap: 5px;
justify-content: center;
align-items: center;
margin: ${(props) => props.margX};
@media (max-width: 768px) {
  grid-template-columns: 1fr;
    }
`;

export const GridDivStructure = styled.div`
display: grid;
grid-template-columns: ${(props) => props.templateOrder};
gap: ${(props) => props.spaceGap};
justify-content: start;
align-items: center;
`;

export const FlexDivStructure = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${(props) => props.justifyContent};
  padding: ${(props) => props.padX};
  width: 100%;
  gap: 5px;

  @media (max-width: 550px) {
    justify-content: ${(props) => props.justifyContentSMBreakpoint};
  }
  `;


export const NoWrapFlexRowDiv = styled.div`
   display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  
`;


export const SocialFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${({ theme }) => theme.colors.primaryText};
  font-size: 16px;
  font-weight: 600;
`;

export const DishesGridDivStructure = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.spaceGap};
    justify-content: start;
  align-items: ${(props) => props.alignItems};
  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;


export const DishesStyledIconDiv = styled.div`
height: 60px;
width: 60px;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
border-radius: 10px;
background-color: ${(props) =>
  props.marketValue > props.produtionValue
    ? ({ theme }) => theme.colors.btnSucess
    : ({ theme }) => theme.colors.btnDanger};
&:hover {
  background-color: ${({ theme }) => theme.colors.btnInfo};
}
& > .material-icons {
  font-size: 30px;
}
`;

export const HeadDiv = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IpadMiniBreakpoint = styled.div`
  @media (min-width: 770px) {
      display: none;
  }
`;


export const HeaderContainer = styled.div`
    background:  ${({ theme }) => theme.colors.primary };
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom-left-radius: -25px -25px;
    height: 100%;
`;

export const SidebarContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 30px 10px 0;
  height: 100%;
`;


export const LogoDiv = styled.div`
  margin: -5px auto 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SiteLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const SideNavUl = styled.div` 
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
    `;
export const SideNavLi = styled.div`
  padding: 5px 0 5px 5px;
  margin: 0;
  background: ${(props) => (props.active ? ({ theme }) => theme.colors.background : "")};
  border-left: ${(props) => (props.active 
  ? (({ theme }) => `5px solid ${theme.colors.secondary}`)
  : ""
  )};
  color: ${(props) => (props.active ? ({ theme }) => theme.colors.primaryText : ({ theme }) => theme.colors.secondaryText)};
  border-top-right-radius: 25px 50%;
  border-bottom-right-radius: 25px 50%;
  font-size: 18px;
  text-decoration: none;
  & > span {
    font-weight: 600;
  }
  & ${StyledIcons} {
    color: ${(props) => (props.active ? ({ theme }) => theme.colors.primaryText : ({ theme }) => theme.colors.secondaryText)};
    }

  &:hover {
    border-top-right-radius: 25px 50%;
    border-bottom-right-radius: 25px 50%;
    cursor:pointer;
    background: ${({ theme }) => theme.colors.background};
    border-left: 5px solid ${({ theme }) => theme.colors.secondary};
    transition: all 0.01s ease-in-out;
    color: ${({ theme }) => theme.colors.primaryText};
    & ${StyledIcons} {
      color: ${({ theme }) => theme.colors.primaryText};
    }
    
  }

`;

export const SideNav = styled.nav`
  width: 100%;
  & > a {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 18px;
  }
  `;
