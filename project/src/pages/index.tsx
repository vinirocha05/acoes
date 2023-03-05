import { GetServerSideProps } from 'next';
import { getAllStocks } from '../data/get-all-stocks';
import { Stock } from '../domain/stock';
import StockContainer from '../Components/StockContainer';
import { Container, Nav } from './styles.ts';

export type StockProps = {
  stocks: Stock[];
};

export default function Home({ stocks }: StockProps) {
  return (
    <Container>
      <Nav>
        <h1>seja bem-vindo(a)_</h1>
      </Nav>

      <StockContainer stocks={stocks} />
    </Container>
  );
}

/*
export const getStaticProps: GetStaticProps = async () => {
  const stocks = await getAllStocks();

  return {
    props: { stocks },
  };
};
*/
export const getServerSideProps: GetServerSideProps = async () => {
  const stocks = await getAllStocks();

  return {
    props: { stocks },
  };
};
