import styled from 'styled-components';

export const GridStructure = styled.div`
    display: grid;
    grid-template-columns: minmax(180px, 240px) auto;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "sidenav header"
                        "sidenav content"
                        "sidenav footer";
    height: 100%;
  @media (max-width: 1200px){
      display: grid;
      grid-template-columns: minmax(160px, 180px) auto;
      grid-template-areas: "header header"
        "sidenav content"
        "footer footer";
  }
  @media (max-width: 900px){
      display: grid;
      grid-template-columns: minmax(140px, 170px) auto;
      grid-template-areas: "header header"
        "sidenav content"
        "footer footer";
  }
  @media (max-width: 768px) {
      display: grid;
      grid-template-columns: auto;
      grid-template-areas: "header"
      "content"
      "footer";
  }
`;

export const GridHeader = styled.header`
grid-area: header;
`;

export const GridAside =  styled.aside`
grid-area: sidenav;
@media (max-width: 768px) {
          display: none;
    }
`;

export const GridMain = styled.main`
grid-area: content;
`;

export const GridFooter = styled.footer`
grid-area: footer;
`;