import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 30vw;
    height: 80vh;
    padding: 2rem 1rem;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    form {
      display: flex;
      flex-direction: column;

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
  `}
`;

export const LinkButton = styled(Link)`
  ${() => css`
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    background: #333333;
    text-decoration: none;
    color: white;
    margin-bottom: 1rem;
    transition: all 2s;

    &:hover {
      background: linear-gradient(to right, #E07EF0, #1892A2, #386AC0);
    }
  `}
`