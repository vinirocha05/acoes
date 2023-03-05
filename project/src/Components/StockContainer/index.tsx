import Link from 'next/link';
import { Stock } from '../../domain/stock';
import { Container, StockCard } from './styles';

export type StockCardProps = {
  stocks: Stock[];
};

export default function StockContainer({ stocks }: StockCardProps) {
  return (
    <Container>
      {stocks.map((stock) => (
        <Link
          as={`/stocks/${stock.stock}`}
          href="/stocks/[stock]"
          key={stock.name}
        >
          <StockCard>
            <img src={stock.logo} alt="" />
            <h2>{stock.name}</h2>
            <span>{stock.stock}</span>
            <p>{stock.sector}</p>
            <p>Fechamento: R$ {stock.close.toFixed(2)}</p>
          </StockCard>
        </Link>
      ))}
    </Container>
  );
}
