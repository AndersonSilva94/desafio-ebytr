import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
  `}
`;

export const ImgLogin = styled.img`
  ${() => css`
    width: 40vw;
  `}
`