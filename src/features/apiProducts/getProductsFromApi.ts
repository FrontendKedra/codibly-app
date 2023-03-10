import { ApiResponse } from "../../common/interfaces/interface";

export const getProductsFromApi = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as Promise<ApiResponse[]>;
};
