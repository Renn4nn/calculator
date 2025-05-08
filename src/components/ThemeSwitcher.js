import styled from 'styled-components';

export const ThemeSwitcher = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 15px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;
`;