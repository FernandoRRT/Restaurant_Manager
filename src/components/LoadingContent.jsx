import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../services/LanguageContainer";

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  height: 100%;

  @media (min-width: 768px) {
    border-top-left-radius: 10px 10px;
  }
`;

const LoadingContent = () => {
  const langContext = useContext(LanguageContext);
  return (
    <LoadContainer>
      {langContext.locale === "pt-BR" ? "Carregando..." : "Loading..."}
    </LoadContainer>
  );
};
export { LoadingContent };
