import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 40vw;
    height: 35rem;
    padding: 2rem 1rem;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;

      label {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;

        input {
          margin-top: 0.2rem;
          padding: 0.5rem;
        }
      }
    }

    p {
      text-align: center;
    }

    @media (max-width: 600px) {
      width: 80vw;
    }
  `}
`;

export const DivLogo = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 1rem;
      width: 25%;
      border-radius: 50%;
    }
  `}
`

export const LinkButton = styled.button`
  ${() => css`
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    background: #333333;
    text-decoration: none;
    color: white;
    margin-bottom: 1rem;
    transition: all 2s;
    cursor: pointer;

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }

    &:not([disabled]):hover {
      background: linear-gradient(to right, #E07EF0, #1892A2, #386AC0);
    }
  `}
`