import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getStock } from '../../data/get-stock';
import { StockDetail } from '../../domain/stock';
import Loading from '../../Components/Loading';

export type StockDetailsProps = {
  selectedStock: StockDetail;
};

export default function StockDetails({ selectedStock }: StockDetailsProps) {
  const router = useRouter();
  if (router.isFallback) return <Loading />;

  return <div>{selectedStock.longName}</div>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query.stock);

  const selectedStock = await getStock(String(ctx.query.stock));
  console.log(selectedStock);

  return {
    props: { selectedStock },
  };
};
