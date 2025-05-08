import styled from 'styled-components';

export const Screen = styled.div`
  background-color: ${({ theme }) => theme.screenBg};
  padding: 0.4rem;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 0.2rem;
  box-shadow: ${({ theme }) => theme.screenShadow};
  border: ${({ theme }) => theme.screenBorder};
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  font-size: 1.7rem;
  transition: background-color 0.9s ease, color 0.9s ease, transform 0.9s ease;
`;
