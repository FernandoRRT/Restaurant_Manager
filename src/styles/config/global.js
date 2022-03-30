import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

export const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}
body {
    background: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryText};
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-text-fill-color: ${({ theme }) => theme.colors.primaryText};
  box-shadow: 0 0 0px 1000px ${({ theme }) =>
    theme.title === "light"
      ? "rgba(0,0,0,0.1)"
      : theme.colors.secondaryText} inset;
  transition: background-color 5000s ease-in-out 0s;
}


.paginationUl {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
}

.paginationLi {
  padding: 5px 0px;
  margin: 3px;
  background:  ${({ theme }) => theme.colors.btnPrimary};
  border: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  font-size: 18px;
  list-style-type: none;
  text-decoration: none;
  &:hover {
    background:  ${({ theme }) => lighten(0.1, theme.colors.btnPrimary)};
    cursor:pointer;
    transition: all 0.01s ease-in-out;
    /* color: ${({ theme }) => theme.colors.secondaryText}; */
  }
}

.paginationLink {
padding: 10px;
  list-style-type: none;
  text-decoration: none;
}

.paginationLiActive{
  background:  ${({ theme }) => lighten(0.1, theme.colors.btnPrimary)};
}

.paginationSpan {
  padding: 5px 10px;
  margin: 3px;
  background:  ${({ theme }) => theme.colors.btnPrimary};
  border: ${({ theme }) => theme.colors.primaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 4px;
  font-size: 18px;
  list-style-type: none;
  text-decoration: none;
  &:hover {
    background:  ${({ theme }) => lighten(0.1, theme.colors.btnPrimary)};
    cursor:pointer;
    transition: all 0.01s ease-in-out;
    /* color: ${({ theme }) => theme.colors.secondaryText}; */
  }
}

`;
