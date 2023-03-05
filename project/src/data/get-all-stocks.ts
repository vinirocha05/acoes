import { API_URL } from '../config/config';
import { Stock, StockData } from '../domain/stock';
import { fetchJson } from '../utils/fetch-json';

export const getAllStocks = async (query = ''): Promise<Stock[]> => {
  const urlQuery = `${API_URL}${query}`;
  const result = await fetchJson<StockData>(urlQuery);
  console.log(result);

  return result.stocks;
};
