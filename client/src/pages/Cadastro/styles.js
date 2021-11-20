import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `}
`;

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    width: 80vw;
    height: 35rem;
    background: white;
  `}
`

export const DivImgCadastro = styled.div`
  ${() => css`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem;

    img {
      width: 80%;
    }

    @media (max-width: 600px) {
      display: none;
    }
  `}
`

export const LinhaVertical = styled.div`
  ${() => css`
    width: 1px;
    background-color: silver;
    height: 80%;
    border-radius: 2px;

    @media (max-width: 600px) {
      display: none;
    }
  `}
`