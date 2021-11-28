import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
  `}
`;

export const InputTarefa = styled.input`
  ${() => css`
    padding: 1rem;
    width: 80%;
  `}
`;

export const BotaoTarefa = styled.button`
  ${() => css`
    padding: 1rem;
    text-align: center;
    border-radius: 5px;
    background: #1892A2;
    color: white;
    width: 15%;
    cursor: pointer;
    border: none;

    &:hover {
      opacity: 0.8;
    }
  `}
`;
