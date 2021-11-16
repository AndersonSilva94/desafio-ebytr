import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to left, #E07EF0, #1892A2, #386AC0);
  `}
`;

export const ContainerForm = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`