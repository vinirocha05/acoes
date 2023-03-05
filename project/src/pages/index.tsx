import { GetServerSideProps, GetStaticProps } from 'next';
import { getAllStocks } from '../data/get-all-stocks';
import { Stock } from '../domain/stock';

export type StockProps = {
  stocks: Stock[];
};

export default function Home({ stocks }: StockProps) {
  console.log(stocks);

  return (
    <section>
      <h1>Olá mundo!</h1>
      <div>
        {stocks.map((e) => (
          <p key={e.name}>{e.name}</p>
        ))}
      </div>
    </section>
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
