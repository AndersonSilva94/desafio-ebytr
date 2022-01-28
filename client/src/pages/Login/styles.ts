import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    padding: 2rem 0;
  `}
`;

export const ImgLogin = styled.img`
  ${() => css`
    width: 35vw;

    @media (max-width: 600px) {
      display: none;
    }
  `}
`