import styled from "styled-components";

export const Container = styled.div`
    /* height: 80px; */
    background:  ${({ theme }) => theme.colors.frontBackground };
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    height: 100%;

    @media (min-width: 768px) {
        border-top-left-radius: 10px 10px;
    }
`;