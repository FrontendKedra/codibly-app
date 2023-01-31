export const getProductsFromApi = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};
