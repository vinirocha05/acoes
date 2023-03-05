export type Stock = {
  stock: string;
  name: string;
  close: number;
  change: number;
  volume: number;
  market_cap: null;
  logo: string;
  sector: string;
};

export type StockData = {
  stocks: Stock[];
};
