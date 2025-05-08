import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;
  
  display: flex;
  align-items: center;
  justify-content: center;
  `;
