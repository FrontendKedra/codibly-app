import { Data } from "../../common/interfaces/interface";

export interface Product {
  data: Data;
  page: number;
  total_pages: number;
}

export const getProductsFromApi = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    new Error(response.statusText);
  }

  return (await response.json()) as Promise<Product[]>;
};
