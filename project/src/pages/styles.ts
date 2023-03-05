import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Nav = styled.aside`
  background-color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  padding: 10px 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};

  grid-template-columns: 1fr 3fr;
`;
