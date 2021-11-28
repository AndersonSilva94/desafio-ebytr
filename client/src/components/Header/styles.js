import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
  `}
`;
