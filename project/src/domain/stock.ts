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

export type StockDetailData = {
  results: StockDetail[];
};

export type StockDetail = {
  symbol: string;
  shortName: string;
  longName: string;
  currency: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketDayRange: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: string;
  marketCap: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  averageDailyVolume10Day: number;
  averageDailyVolume3Month: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  validRanges: string[];
  historicalDataPrice: number[];
  priceEarnings: number;
  earningsPerShare: number;
  logourl: string;
  dividendsData: Dividends;
};

export type Dividends = {
  cashDividends: CashDividends[];
  stockDividends: StockDividends[];
  subscriptions: [];
};

export type CashDividends = {
  assetIssued: string;
  paymentDate: string;
  rate: number;
  relatedTo: string;
  approvedOn: string;
  isinCode: string;
  label: string;
  lastDatePrior: string;
  remarks: string;
};

export type StockDividends = {
  assetIssued: string;
  factor: number;
  approvedOn: string;
  isinCode: string;
  label: string;
  lastDatePrior: string;
  remarks: string;
};
