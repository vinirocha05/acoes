import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 5rem;
  max-width: 96rem;
  margin: 2rem auto;
`;

export const StockCard = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    font-weight: 700;
  }
  img {
    max-width: 100px;
    border-radius: 100px;
  }

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
  cursor: pointer;
  transition: 300ms all ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;
