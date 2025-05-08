import styled from 'styled-components';

export const ButtonDelete = styled.button`
  background-color: ${({ theme }) => theme.buttonCustomBg};
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  width: 65px;
  height: 65px;
  margin: 4px;
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;

  &:hover {
    background-color: ${({ theme }) => theme.deleteHover};
    transform: scale(1.05);
  }
`;
