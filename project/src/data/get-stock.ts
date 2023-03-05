import { API_URL_SINLGE_STOCK } from '../config/config';
import { StockDetail, StockDetailData } from '../domain/stock';
import { fetchJson } from '../utils/fetch-json';

export const getStock = async (stock = ''): Promise<StockDetail> => {
  const urlQuery = `${API_URL_SINLGE_STOCK}/${stock}/?range=1d&interval=1d&fundamental=true&dividends=true`;
  const result = await fetchJson<StockDetailData>(urlQuery);
  return result.results[0];
};
