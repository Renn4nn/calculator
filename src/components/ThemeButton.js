import styled from 'styled-components';

export const ThemeButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
    transform: scale(1.05);
  }
`;
