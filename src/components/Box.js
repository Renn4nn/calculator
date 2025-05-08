import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.box};
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  width: fit-content;
  height: fit-content;
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;
`;
