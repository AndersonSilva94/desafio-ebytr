import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    padding: 2rem;

    form {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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

    @media (max-width: 600px) {
      width: 80%;
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
    margin-top: 2rem;
    transition: all 2s;

    &:hover {
      background: linear-gradient(to right, #E07EF0, #1892A2, #386AC0);
    }
  `}
`