export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
  data: [];
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
